import gl from 'core/gl';

namespace Constants {
    export enum AttributeUsage {
        STATIC_DRAW = gl.STATIC_DRAW,
        DYNAMIC_DRAW = gl.DYNAMIC_DRAW,
        STREAM_DRAW = gl.STREAM_DRAW,
    }
    export enum AttributeType {
        BYTE = gl.BYTE,
        UNSIGNED_BYTE = gl.UNSIGNED_BYTE,
        SHORT = gl.SHORT,
        UNSIGNED_SHORT = gl.UNSIGNED_SHORT,
        FLOAT = gl.FLOAT,
    }
    export enum DrawType {
        POINTS = gl.POINTS,
        LINES = gl.LINES,
        LINE_STRIP = gl.LINE_STRIP,
        LINE_LOOP = gl.LINE_LOOP,
        TRIANGLES = gl.TRIANGLES,
        TRIANGLE_STRIP = gl.TRIANGLE_STRIP,
        TRIANGLE_FAN = gl.TRIANGLE_FAN,
    }
    export enum DrawMethod {
        ARRAYS,
        ELEMENTS,
    }
    export enum ElementType {
        UNSIGNED_BYTE = gl.UNSIGNED_BYTE,
        UNSIGNED_SHORT = gl.UNSIGNED_SHORT,
    }
    export enum UniformType {
        INT,
        FLOAT,
    }
    export enum TextureMagFilter {
        LINEAR = gl.LINEAR,
        NEAREST = gl.NEAREST,
    }
    export enum TextureMinFilter {
        LINEAR = gl.LINEAR,
        NEAREST_MIPMAP_NEAREST = gl.NEAREST_MIPMAP_NEAREST,
        LINEAR_MIPMAP_NEAREST = gl.LINEAR_MIPMAP_NEAREST,
        NEAREST_MIPMAP_LINEAR  = gl.NEAREST_MIPMAP_LINEAR ,
        LINEAR_MIPMAP_LINEAR = gl.LINEAR_MIPMAP_LINEAR,
    }
    export enum TextureWrap {
        REPEAT = gl.REPEAT,
        CLAMP_TO_EDGE = gl.CLAMP_TO_EDGE,
        MIRRORED_REPEAT = gl.MIRRORED_REPEAT,
    }
    export enum TextureFormat {
        ALPHA = gl.ALPHA,
        RGB = gl.RGB,
        RGBA = gl.RGBA,
        LUMINANCE = gl.LUMINANCE,
        LUMINANCE_ALPHA = gl.LUMINANCE_ALPHA,
    }
    export enum TextureTexelFormat {
        UNSIGNED_BYTE = gl.UNSIGNED_BYTE,
        UNSIGNED_SHORT_5_6_5 = gl.UNSIGNED_SHORT_5_6_5,
        UNSIGNED_SHORT_4_4_4_4 = gl.UNSIGNED_SHORT_4_4_4_4,
        UNSIGNED_SHORT_5_5_5_1 = gl.UNSIGNED_SHORT_5_5_5_1,
    }
    export type WebImage = ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    export type TextureAlignment = 1 | 2 | 4 | 8;
    export type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Uint32Array | Float32Array;
}

export default Constants;
