import gl from 'core/gl';
import Attribute from 'core/Attribute';
import Drawable from 'core/Drawable';
import TextureUniform from 'core/TextureUniform';
import Texture from 'core/Texture';

import vs from 'shaders/vertex/BoxImage.glsl';
import fs from 'shaders/fragment/BoxImage.glsl';


export default class BoxImage extends Drawable {
    private a_vertex: Attribute;
    private a_uv: Attribute;
    private u_tex: TextureUniform;

    constructor(texture: Texture, private _width: number, private _height: number) {
        super(vs, fs);
        this.a_vertex = new Attribute(new Float32Array(8), Attribute.FLOAT, 2);
        this.attachAttribute('a_vertex', this.a_vertex);

        this.a_uv = new Attribute(new Float32Array(8), Attribute.FLOAT, 2);
        this.attachAttribute('a_uv', this.a_uv);

        this.u_tex = new TextureUniform(texture);
        this.attachUniform('u_tex', this.u_tex);


        this.a_uv.set(0, 0, 0);
        this.a_uv.set(1, 0, 1);
        this.a_uv.set(2, 1, 0);
        this.a_uv.set(3, 1, 1);

        this.createVertex();
        this.endIndex = 4;
        this._drawType = Attribute.TRIANGLE_STRIP;
    }


    public get width(): number {
        return this._width;
    }

    public set width(width: number) {
        this._width = width;
        this.createVertex();
    }

    public get height(): number {
        return this._height;
    }

    public set height(height: number) {
        this._height = height;
        this.createVertex();
    }

    private createVertex(): void {
        this.a_vertex.set(0, 0, 0);
        this.a_vertex.set(2, this._width, 0);
        this.a_vertex.set(1, 0, this._height);
        this.a_vertex.set(3, this._width, this._height);
    }
}
