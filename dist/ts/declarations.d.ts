declare module '*.glsl' {
    var _: string;
    export default _;
}
declare module 'opentype.js' {
    function load(src: string, Function: any): any;
}
declare module 'earcut' {
    function earcut(points: number[]): number[];
    export = earcut;
}
