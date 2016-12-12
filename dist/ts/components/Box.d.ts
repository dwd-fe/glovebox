import Drawable from 'core/Drawable';
export default class Box extends Drawable {
    private _width;
    private _height;
    private a_vertex;
    private _color;
    private u_color;
    constructor(_width: number, _height: number);
    width: number;
    height: number;
    color: number;
    opacity: number;
    private createVertex();
}
