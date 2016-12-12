import Drawable from 'core/Drawable';
export default class Stage {
    private _children;
    private hitMap;
    constructor();
    readonly children: Drawable[];
    add(child: Drawable): void;
    remove(child: Drawable): void;
    clear(): void;
    clickTest(x: number, y: number): number;
    render(): void;
}
