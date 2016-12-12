import Vector2 from './Vector2';
export default class Line {
    start: Vector2;
    end: Vector2;
    private _length;
    constructor(start: Vector2, end: Vector2);
    readonly length: number;
    offset(distance: number): Vector2;
    intersect(line: Line): Vector2;
    toString(): string;
}
