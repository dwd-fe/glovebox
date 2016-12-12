declare module '*.glsl' {
    var _: string;
    export default _;
}

declare module 'opentype.js' {
    export function load(src: string, Function);
}

declare module 'earcut' {
    function earcut(points: number[]): number[];
    export = earcut;
}
