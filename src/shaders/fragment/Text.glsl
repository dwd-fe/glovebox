uniform sampler2D u_tex;
varying vec2 v_uv;
uniform vec4 u_color;

void main() {
  gl_FragColor = texture2D(u_tex, v_uv);
  if (gl_FragColor.r == 0.0) {
    discard;
  } else {
    gl_FragColor = gl_FragColor * u_color;
  }
}
