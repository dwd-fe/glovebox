import AbstractUniform from 'core/AbstractUniform';
import Constants from 'core/Constants';
export default class Uniform extends AbstractUniform {
    static INT: Constants.UniformType;
    static FLOAT: Constants.UniformType;
    private buffer;
    private type;
    private size;
    constructor(type: Constants.UniformType, size: number);
    protected _update(loc: WebGLUniformLocation): void;
    set(...data: number[]): void;
    get(): number[];
}
