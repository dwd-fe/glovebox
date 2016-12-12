import gl from 'core/gl';
import Attribute from 'core/Attribute';
import Drawable from 'core/Drawable';
import Color from 'core/Color';
import Uniform from 'core/Uniform';

import vs from 'shaders/vertex/Box.glsl';
import fs from 'shaders/fragment/Box.glsl';


export default class Box extends Drawable {
    private a_vertex: Attribute;
    private _color: Color = new Color(0xff0000);
    private u_color: Uniform;

    constructor(private _width: number, private _height: number) {
        super(vs, fs);
        this.a_vertex = new Attribute(Attribute.ARRAY_BUFFER, new Float32Array(8), Attribute.FLOAT, 2);
        this.attachAttribute('a_vertex', this.a_vertex);

        this.u_color = new Uniform(Uniform.FLOAT, 4);
        this.u_color.set(...this._color.toGl());
        this.attachUniform('u_color', this.u_color);

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

    private createVertex(): void {
        this.a_vertex.set(0, 0, 0);
        this.a_vertex.set(2, this._width, 0);
        this.a_vertex.set(1, 0, this._height);
        this.a_vertex.set(3, this._width, this._height);
    }
}
