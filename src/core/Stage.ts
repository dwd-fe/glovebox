import gl from 'core/gl';
import Drawable from 'core/Drawable';
import Constants from 'core/Constants';
import Matrix3 from 'math/Matrix3';
import Vector2 from 'math/Vector2';
import { removeId } from 'core/guid';
import viewportScale from 'core/viewport/scale';
import viewportCamera from 'core/viewport/Camera';
import { mountGl, setGlSize } from 'core/gl';

export default class Stage {
    private _children: Drawable[] = [];
    private hitMap: WebGLFramebuffer;
    public camera: Vector2 = new Vector2(0, 0);
    public scale: Vector2 = new Vector2(1, 1);

    constructor(width?: number, height?: number, dom?: HTMLElement) {
        setGlSize(width, height);
        if (dom) {
            mountGl(dom);
        } else {
            mountGl(document.body);
        }
        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.drawingBufferWidth, gl.drawingBufferHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        const rb = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, rb);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, gl.drawingBufferWidth, gl.drawingBufferHeight);
        const fb = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, rb);
        this.hitMap = fb;
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    public get children(): Drawable[] {
        return this._children;
    }

    public add(child: Drawable): void {
        this._children.push(child);
    }

    public remove(child: Drawable): void {
        const index = this._children.indexOf(child);
        if (index !== -1) {
            this._children.splice(index, 1);
            removeId(child.id);
        }
    }

    clear() {
        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    clickTest(x: number, y: number): number {
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.hitMap);
        const bytes = new Uint8Array(4);
        gl.readPixels(x, gl.drawingBufferHeight - y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, bytes);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        return bytes[0] * 255 * 255 + bytes[1] * 255 + bytes[2];
    }

    render() {
        if (this.camera.updated || this.scale.updated) {
            viewportScale.x = this.scale.x;
            viewportScale.y = this.scale.y;
            viewportCamera.x = this.camera.x;
            viewportCamera.y = this.camera.y;
        }
        const children = this._children.sort((a, b) => a.zIndex - b.zIndex);
        gl.disable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        for (const child of children) {
            gl.useProgram(child.program);
            child.offscreen = false;
            child.update();
            gl.drawArrays(child.drawType, child.startIndex, child.endIndex);
        }

        viewportScale.updated = false;
        viewportCamera.updated = false;

        gl.disable(gl.BLEND);
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.hitMap);
        for (const child of children) {
            gl.useProgram(child.program);
            child.offscreen = true;
            child.update();
            gl.drawArrays(child.drawType, child.startIndex, child.endIndex);
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
}
