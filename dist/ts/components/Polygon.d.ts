import Attribute from 'core/Attribute';
import Drawable from 'core/Drawable';
import Color from 'core/Color';
import Uniform from 'core/Uniform';
import Vector2 from 'math/Vector2';
export default class Polygon extends Drawable {
    protected _points: Vector2[];
    protected a_vertex: Attribute;
    protected _color: Color;
    protected u_color: Uniform;
    constructor(_points: Vector2[]);
    color: number;
    opacity: number;
    points: Vector2[];
    protected calculateVertices(): void;
}
