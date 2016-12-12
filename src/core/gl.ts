
let canvas = document.createElement('canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
let gl = canvas.getContext('webgl');
gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);

export default gl;
export function mountGl(dom: HTMLElement) {
    dom.appendChild(canvas);
}
export function setGlSize(width: number, height: number) {
    canvas.width = width || canvas.width;
    canvas.height = height || canvas.height;
    gl.viewport(0, 0, canvas.width, canvas.height);
}
