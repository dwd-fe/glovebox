import Drawable from 'core/Drawable';
import Texture from 'core/Texture';
export default class BoxImage extends Drawable {
    private _width;
    private _height;
    private a_vertex;
    private a_uv;
    private u_tex;
    constructor(texture: Texture, _width: number, _height: number);
    width: number;
    height: number;
    private createVertex();
}
