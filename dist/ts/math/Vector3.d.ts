/// <reference types="gl-matrix" />
import { vec3 } from 'gl-matrix';
import Matrix3 from './Matrix3';
export default class Vector3 {
    private instance;
    private _updated;
    constructor(x: number | vec3, y?: number, z?: number);
    transform(mat: Matrix3): Vector3;
    updated: boolean;
    readonly xy: number[];
    x: number;
    y: number;
    z: number;
}
