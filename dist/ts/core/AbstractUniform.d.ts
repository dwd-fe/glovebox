declare abstract class AbstractUniform {
    protected updated: boolean;
    readonly needsUpdate: boolean;
    protected abstract _update(loc: WebGLUniformLocation): void;
    update(loc: WebGLUniformLocation): void;
}
export default AbstractUniform;
