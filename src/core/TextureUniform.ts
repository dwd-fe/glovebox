import gl from 'core/gl';
import AbstractUniform from 'core/AbstractUniform';
import Constants from 'core/Constants';
import Texture from 'core/Texture';


export default class TextureUniform extends AbstractUniform {
    private texture: WebGLTexture;
    private index: number = 0;

    private attached: boolean = false;

    private _packAlignment: Constants.TextureAlignment = 4;
    private _unpackAlignment: Constants.TextureAlignment = 4;
    private _unpackFlipY: boolean = false;
    private _unpackPremultiplyAlpha: boolean = false;
    private _magFilter: Constants.TextureMagFilter = gl.LINEAR;
    private _minFilter: Constants.TextureMinFilter = gl.LINEAR;
    private _wrapS: Constants.TextureWrap = gl.REPEAT;
    private _wrapT: Constants.TextureWrap= gl.REPEAT;
    private _format: Constants.TextureFormat = gl.RGBA;
    private _level: number = 0;
    private _texelFormat: Constants.TextureTexelFormat = gl.UNSIGNED_BYTE;

    static MAG_FILTER = Constants.TextureMagFilter;
    static MIN_FILTER = Constants.TextureMinFilter;
    static WRAP = Constants.TextureWrap;

    constructor(private _image: Texture) {
        super();
    }

    public setActiveIndex(index: number): void {
        this.index = index;
    }

    public get image(): Texture {
        return this._image;
    }

    public set image(image: Texture) {
        this._image = image;
        this.attached = false;
    }

    protected _update(loc: WebGLUniformLocation): void {
        gl.activeTexture(gl.TEXTURE0 + this.index);
        if (!this.attached) {
            this.texture = gl.createTexture();
            gl.pixelStorei(gl.PACK_ALIGNMENT, this._packAlignment);
            gl.pixelStorei(gl.UNPACK_ALIGNMENT, this._unpackAlignment);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, this._unpackFlipY ? 1 : 0);
            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._unpackPremultiplyAlpha ? 1: 0);
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this._magFilter);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this._minFilter);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this._wrapS);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this._wrapT);
            gl.texImage2D(gl.TEXTURE_2D, this._level, this._format, this._format, this._texelFormat, this._image.image);
            this.attached = true;
        } else {
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
        }
        gl.uniform1i(loc, this.index);
    }

    public get packAlignment(): Constants.TextureAlignment {
        return this._packAlignment;
    }

    public set packAlignment(packAlignment: Constants.TextureAlignment) {
        this._packAlignment = packAlignment;
    }

    public get unpackAlignment(): Constants.TextureAlignment {
        return this._unpackAlignment;
    }

    public set unpackAlignment(unpackAlignment: Constants.TextureAlignment) {
        this._unpackAlignment = unpackAlignment;
    }

    public get unpackFlipY(): boolean {
        return this._unpackFlipY;
    }

    public set unpackFlipY(unpackFlipY: boolean) {
        this._unpackFlipY = unpackFlipY;
    }

    public get unpackPremultiplyAlpha(): boolean {
        return this._unpackPremultiplyAlpha;
    }

    public set unpackPremultiplyAlpha(unpackPremultiplyAlpha: boolean) {
        this._unpackPremultiplyAlpha = unpackPremultiplyAlpha;
    }

    public get magFilter(): Constants.TextureMagFilter {
        return this._magFilter;
    }

    public set magFilter(magFilter: Constants.TextureMagFilter) {
        this._magFilter = magFilter;
    }

    public get minFilter(): Constants.TextureMinFilter {
        return this._minFilter;
    }

    public set minFilter(minFilter: Constants.TextureMinFilter) {
        this._minFilter = minFilter;
    }

    public get wrapS(): Constants.TextureWrap {
        return this._wrapS;
    }

    public set wrapS(wrapS: Constants.TextureWrap) {
        this._wrapS = wrapS;
    }

    public get wrapT(): Constants.TextureWrap {
        return this._wrapT;
    }

    public set wrapT(wrapT: Constants.TextureWrap) {
        this._wrapT = wrapT;
    }

    public get format(): Constants.TextureFormat {
        return this._format;
    }

    public set format(format: Constants.TextureFormat) {
        this._format = format;
    }

    public get level(): number {
        return this._level;
    }

    public set level(level: number) {
        this._level = level;
    }

    public get texelFormat(): Constants.TextureTexelFormat {
        return this._texelFormat;
    }

    public set texelFormat(texelFormat: Constants.TextureTexelFormat) {
        this._texelFormat = texelFormat;
    }
}
