export default class Color {
    constructor(private hex: number, private _opacity: number = 1.0) {}
    public get value(): number {
        return this.hex;
    }
    public set value(hex: number) {
        this.hex = hex;
    }
    public get opacity(): number {
        return this._opacity;
    }
    public set opacity(opacity: number) {
        this._opacity = opacity;
    }
    public get r(): number {
        return this.hex >> 16;
    }
    public get g(): number {
        return this.hex >> 8 & 0xff;
    }
    public get b(): number {
        return this.hex & 0xff;
    }
    public toGl(): number[] {
        return [
            (this.hex >> 16) / 255,
            (this.hex >> 8 & 0xff) / 255,
            (this.hex & 0xff) / 255,
            this._opacity,
        ];
    }
}
