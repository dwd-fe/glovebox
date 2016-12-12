import gl from 'core/gl';
import Attribute from 'core/Attribute';
import Drawable from 'core/Drawable';
import Color from 'core/Color';
import Uniform from 'core/Uniform';
import Vector2 from 'math/Vector2';
import earcut = require('earcut');

import vs from 'shaders/vertex/Polygon.glsl';
import fs from 'shaders/fragment/Polygon.glsl';


export default class Polygon extends Drawable {

    protected a_vertex: Attribute;
    protected _color: Color = new Color(0xff0000);
    protected u_color: Uniform;

    constructor(protected _points: Vector2[]) {
        super(vs, fs);
        this.a_vertex = new Attribute(Attribute.ARRAY_BUFFER, null, Attribute.FLOAT, 2);
        this.attachAttribute('a_vertex', this.a_vertex);

        this.u_color = new Uniform(Uniform.FLOAT, 4);
        this.u_color.set(...this._color.toGl());
        this.attachUniform('u_color', this.u_color);

        this.calculateVertices();
    }


    public get color(): number {
        return this._color.value;
    }

    public set color(color: number) {
        this._color.value = color;
        this.u_color.set(...this._color.toGl());
    }

    public get opacity(): number {
        return this._color.opacity;
    }

    public set opacity(opacity: number) {
        this._color.opacity = opacity;
        this.u_color.set(...this._color.toGl());
    }

    public get points(): Vector2[] {
        return this._points;
    }

    public set points(points: Vector2[]) {
        this._points = points;
    }

    protected calculateVertices(): void {
        if (this._points.length) {
            const indices = earcut(this._points.map(vec => [vec.x, vec.y]).reduce((l, v) => l.concat(v), []));
            const length = this._points.length - 2;
            const data = new Float32Array(length * 3 * 2)

            for (let i = 0, l = indices.length; i < l; i++) {
                const p = this._points[indices[i]];
                data[i * 2] = p.x;
                data[i * 2 + 1] = p.y;
            }

            this.a_vertex.replaceWith(data);
            this._endIndex = length * 3;
        }
    }
}
