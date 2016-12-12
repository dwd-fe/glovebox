import Vector2 from './Vector2';
import Matrix2 from './Matrix2';

export default class Line {
    private _length: number;
    constructor(public start: Vector2, public end: Vector2) {}
    public get length(): number {
        return this.start.dist(this.end);
    }
    offset(distance: number): Vector2 {
        return this.start
            .add(
                new Vector2(distance)
                    .mul(
                        this.end
                            .sub(this.start)
                    )
                    .div(new Vector2(this.length))
            );
    }
    // https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
    intersect(line: Line): Vector2 {
        const d1 = new Matrix2(this.start, this.end).det();
        const d2 = new Matrix2(line.start, line.end).det();
        const x1 = new Matrix2(this.start.x, 1, this.end.x, 1).det();
        const x2 = new Matrix2(line.start.x, 1, line.end.x, 1).det();
        const y1 = new Matrix2(this.start.y, 1, this.end.y, 1).det();
        const y2 = new Matrix2(line.start.y, 1, line.end.y, 1).det();
        const base = new Matrix2(x1, y1, x2, y2).det();
        return new Vector2(
            new Matrix2(d1, x1, d2, x2).det() / base,
            new Matrix2(d1, y1, d2, y2).det() / base
        );

    }

    toString(): string {
        return `${this.start.toString()} -> ${this.end.toString()}`;
    }
}
