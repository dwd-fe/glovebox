declare namespace Constants {
    enum AttributeTarget {
        ARRAY_BUFFER,
        ELEMENT_ARRAY_BUFFER,
    }
    enum AttributeUsage {
        STATIC_DRAW,
        DYNAMIC_DRAW,
        STREAM_DRAW,
    }
    enum AttributeType {
        BYTE,
        UNSIGNED_BYTE,
        SHORT,
        UNSIGNED_SHORT,
        FLOAT,
    }
    enum DrawType {
        POINTS,
        LINES,
        LINE_STRIP,
        LINE_LOOP,
        TRIANGLES,
        TRIANGLE_STRIP,
        TRIANGLE_FAN,
    }
    enum UniformType {
        INT = 0,
        FLOAT = 1,
    }
    enum TextureMagFilter {
        LINEAR,
        NEAREST,
    }
    enum TextureMinFilter {
        LINEAR,
        NEAREST_MIPMAP_NEAREST,
        LINEAR_MIPMAP_NEAREST,
        NEAREST_MIPMAP_LINEAR,
        LINEAR_MIPMAP_LINEAR,
    }
    enum TextureWrap {
        REPEAT,
        CLAMP_TO_EDGE,
        MIRRORED_REPEAT,
    }
    enum TextureFormat {
        ALPHA,
        RGB,
        RGBA,
        LUMINANCE,
        LUMINANCE_ALPHA,
    }
    enum TextureTexelFormat {
        UNSIGNED_BYTE,
        UNSIGNED_SHORT_5_6_5,
        UNSIGNED_SHORT_4_4_4_4,
        UNSIGNED_SHORT_5_5_5_1,
    }
    type WebImage = ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    type TextureAlignment = 1 | 2 | 4 | 8;
    type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Uint32Array | Float32Array;
}
export default Constants;
