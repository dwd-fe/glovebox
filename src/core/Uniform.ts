import gl from 'core/gl';
import AbstractUniform from 'core/AbstractUniform';
import Constants from 'core/Constants';

export default class Uniform extends AbstractUniform {
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
        const type = this.type === Constants.UniformType.INT ? 'i' : 'f';
        gl[`uniform${this.size}${type}`](loc, ...(this.buffer));
    }

    set(...data: number[]) {
        if (data.length > this.size) {
            throw new Error(`This attribute is for ${this.size}-number sized uniform`);
        }
        for (let i = 0; i < data.length; i++) {
            this.buffer[i] = data[i];
        }
        this.updated = true;
    }
    get(): number[] {
        return this.buffer;
    }
}
