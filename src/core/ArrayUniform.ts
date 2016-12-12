import gl from 'core/gl';
import AbstractUniform from 'core/AbstractUniform';
import Constants from 'core/Constants';

type TypedArray = Int32Array | Float32Array;

export default class ArrayUniform extends AbstractUniform {
    static INT: Constants.UniformType = Constants.UniformType.INT;
    static FLOAT: Constants.UniformType = Constants.UniformType.FLOAT;

    private buffer: number[] = [];
    private type: Constants.UniformType;
    private size: number;

    constructor(type: Constants.UniformType, size: number) {
        super();
        this.type = type;
        this.size = size;
    }
    protected _update(loc: WebGLUniformLocation): void {
        const type = this.type === Constants.UniformType.INT ? 'iv' : 'fv';
        let buffer: TypedArray = null;
        if (this.type === Constants.UniformType.INT) {
            buffer = new Int32Array(this.buffer);
        }
        if (this.type === Constants.UniformType.FLOAT) {
            buffer = new Float32Array(this.buffer);
        }
        gl[`uniform${this.size}${type}`](loc, buffer);
    }

    set(index: number, ...data: number[]) {
        if (data.length > this.size) {
            throw new Error(`This attribute is for ${this.size}-number sized uniform`);
        }
        for (let i = 0; i < data.length; i++) {
            this.buffer[index * this.size + i] = data[i];
        }
        this.updated = true;
    }
}
