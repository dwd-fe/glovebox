import Drawable from 'core/Drawable';
import Vector2 from 'math/Vector2';
export default class Stage {
    private _children;
    private hitMap;
    camera: Vector2;
    scale: Vector2;
    constructor(width?: number, height?: number, dom?: HTMLElement);
    readonly children: Drawable[];
    add(child: Drawable): void;
    remove(child: Drawable): void;
    clear(): void;
    clickTest(x: number, y: number): number;
    render(): void;
}
