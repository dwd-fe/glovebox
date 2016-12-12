attribute vec2 a_vertex;

void main() {
  gl_Position =  projection(a_vertex);
}
