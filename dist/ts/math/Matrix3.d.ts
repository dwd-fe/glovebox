/// <reference types="gl-matrix" />
import { mat3 } from 'gl-matrix';
export default class Matrix3 {
    private instance;
    private _updated;
    constructor(m00: mat3 | number, m01?: number, m02?: number, m10?: number, m11?: number, m12?: number, m20?: number, m21?: number, m22?: number);
    updated: boolean;
    mul(mat: Matrix3): Matrix3;
    readonly raw: mat3;
    get(index: number): number;
    set(index: number, value: number): void;
    toMat3(): Float32Array;
}
