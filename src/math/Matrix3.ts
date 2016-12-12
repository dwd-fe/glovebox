import { mat3 } from 'gl-matrix';

export default class Matrix3 {
    private instance: mat3;
    private _updated: boolean = true;

    constructor(
        m00: mat3 | number, m01?: number, m02?: number,
        m10?: number, m11?: number, m12?: number,
        m20?: number, m21?: number, m22?: number) {
        if (m00 instanceof Float32Array) {
            this.instance = m00;
        } else {
            this.instance = mat3.fromValues(
                <number>m00, m01, m02,
                m10, m11, m12,
                m20, m21, m22,
            );
        }
    }
    public get updated(): boolean {
        return this._updated;
    }
    public set updated(updated: boolean) {
        this._updated = updated;
    }
    mul(mat: Matrix3): Matrix3 {
        return new Matrix3(
            mat3.multiply(
                mat3.create(),
                this.instance,
                mat.instance,
            )
        )
    }
    public get raw(): mat3 {
        return this.instance;
    }

    get(index: number): number {
        return this.instance[index];
    }

    set(index: number, value: number): void {
        this.instance[index] = value;
        this._updated = true;
    }

    toMat3(): Float32Array {
        const m = this.instance;
        /*
        return new Float32Array([
            m[0], m[1], m[2],
            m[3], m[4], m[5],
            m[6], m[7], m[8]
        ]);
        */
        return new Float32Array([
            m[0], m[3], m[6],
            m[1], m[4], m[7],
            m[2], m[5], m[8]
        ]);
    }
}
