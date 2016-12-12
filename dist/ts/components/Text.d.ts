import Drawable from 'core/Drawable';
import Font from 'core/Font';
export default class Text extends Drawable {
    private _font;
    private _text;
    private _height;
    private a_vertex;
    private a_uv;
    private u_tex;
    private _color;
    private u_color;
    constructor(_font: Font, _text: string, _height: number);
    color: number;
    opacity: number;
    font: Font;
    text: string;
    height: number;
    private createVertex();
}
