import Constants from 'core/Constants';
export default class Texture {
    private _image;
    readonly image: Constants.WebImage;
    static loadTexture(src: string): Promise<Texture>;
    static fromImage(image: Constants.WebImage): Texture;
}
