import Drawable from 'core/Drawable';
import Texture from 'core/Texture';
export default class Sprite extends Drawable {
    private texture;
    private _tileWidth;
    private _tileHeight;
    private _width;
    private _height;
    private a_vertex;
    private a_uv;
    private u_tex;
    private _xIndex;
    private _yIndex;
    constructor(texture: Texture, _tileWidth: number, _tileHeight: number, _width: number, _height: number);
    width: number;
    height: number;
    tileWidth: number;
    tileHeight: number;
    xIndex: number;
    yIndex: number;
    private createVertex();
}
