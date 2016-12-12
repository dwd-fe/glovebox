export default class Font {
    private canvas;
    private manifest;
    private _height;
    private _width;
    private _heightRatio;
    private _widthRatio;
    getText(...charCodes: number[]): [number, number][];
    readonly width: number;
    readonly height: number;
    readonly heightRatio: number;
    readonly widthRatio: number;
    readonly image: HTMLCanvasElement;
    static loadFont(fontFile: string, fontSize: number): Promise<Font>;
}
