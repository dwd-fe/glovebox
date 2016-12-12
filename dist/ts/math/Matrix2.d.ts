/// <reference types="gl-matrix" />
import { mat2 } from 'gl-matrix';
import Vector2 from './Vector2';
export default class Matrix2 {
    private instance;
    constructor(a: number | Vector2 | mat2, b?: number | Vector2, c?: number, d?: number);
    det(): number;
    get(index: number): number;
    set(index: number, value: number): void;
}
