/// <reference types="gl-matrix" />
import { vec2 } from 'gl-matrix';
export default class Vector2 {
    private instance;
    private _updated;
    constructor(x: number | vec2, y?: number);
    updated: boolean;
    x: number;
    y: number;
    add(vec: Vector2): Vector2;
    sub(vec: Vector2): Vector2;
    div(vec: Vector2): Vector2;
    mul(vec: Vector2): Vector2;
    dist(vec: Vector2): number;
    dot(vec: Vector2): number;
    rotate(vec: Vector2, rad: number): Vector2;
    toString(): string;
}
