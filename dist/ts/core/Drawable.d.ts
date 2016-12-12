import AbstractUniform from 'core/AbstractUniform';
import Attribute from 'core/Attribute';
import Constants from 'core/Constants';
import Uniform from 'core/Uniform';
import Vector2 from 'math/Vector2';
import MatrixUniform from 'core/MatrixUniform';
export default class Drawable {
    protected attributes: {
        [name: string]: {
            attribute: Attribute;
            attached: boolean;
        };
    };
    protected uniforms: {
        [name: string]: AbstractUniform;
    };
    protected _program: WebGLProgram;
    protected _drawType: Constants.DrawType;
    protected _startIndex: number;
    protected _endIndex: number;
    protected _id: number;
    protected _zIndex: number;
    protected _name: string;
    position: Vector2;
    scale: Vector2;
    _rotation: number;
    private rotationUpdated;
    protected u_offscreen: Uniform;
    protected _viewMatrix: MatrixUniform;
    constructor(vertexShaderString: string, fragmentShaderString: string);
    readonly id: number;
    offscreen: boolean;
    rotation: number;
    zIndex: number;
    readonly program: WebGLProgram;
    readonly drawType: Constants.DrawType;
    startIndex: number;
    endIndex: number;
    name: string;
    updateAttribuets(): void;
    updateUniforms(): void;
    attachAttribute(name: string, attribute: Attribute): void;
    detachAttribute(name: string): void;
    attachUniform(name: string, uniform: AbstractUniform): void;
    detachUniform(name: string): void;
    update(): void;
}
