import gl from 'core/gl';
import Attribute from 'core/Attribute';
import Drawable from 'core/Drawable';
import TextureUniform from 'core/TextureUniform';
import Texture from 'core/Texture';
import Font from 'core/Font';
import Color from 'core/Color';
import Uniform from 'core/Uniform';

import vs from 'shaders/vertex/Text.glsl';
import fs from 'shaders/fragment/Text.glsl';


export default class Text extends Drawable {
    private a_vertex: Attribute;
    private a_uv: Attribute;
    private u_tex: TextureUniform;
    private _color: Color = new Color(0xff0000);
    private u_color: Uniform;

    constructor(private _font: Font, private _text: string, private _height: number) {
        super(vs, fs);

        this.a_vertex = new Attribute(Attribute.ARRAY_BUFFER, new Float32Array(null), Attribute.FLOAT, 2);
        this.attachAttribute('a_vertex', this.a_vertex);

        this.a_uv = new Attribute(Attribute.ARRAY_BUFFER, new Float32Array(null), Attribute.FLOAT, 2);
        this.attachAttribute('a_uv', this.a_uv);

        this.u_tex = new TextureUniform(Texture.fromImage(_font.image));
        this.attachUniform('u_tex', this.u_tex);

        this.u_color = new Uniform(Uniform.FLOAT, 4);
        this.u_color.set(...this._color.toGl());
        this.attachUniform('u_color', this.u_color);

        this.createVertex();
    }

    public get color(): number {
        return this._color.value;
    }

    public set color(color: number) {
        this._color.value = color;
        this.u_color.set(...this._color.toGl());
    }

    public get opacity(): number {
        return this._color.opacity;
    }

    public set opacity(opacity: number) {
        this._color.opacity = opacity;
        this.u_color.set(...this._color.toGl());
    }

    public get font(): Font {
        return this._font;
    }

    public set font(font: Font) {
        this._font = font;
        this.u_tex.image = Texture.fromImage(font.image);
    }

    public get text(): string {
        return this._text;
    }

    public set text(text: string) {
        this._text = text;
        this.createVertex();
    }

    public get height(): number {
        return this._height;
    }

    public set height(height: number) {
        this._height = height;
        this.createVertex();
    }

    private createVertex(): void {
        const vertices = [];
        const uvs = [];
        const font = this._font;
        const coords = font.getText(...this.text.split('').map(c => c.charCodeAt(0)));

        const ratio = this._height / font.height * font.width;

        let cursorX = 0;
        for (const [x1, x2] of coords) {
            const width = (x2 - x1) * ratio;
            vertices.push(cursorX, 0);
            vertices.push(cursorX, this._height);
            vertices.push(cursorX + width, 0);

            vertices.push(cursorX, this._height);
            vertices.push(cursorX + width, 0);
            vertices.push(cursorX + width, this._height);

            uvs.push(x1, 0);
            uvs.push(x1, font.heightRatio);
            uvs.push(x2, 0);

            uvs.push(x1, font.heightRatio);
            uvs.push(x2, 0);
            uvs.push(x2, font.heightRatio);

            cursorX += width;
        }
        this.a_uv.replaceWith(new Float32Array(uvs));
        this.a_vertex.replaceWith(new Float32Array(vertices));
        this._endIndex = this._text.length * 6;
    }
}
