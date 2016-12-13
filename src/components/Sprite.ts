import gl from 'core/gl';
import Attribute from 'core/Attribute';
import Drawable from 'core/Drawable';
import TextureUniform from 'core/TextureUniform';
import Texture from 'core/Texture';

import vs from 'shaders/vertex/Sprite.glsl';
import fs from 'shaders/fragment/Sprite.glsl';


export default class Sprite extends Drawable {
    private a_vertex: Attribute;
    private a_uv: Attribute;
    private u_tex: TextureUniform;
    private _xIndex: number = 0;
    private _yIndex: number = 0;

    constructor(private texture: Texture, private _tileWidth: number, private _tileHeight: number, private _width: number, private _height: number) {
        super(vs, fs);
        this.a_vertex = new Attribute(new Float32Array(8), Attribute.FLOAT, 2);
        this.attachAttribute('a_vertex', this.a_vertex);

        this.a_uv = new Attribute(new Float32Array(8), Attribute.FLOAT, 2);
        this.attachAttribute('a_uv', this.a_uv);

        this.u_tex = new TextureUniform(texture);
        this.attachUniform('u_tex', this.u_tex);

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

    public get tileWidth(): number {
        return this._tileWidth;
    }

    public set tileWidth(tileWidth: number) {
        this._tileWidth = tileWidth;
        this.createVertex();
    }

    public get tileHeight(): number {
        return this._tileHeight;
    }

    public set tileHeight(tileHeight: number) {
        this._tileHeight = tileHeight;
        this.createVertex();
    }

    public get xIndex(): number {
        return this._xIndex;
    }

    public set xIndex(xIndex: number) {
        this._xIndex = xIndex;
        this.createVertex();
    }

    public get yIndex(): number {
        return this._yIndex;
    }

    public set yIndex(yIndex: number) {
        this._yIndex = yIndex;
        this.createVertex();
    }

    private createVertex(): void {
        this.a_vertex.set(0, 0, 0);
        this.a_vertex.set(2, this._width, 0);
        this.a_vertex.set(1, 0, this._height);
        this.a_vertex.set(3, this._width, this._height);

        const xRatio = this._tileWidth / this.texture.image.width;
        const yRatio = this._tileHeight / this.texture.image.height;

        this.a_uv.set(0, this._xIndex * xRatio, this._yIndex * yRatio);
        this.a_uv.set(1, this._xIndex * xRatio, (this._yIndex + 1) * yRatio);
        this.a_uv.set(2, (this._xIndex + 1) * xRatio, this._yIndex * yRatio);
        this.a_uv.set(3, (this._xIndex + 1) * xRatio, (this._yIndex + 1) * yRatio);
    }
}
