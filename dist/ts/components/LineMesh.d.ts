import Drawable from 'core/Drawable';
import Vector2 from 'math/Vector2';
export default class LineMesh extends Drawable {
    private points;
    private _width;
    private a_vertex;
    private _color;
    private u_color;
    constructor(points: Vector2[], _width: number);
    color: number;
    opacity: number;
    width: number;
    private createVertex(width);
}
