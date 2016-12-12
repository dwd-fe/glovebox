import { mat2 }from 'gl-matrix';
import Vector2 from './Vector2';

export default class Matrix2 {
    private instance: mat2;
    constructor(a: number | Vector2 | mat2, b?: number | Vector2, c?: number, d?: number) {
        if ((a instanceof Float32Array)) {
            this.instance = a;
        } else if ((a instanceof Vector2) && (b instanceof Vector2)) {
            this.instance = mat2.fromValues(a.x, a.y, b.x, b.y);
        } else {
            this.instance = mat2.fromValues(<number>a, <number>b, c, d);
        }
    }
    det(): number {
        return mat2.determinant(this.instance);
    }
    get(index: number): number {
        return this.instance[index];
    }
    set(index: number, value: number): void {
        this.instance[index] = value;
    }
}
