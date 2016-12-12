import * as opentype from 'opentype.js';

function toNearestBase(n: number, e: number): number {
    return Math.pow(e, Math.ceil(Math.log(n) / Math.log(e)));
}

const CHARS = [];
for (let i = 0x21; i < 0x7f; i++) {
    CHARS.push(String.fromCharCode(i));
}

interface Path {

}

interface Stroke {
    code: number;
    path: any[];
    width: number;
}

interface FontManifest {
    [key: number]: [number, number];
}


export default class Font {
    private canvas: HTMLCanvasElement;
    private manifest: FontManifest;
    private _height: number;
    private _width: number;
    private _heightRatio: number;
    private _widthRatio: number;

    getText(...charCodes: number[]): [number, number][] {
        const result: [number, number][] = [];
        for (const charCode of charCodes) {
            const m = this.manifest[charCode];
            result.push(m);
        }
        return result;
    }

    public get width(): number {
        return this._width;
    }

    public get height(): number {
        return this._height;
    }

    public get heightRatio(): number {
        return this._heightRatio;
    }

    public get widthRatio(): number {
        return this._widthRatio;
    }

    public get image(): HTMLCanvasElement {
        return this.canvas;
    }

    static async loadFont(fontFile: string, fontSize: number): Promise<Font> {
        return new Promise<Font>((resolve, reject) => {
            opentype.load(fontFile, (err, font) => {
                if (err) return reject(err);

                const charStrokes: Stroke[] = [];

                let canvasWidth = 0;
                let canvasHeight = 0;

                let maxStrokeY = 0;
                let minStrokeY = 0;
                let spaceWidth = Infinity;

                for (const char of CHARS) {
                    const stroke: Stroke = {
                        code: char.charCodeAt(0),
                        path: font.getPath(char, 0, 0).commands,
                        width: 0,
                    };
                    let maxX = 0;
                    let minX = 0;

                    for (const path of stroke.path) {
                        switch (path.type) {
                            case 'M':
                            case 'L':
                                maxStrokeY = Math.max(path.y, maxStrokeY);
                                minStrokeY = Math.min(path.y, minStrokeY);
                                maxX = Math.max(path.x, maxX);
                                minX = Math.min(path.x, minX);
                                break;
                            case 'C':
                                maxStrokeY = Math.max(path.y, path.y1, path.y2, maxStrokeY);
                                minStrokeY = Math.min(path.y, path.y1, path.y2, minStrokeY);
                                maxX = Math.max(path.x, path.x1, path.x2, maxX);
                                minX = Math.min(path.x, path.x1, path.x2, minX);
                                break;
                            case 'Q':
                                maxStrokeY = Math.max(path.y, path.y1, maxStrokeY);
                                minStrokeY = Math.min(path.y, path.y1, minStrokeY);
                                maxX = Math.max(path.x, path.x1, maxX);
                                minX = Math.min(path.x, path.x1, minX);
                                break;
                        }
                    }
                    stroke.width = (maxX - minX) + 1;
                    canvasWidth += stroke.width;
                    spaceWidth = Math.min(spaceWidth, stroke.width);
                    charStrokes.push(stroke);
                }
                charStrokes.unshift({
                    code: 0x20,
                    path: [],
                    width: spaceWidth,
                });

                canvasHeight = maxStrokeY - minStrokeY;

                const canvas = document.createElement('canvas');
                canvas.height = toNearestBase(Math.ceil(canvasHeight), 2);
                canvas.width = toNearestBase(Math.ceil(canvasWidth), 2);
                const context = canvas.getContext('2d');

                const manifest: FontManifest = {};
                let cursorX = 0;

                for (const stroke of charStrokes) {
                    manifest[stroke.code] = [cursorX / canvas.width, (cursorX + stroke.width) / canvas.width];
                    for (const path of stroke.path) {
                        const {
                            x,
                            y,
                            x1,
                            y1,
                            x2,
                            y2,
                            type,
                        } = path;
                        switch (type) {
                            case 'M':
                                context.moveTo(x + cursorX, y - minStrokeY);
                                break;
                            case 'L':
                                context.lineTo(x + cursorX, y - minStrokeY);
                                break;
                            case 'C':
                                context.bezierCurveTo(x1 + cursorX, y1 - minStrokeY, x2 + cursorX, y2 - minStrokeY, x + cursorX, y - minStrokeY);
                                break;
                            case 'Q':
                                context.quadraticCurveTo(x1 + cursorX, y1 - minStrokeY, x + cursorX, y - minStrokeY);
                                break;
                            case 'Z':
                                context.closePath();
                                break;
                        }
                    }
                    cursorX += stroke.width;
                }

                context.fillStyle = '#fff';
                context.fill();

                const f = new Font();
                f.canvas = canvas;
                f.manifest = manifest;
                f._width = canvasWidth;
                f._height = canvasHeight;
                f._heightRatio = canvasHeight / canvas.height;
                f._widthRatio = canvasWidth / canvas.width;
                resolve(f);
            });
        });
    }
}
