import gl from 'core/gl';
import Polygon from 'components/Polygon';
import Vector2 from 'math/Vector2';


export default class Box extends Polygon {
    constructor(private _width: number, private _height: number) {
        super([]);
        this.createVertex();
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
        const points: Vector2[] = [];
        points.push(new Vector2(0, 0));
        points.push(new Vector2(0, this._height));
        points.push(new Vector2(this._width, this._height));
        points.push(new Vector2(this._width, 0));
        this._points = points;
        this.calculateVertices();
    }
}
