import Polygon from 'components/Polygon';
export default class Box extends Polygon {
    private _width;
    private _height;
    constructor(_width: number, _height: number);
    width: number;
    height: number;
    private createVertex();
}
