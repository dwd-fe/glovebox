attribute vec2 a_vertex;
attribute vec2 a_uv;
varying vec2 v_uv;

void main() {
  gl_Position =  projection(a_vertex);
  v_uv = a_uv;
}
