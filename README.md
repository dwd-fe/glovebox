[![NPM version][npm-image]][npm-url]
[![Dependencies][david-image]][david-url]

# Introduction
This is a library targets 2D hardware-acclerated graphic rendering. This is useful in data presentation scenario

#Installation
> npm i glovebox -S

#Example Custom Component
```typescript
class Triangle extends Drawable {
    constructor() {
        super(
            `
                attribute vec2 a_position;
                attribute vec3 a_color;
                varying vec3 v_color;

                void main() {
                    gl_Position = projection(a_position);
                    v_color = a_color;
                }
            `,
            `
                varying vec3 v_color;
                uniform vec3 u_color;
                void main() {
                    gl_FragColor = vec4(v_color, 1.0);
                    //gl_FragColor = vec4(u_color, 1.0);
                }
            `
        );
        this._endIndex = 3;
        const colors = new Attribute(Attribute.ARRAY_BUFFER, new Float32Array(9), Attribute.FLOAT, 3);
        colors.set(0, 1, 0, 0);
        colors.set(1, 0, 1, 0);
        colors.set(2, 0, 0, 1);

        const vertices = new Attribute(Attribute.ARRAY_BUFFER, new Float32Array(6), Attribute.FLOAT, 2);
        vertices.set(0, 0, 0);
        vertices.set(1, 0, 100);
        vertices.set(2, 100, 100);

        this.attachAttribute('a_position', vertices);
        this.attachAttribute('a_color', colors);
    }
}


```

# Components
## Box
* constructor(width: number, height: number)
* width: number
* height: number
* color: number
* opacity: number

## BoxImage
* constructor(texture: Texture, width: number, height: number)
* width: number
* height: number

## LineMesh
* constructor(vertices: Vector2[], width: number)
* color: number
* opacity: number
* width: number

## Text
* constructor(font: Font, text: string, height: number)
* color: number
* opacity: number
* readonly width: number
* height: number
* font: Font
* text: string

## Sprite

* constructor(texture: Texture, tileWidth: number, tileHeight: number, width: number, height: number)
* width: number
* height: number
* tileWidth: number
* tileHeight: number
* xIndex: number
* yIndex: number

## Polygon

* constructor(points: Vector2[]);
* color: number;
* opacity: number;
* points: Vector2[];

# Core
> All components inherited from Drawable
## Drawable
* constructor(vertexShaderString: string, fragmentShaderString: string);
* readonly id: number, unique id, auto assigned.
* rotation: boolean, set component rotation, in `radians`
* scale: Vector2, set scale
* position: Vector2, et position
* zIndex: number
* protected _drawType: Constants.DrawType, set up draw type
* startIndex: number, draw vertices start at
* endIndx: number, draw vertices end at
* name: string, name of the component

## Stage
> Stage holds all components.

* constructor(canvas?: HTMLCanvasElement), use default canvas or your own
* add(child: Drawable), add child to stage
* remove(child: Drawable), remove child from stage
* clear(), clear stage
* camera: Vector2,
* scale: Vector2,
* clickTest(x: number, y: number): number, test if there is a component at given coordinates, 0 is returned if not, id is returned if true
* render(), render stage

## Color
constructor(hex: number, opacity?: number)
* value: numebr, hex value of RGB color
* opacity, opacity
* readonly r: number
* readonly g: number
* readonly b: number


> __all `set` operations will trigger update/remount of attributes/uniforms__

## Attribute
* constructor(target: Constants.AttributeTarget, buffer: TypedArray, type: Constants.AttributeType, dataSize: number)
* set(index: number, ...data: number[]), set data at given index
* get(index: number): number[], get data at given index
* replaceWith(buffer: TypedArray)

## Uniform
* constructor(type: Constants.UniformType, size: number)
* set(...data: number[]), set uniform value
* get(): number[], get uniform value

## ArrayUniform
* constructor(type: Constants.UniformType, size: number)
* set(index: number, ...data: number[]), set data at given index

## MatrixUniform
* constructor(size: number)
* set(col: number, row: number, value: number), set data
* replace(buffer: Float32Array), replace data with array
* readonly size: number, get size
* get(col: number, row: number): number, get data

## TextureUniform
> all attributes come with default value (WebGl respected).

* constructor(image: Texture)
* image: Texture
* packAlignment: Constants.TextureAlignment
* unpackAlignment: Constants.TextureAlignment
* unpackFlipY: boolean
* unpackPremultiplyAlpha: boolean
* magFilter: Constants.TextureMagFilter
* minFilter: Constants.TextureMinFilter
* wrapS: Constants.TextureWrap
* wrapT: Constants.TextureWrap
* format: Constants.TextureFormat
* level: number
* texelFormat: Constants.TextureTexelFormat

## Texture
* static loadTexture(src: string): Promise<Texture>
* static fromImage(image: Constants.WebImage): Texture

## Font
* static loadFont(src: string, fontSize: number): Promise<Font>

## Constants

### AttributeTarget
* ARRAY_BUFFER
* ELEMENT\_ARRAY\_BUFFER

###  AttributeUsage
* STATIC_DRAW
* DYNAMIC_DRAW
* STREAM_DRAW

### AttributeType
* BYTE
* UNSIGNED_BYTE
* SHORT
* UNSIGNED_SHORT
* FLOAT

### DrawType
* POINTS
* LINES
* LINE_STRIP
* LINE_LOOP
* TRIANGLES
* TRIANGLE_STRIP
* TRIANGLE_FAN    

### UniformType
* INT
* FLOAT

### TextureMagFilter
* LINEAR
* NEAREST

### TextureMinFilter
* LINEAR
* NEAREST\_MIPMAP\_NEAREST
* LINEAR\_MIPMAP\_NEAREST
* NEAREST\_MIPMAP\_LINEAR
* LINEAR\_MIPMAP\_LINEAR

### TextureWrap
* REPEAT
* CLAMP\_TO\_EDGE
* MIRRORED_REPEAT

### TextureFormat
* ALPHA
* RGB
* RGBA
* LUMINANCE
* LUMINANCE_ALPHA

### TextureTexelFormat
* UNSIGNED_BYTE
* UNSIGNED\_SHORT\_5\_6\_5
* UNSIGNED\_SHORT\_4\_4\_4\_4
* UNSIGNED\_SHORT\_5\_5\_5\_1

### type WebImage
* ImageData
* HTMLImageElement
* HTMLCanvasElement
* HTMLVideoElement

### type TextureAlignment
* 1
* 2
* 4
* 8

### type TypedArray
* Int8Array
* Uint8Array
* Int16Array
* Uint16Array
* Uint32Array
* Float32Array

# Utils
## ImageUtil
* static loadAsScaled(src: string): Promise<HTMLCanvasElement>
* static loadAsPadded(src: string, padColor: Color): Promise<HTMLCanvasElement>



[npm-image]: https://img.shields.io/npm/v/glovebox.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/glovebox
[david-image]: https://img.shields.io/david/dwd-fe/glovebox.svg?style=flat-square
[david-url]: https://david-dm.org/joesonw/dwd-fe/glovebox
