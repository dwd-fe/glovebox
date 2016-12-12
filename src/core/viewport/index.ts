import gl from 'core/gl';
import Matrix3 from 'math/Matrix3';

const viewport: Matrix3 = new Matrix3(
    2.0 / gl.canvas.width, 0.0, 1.0,
    0.0, -2.0 / gl.canvas.height, 1.0,
    -1.0, 1.0, 1.0,
);
export default viewport;
