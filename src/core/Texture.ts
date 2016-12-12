import Constants from  'core/Constants';

export default class Texture {
    private _image: Constants.WebImage;

    public get image(): Constants.WebImage {
        return this._image;
    }

    static async loadTexture(src: string): Promise<Texture> {
        return new Promise<Texture>((resolve, reject) => {
            const image = new Image();
            const texture = new Texture();
            image.src = src;
            texture._image = image;
            image.onload = () => {
                resolve(texture);
            }
            image.onerror = e => {
                reject(e);
            }
        });
    }

    static fromImage(image: Constants.WebImage): Texture {
        const t = new Texture();
        t._image = image;
        return t;
    }
}
