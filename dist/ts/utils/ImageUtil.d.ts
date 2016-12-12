import Color from 'core/Color';
declare namespace ImageUtil {
    function loadAsScaled(src: string): Promise<HTMLCanvasElement>;
    function loadAsPadded(src: string, padColor: Color): Promise<HTMLCanvasElement>;
}
export default ImageUtil;
