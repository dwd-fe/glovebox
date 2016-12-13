import gl from 'core/gl';
import AbstractUniform from 'core/AbstractUniform';
import Attribute from 'core/Attribute';
import Constants from 'core/Constants';
import Uniform from 'core/Uniform';
import Matrix3 from 'math/Matrix3';
import Vector2 from 'math/Vector2';
import MatrixUniform from 'core/MatrixUniform';
import TextureUniform from 'core/TextureUniform';
import viewport from 'core/viewport';
import viewportScale from 'core/viewport/scale';
import viewportCamera from 'core/viewport/Camera';
import { getId } from 'core/guid';

import commonVertexShader from 'shaders/vertex/common.glsl';
import commonFragmentShader from 'shaders/fragment/common.glsl';

function pad(str: number, size: number): string {
    return (<any>' ').repeat(size).slice(0, size - str.toString().length) + str;
}

function createShader(type: number, source: string): WebGLShader {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const size = source.split('\n').length.toString().length;
        console.warn('\n' + source.split('\n').map((line, i) => `${pad(i + 1, size)}: ${line}`).join('\n'));
        throw gl.getShaderInfoLog(shader);
    }
    return shader;
}

function patchFragment(shader: string): string {
    const regex = /void\s+main\(\s*\)\s*\{\s*/;
    const regexResult = regex.exec(shader);
    const index = regexResult.index;
    let result = shader.substr(0, index);
    result += `
void main() {
    if (u_offscreen == 1) {
        gl_FragColor = vec4(u_id, 1.0);
        return;
    }
    `;
    result += shader.substr(index + regexResult[0].length);
    return result;
}



export default class Drawable {
    protected attributes: { [name: string]: { attribute: Attribute, attached: boolean } } = {};
    protected uniforms: { [name: string]: AbstractUniform } = {};
    protected _program: WebGLProgram = gl.createProgram();
    protected _drawType: Constants.DrawType = gl.TRIANGLES;
    protected _startIndex: number = 0;
    protected _endIndex: number = 0;
    protected _id: number = getId();
    protected _zIndex: number = 0;
    protected _name: string = '';
    protected _drawMethod: Constants.DrawMethod = Constants.DrawMethod.ARRAYS;
    protected _elementType: Constants.ElementType = Constants.ElementType.UNSIGNED_BYTE;

    public position: Vector2 = new Vector2(0, 0);
    public scale: Vector2 = new Vector2(1, 1);
    public _rotation: number = 0;
    private rotationUpdated: boolean = true;
    protected u_offscreen: Uniform = new Uniform(Uniform.INT, 1);
    protected _viewMatrix: MatrixUniform = new MatrixUniform(3);


    public constructor(vertexShaderString: string, fragmentShaderString: string) {
        const vertexShader = createShader(gl.VERTEX_SHADER, commonVertexShader + vertexShaderString);
        const fragmentShader = createShader(gl.FRAGMENT_SHADER, commonFragmentShader + patchFragment(fragmentShaderString));
        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this._program);
        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
            throw gl.getProgramInfoLog(this.program);
        }
        this.u_offscreen.set(0);
        this.attachUniform('viewMatrix', this._viewMatrix);
        this.attachUniform('u_offscreen', this.u_offscreen);
        const u_id = new Uniform(Uniform.FLOAT, 3);
        u_id.set(
            (this._id >> 16) / 255,
            (this._id >> 8 & 0xff) / 255,
            (this._id & 0xff) / 255
        );
        this.attachUniform('u_id', u_id);

        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
    }

    public get id(): number {
        return this._id;
    }

    public set offscreen(offscreen: boolean) {
        this.u_offscreen.set(offscreen ? 1 : 0);
    }

    public get rotation(): number {
        return this._rotation;
    }

    public set rotation(rotation: number) {
        this._rotation = rotation;
        this.rotationUpdated = true;
    }

    public get zIndex(): number {
        return this._zIndex;
    }

    public set zIndex(zIndex: number) {
        this._zIndex = zIndex;
    }

    public get program(): WebGLProgram {
        return this._program;
    }

    public get drawType(): Constants.DrawType {
        return this._drawType;
    }

    public get drawMethod(): Constants.DrawMethod {
        return this._drawMethod;
    }

    public get elementType(): Constants.ElementType {
        return this._elementType
    }

    public get startIndex(): number {
        return this._startIndex;
    }

    public set startIndex(startIndex: number) {
        this._startIndex = startIndex;
    }

    public get endIndex(): number {
        return this._endIndex;
    }

    public set endIndex(endIndex: number) {
        this._endIndex = endIndex;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public updateAttribuets(): void {
        for (const name in this.attributes) {
            const { attribute, attached } = this.attributes[name];
            const loc = gl.getAttribLocation(this.program, name);
            if (loc < 0) {
                throw new Error(`Failed to get attribute location for '${name}'`);
            }
            attribute.update(loc);
            if (!attached) {
                gl.enableVertexAttribArray(loc);
                this.attributes[name].attached = true;
            }
        }
    }

    public updateUniforms(): void {
        let textureCount = 0;
        for (const name in this.uniforms) {
            const uniform = this.uniforms[name];
            const loc = gl.getUniformLocation(this.program, name);
            if (loc < 0) {
                throw new Error(`Failed to get uniform location for '${name}'`);
            }
            if (uniform instanceof TextureUniform) {
                (<TextureUniform>uniform).setActiveIndex(textureCount++);
            }
            if (uniform instanceof TextureUniform ||
                uniform.needsUpdate) {
                uniform.update(loc);
            }
        }
    }

    public attachAttribute(name: string, attribute: Attribute): void {
        if (this.attributes[name] && this.attributes[name].attached) {
            gl.disableVertexAttribArray(gl.getAttribLocation(this.program, name));
        }
        this.attributes[name] = {
            attribute,
            attached: false,
        };
    }

    public detachAttribute(name: string): void {
        if (this.attributes[name]) {
            delete this.attributes[name];
            gl.disableVertexAttribArray(gl.getAttribLocation(this.program, name));
        }
    }

    public attachUniform(name: string, uniform: AbstractUniform): void {
        this.uniforms[name] = uniform;
    }

    public detachUniform(name: string): void {
        delete this.uniforms[name];
    }

    public update(): void {
        if (
            this.position.updated ||
            this.rotationUpdated ||
            this.scale.updated ||
            viewportScale.updated ||
            viewportCamera.updated
        ) {
            this.position.updated = false;
            this.rotationUpdated = false;
            this.scale.updated = false;

            const s = Math.sin(this._rotation);
            const c = Math.cos(this._rotation);

            this._viewMatrix.replace(
                viewport
                .mul(
                    new Matrix3(
                        1, 0, 0,
                        0, 1, 0,
                        viewportCamera.x, viewportCamera.y, 1,
                    )
                )
                .mul(
                    new Matrix3(
                        viewportScale.x, 0, 0,
                        0, viewportScale.y, 0,
                        0, 0, 1,
                    )
                )
                .mul(
                    new Matrix3(
                        c, -s, 0,
                        s, c, 0,
                        0, 0, 1
                    )
                )
                .mul(
                    new Matrix3(
                        1, 0, 0,
                        0, 1, 0,
                        this.position.x, this.position.y, 1,
                    )
                )
                .mul(
                    new Matrix3(
                        this.scale.x, 0, 0,
                        0, this.scale.y, 0,
                        0, 0, 1,
                    )
                )
                .toMat3()
            );
        }
        this.updateAttribuets();
        this.updateUniforms();
    }
}
