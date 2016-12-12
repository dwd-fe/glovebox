const canvas: HTMLCanvasElement = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

let webgl: WebGLRenderingContext = canvas.getContext('webgl');
webgl.viewport(0, 0, canvas.width, canvas.height);
webgl.clearColor(0, 0, 0, 0);
webgl.clear(webgl.COLOR_BUFFER_BIT);

export default webgl;
export function setGl(canvas: HTMLCanvasElement) {
    const gl: WebGLRenderingContext = canvas.getContext('webgl');
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    webgl = gl;
}
