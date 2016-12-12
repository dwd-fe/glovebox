abstract class AbstractUniform {
    protected updated: boolean = true;

    public get needsUpdate(): boolean {
        return this.updated;
    }

    protected abstract _update(loc: WebGLUniformLocation): void;
    public update(loc: WebGLUniformLocation): void {
        this._update(loc);
        this.updated = false;
    }
}

export default AbstractUniform;
