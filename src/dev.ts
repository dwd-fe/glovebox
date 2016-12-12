import Attribute from 'core/Attribute';
import Drawable from 'core/Drawable';
import Stage from 'core/Stage';
import Uniform from 'core/Uniform';
import LineMesh from 'components/LineMesh';
import Vector2 from 'math/Vector2';
import BoxImage from 'components/BoxImage';
import Texture from 'core/Texture';
import Font from 'core/Font';
import Text from 'components/Text';
import ImageUtil from 'utils/ImageUtil';
import Color from 'core/Color';
import Sprite from 'components/Sprite';
import Box from 'components/Box';


const stage = new Stage();

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
    }
}

const colors = new Attribute(Attribute.ARRAY_BUFFER, new Float32Array(9), Attribute.FLOAT, 3);
colors.set(0, 1, 0, 0);
colors.set(1, 0, 1, 0);
colors.set(2, 0, 0, 1);

const vertices = new Attribute(Attribute.ARRAY_BUFFER, new Float32Array(6), Attribute.FLOAT, 2);
vertices.set(0, 0, 0);
vertices.set(1, 0, 100);
vertices.set(2, 100, 100);
const triangle = new Triangle();
triangle.attachAttribute('a_position', vertices);
triangle.attachAttribute('a_color', colors);
triangle.position.x = 400;
triangle.position.y = 300;
stage.add(triangle);
{
    const line = new LineMesh([
        new Vector2(0, 0),
        new Vector2(100, 0),
        new Vector2(0, 100),
        new Vector2(100, 100),
    ], 10);
    line.color = 0x00ff00;
    line.opacity = 1.0;
    line.position.x = 200;
    line.position.y = 200;
    stage.add(line);
}
(async () => {
    const font = await Font.loadFont('/www/Arial.ttf', 100);
    const text = new Text(font, 'hello world', 50);
    text.position.x = 200;
    text.position.y = 200;
    stage.add(text);

    const png = await Texture.loadTexture('/www/lenna.png');
    const lenna = new BoxImage(png, 100, 100);
    lenna.position.x = 50;
    lenna.position.y = 50;
    stage.add(lenna);


    {
        const sprites = await ImageUtil.loadAsPadded('/www/sprites.png', new Color(0, 0));
        const spriteTexture = Texture.fromImage(sprites);
        const sprite = new Sprite(spriteTexture, 476 / 15, 476 / 15, 50, 50);
        sprite.position.x = 300;
        sprite.position.y = 50;
        stage.add(sprite);
    }
    {
        const sprites = await ImageUtil.loadAsPadded('/www/sprites.png', new Color(0, 0));
        const spriteTexture = Texture.fromImage(sprites);
        const sprite = new Sprite(spriteTexture, 476 / 15, 476 / 15, 50, 50);
        sprite.xIndex = 1;
        sprite.position.x = 350;
        sprite.position.y = 50;
        stage.add(sprite);
    }
    {
        const sprites = await ImageUtil.loadAsPadded('/www/sprites.png', new Color(0, 0));
        const spriteTexture = Texture.fromImage(sprites);
        const sprite = new BoxImage(spriteTexture, 512, 512);
        sprite.position.x = 550;
        sprite.position.y = 50;
        stage.add(sprite);
    }
    {
        const box = new Box(100, 100);
        box.position.x = 150;
        box.position.y = 200;
        box.opacity = 0.5;
        box.zIndex = 22;
        stage.add(box);
    }
})
().catch(e => { throw e; });
function render() {
    stage.clear();
    stage.render();
    requestAnimationFrame(render);
}
render();
document.onmousedown = e => {
    console.log(stage.clickTest(e.clientX, e.clientY));
}
