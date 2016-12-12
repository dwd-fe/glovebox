import AbstractUniform from 'core/AbstractUniform';
export default class MatrixUniform extends AbstractUniform {
    private buffer;
    private type;
    private _size;
    constructor(size: number);
    protected _update(loc: WebGLUniformLocation): void;
    set(col: number, row: number, value: number): void;
    replace(buffer: Float32Array): void;
    readonly size: number;
    get(col: number, row: number): number;
}
