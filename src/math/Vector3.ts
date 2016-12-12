import { vec3 } from 'gl-matrix';
import Matrix3 from './Matrix3';

export default class Vector3 {
    private instance: vec3;
    private _updated: boolean = true;

    constructor(x: number | vec3, y?: number, z?: number) {
        if (typeof x === 'number') {
            this.instance = vec3.fromValues(x, y ,z);
        } else if (x instanceof Float32Array) {
            this.instance = x;
        }
    }

    transform(mat: Matrix3): Vector3 {
        const x: number = this.x * mat.raw.slice(0, 3).reduce((a, b) => a + b, 0);
        const y: number = this.y * mat.raw.slice(3, 6).reduce((a, b) => a + b, 0);
        const z: number = this.z * mat.raw.slice(6, 9).reduce((a, b) => a + b, 0);
        return new Vector3(x, y, z);
    }

    public get updated(): boolean {
        return this._updated;
    }

    public set updated(updated: boolean) {
        this._updated = updated;
    }

    public get xy(): number[] {
        return [this.instance[0], this.instance[1]];
    }

    public get x(): number {
        return this.instance[0];
    }

    public get y(): number {
        return this.instance[1];
    }

    public get z(): number {
        return this.instance[2];
    }

    public set x(x: number) {
        this.instance[0] = x;
        this._updated = true;
    }

    public set y(y: number) {
        this.instance[1] = y;
        this._updated = true;
    }

    public set z(z: number) {
        this.instance[2] = z;
        this._updated = true;
    }
}
