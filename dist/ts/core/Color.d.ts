export default class Color {
    private hex;
    private _opacity;
    constructor(hex: number, _opacity?: number);
    value: number;
    opacity: number;
    readonly r: number;
    readonly g: number;
    readonly b: number;
    toGl(): number[];
}
