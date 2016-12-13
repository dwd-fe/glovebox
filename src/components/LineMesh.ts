import gl from 'core/gl';
import Attribute from 'core/Attribute';
import Drawable from 'core/Drawable';
import Uniform from 'core/Uniform';
import Vector2 from 'math/Vector2';
import Color from 'core/Color';
import Line from 'math/Line';

import vs from 'shaders/vertex/LineMesh.glsl';
import fs from 'shaders/fragment/LineMesh.glsl';


export default class LineMesh extends Drawable {
    private a_vertex: Attribute;
    private _color: Color = new Color(0xff0000);
    private u_color: Uniform;

    constructor(private points: Vector2[], private _width: number) {
        super(vs, fs);
        const length = this.points.length;
        this.a_vertex = new Attribute(new Float32Array(length * 2 * 2), Attribute.FLOAT, 2);
        this.attachAttribute('a_vertex', this.a_vertex);

        this.u_color = new Uniform(Uniform.FLOAT, 4);
        this.u_color.set(...this._color.toGl());
        this.attachUniform('u_color', this.u_color);

        this.createVertex(_width);
        this.endIndex = points.length * 2;
        this._drawType = Attribute.TRIANGLE_STRIP;
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

    public get width(): number {
        return this._width;
    }

    public set width(width: number) {
        this._width = width;
        this.createVertex(width);
    }

    private createVertex(width: number): void {
        for (let i = 0, length = this.points.length - 1; i < length; i++) {
            const v0 = this.points[i];
            const v1 = this.points[i + 1];
            const startOffset = new Line(v0, v1).offset(width / 2);
            const endOffset = new Line(v1, v0).offset(-width / 2);
            const startPositive = startOffset.rotate(v0, Math.PI / 2);
            const startNegative = startOffset.rotate(v0, -Math.PI / 2);
            const endPositive = endOffset.rotate(v1, Math.PI / 2);
            const endNegative = endOffset.rotate(v1, -Math.PI / 2);
            this.a_vertex.set((i + 1) * 2 + 0, endPositive.x, endPositive.y);
            this.a_vertex.set((i + 1) * 2 + 1, endNegative.x, endNegative.y);
            if (i === 0) {
                this.a_vertex.set(i * 2 + 0, startPositive.x, startPositive.y);
                this.a_vertex.set(i * 2 + 1, startNegative.x, startNegative.y);
                continue;
            }
            const lastStartPositiveVertex = this.a_vertex.get((i - 1) * 2);
            const lastStartPositive = new Vector2(lastStartPositiveVertex[0], lastStartPositiveVertex[1]);
            const currentStartPositiveVertex = this.a_vertex.get(i * 2);
            const currentStartPositive = new Vector2(currentStartPositiveVertex[0], currentStartPositiveVertex[1]);
            const positiveIntersection = new Line(lastStartPositive, currentStartPositive)
                                            .intersect(
                                                new Line(startPositive, endPositive)
                                            );

            this.a_vertex.set(i * 2 + 0, positiveIntersection.x, positiveIntersection. y);

            const lastStartNegativeVertex = this.a_vertex.get((i - 1) * 2 + 1);
            const lastStartNegative = new Vector2(lastStartNegativeVertex[0], lastStartNegativeVertex[1]);
            const currentStartNegativeVertex = this.a_vertex.get(i * 2 + 1);
            const currentStartNegative = new Vector2(currentStartNegativeVertex[0], currentStartNegativeVertex[1]);
            const negativeIntersection = new Line(lastStartNegative, currentStartNegative)
                                            .intersect(
                                                new Line(startNegative, endNegative)
                                            );
            this.a_vertex.set(i * 2 + 1, negativeIntersection.x, negativeIntersection. y);
        }
    }
}
