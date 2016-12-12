import Color from 'core/Color';

function toNearestBase(n: number, e: number): number {
    return Math.pow(e, Math.ceil(Math.log(n) / Math.log(e)));
}

namespace ImageUtil {
    export async function loadAsScaled(src: string): Promise<HTMLCanvasElement> {
        return new Promise<HTMLCanvasElement>((resolve, reject) => {
            const image = new Image();
            image.onload = () => {
                const width = toNearestBase(image.width, 2);
                const height = toNearestBase(image.height, 2);

                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const context = canvas.getContext('2d');
                context.drawImage(image, 0, 0, width, height);
                resolve(canvas);
            };
            image.onerror = e => reject(e);
            image.src = src;
        });
    }
        export async function loadAsPadded(src: string, padColor: Color): Promise<HTMLCanvasElement> {
        return new Promise<HTMLCanvasElement>((resolve, reject) => {
            const image = new Image();
            image.onload = () => {
                const width = toNearestBase(image.width, 2);
                const height = toNearestBase(image.height, 2);

                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const context = canvas.getContext('2d');
                context.fillStyle = `rgba(${padColor.r},${padColor.g},${padColor.b},${padColor.opacity})`;
                context.fillRect(0, 0, width, height);
                context.drawImage(image, 0, 0, image.width, image.height);
                resolve(canvas);
            };
            image.onerror = e => reject(e);
            image.src = src;
        });
    }
}
export default ImageUtil;
