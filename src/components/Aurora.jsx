import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";
import "./Aurora.css";

const VERT = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

float noise(vec2 p){
  return sin(p.x) * sin(p.y);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  float n = noise(uv * 6.0 + uTime * 0.2);
  vec3 color = mix(uColor1, uColor2, uv.y + n * 0.2);
  color = mix(color, uColor3, uv.x);

  gl_FragColor = vec4(color, 0.6);
}
`;

export default function Aurora({
  colorStops = ["#3A29FF", "#FF94B4", "#FF3232"],
  speed = 1
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;

    gl.clearColor(0, 0, 0, 0);
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [container.offsetWidth, container.offsetHeight] },
        uColor1: { value: new Color(colorStops[0]).rgb },
        uColor2: { value: new Color(colorStops[1]).rgb },
        uColor3: { value: new Color(colorStops[2]).rgb }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      program.uniforms.uResolution.value = [
        container.offsetWidth,
        container.offsetHeight
      ];
    }

    window.addEventListener("resize", resize);
    resize();

    let raf;
    const update = (t) => {
      raf = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001 * speed;
      renderer.render({ scene: mesh });
    };
    update(0);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      container.removeChild(gl.canvas);
    };
  }, [colorStops, speed]);

  return <div ref={containerRef} className="aurora" />;
}
