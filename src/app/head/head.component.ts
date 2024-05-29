import { Component } from "@angular/core";
import * as THREE from "three";
import { GLTFLoader } from "THREE/examples/jsm/loaders/GLTFLoader.js";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import * as THREE from 'https://unpkg.com/three/build/three.module.js'

@Component({
  selector: "figure-head",
  standalone: true,
  imports: [],
  templateUrl: "./head.component.html",
  styleUrl: "./head.component.scss",
})
export class HeadComponent {}
let renderer: any, scene: any, camera: any;

let line: any;
const MAX_POINTS = 1000;
let drawCount: number;

init();
animate();

function init() {
  // info
  const info = document.createElement("div");
  info.style.position = "absolute";
  info.style.top = "30px";
  info.style.width = "100%";
  info.style.textAlign = "center";
  info.style.color = "#fff";
  info.style.fontWeight = "bold";
  info.style.backgroundColor = "transparent";
  info.style.zIndex = "1";
  info.style.fontFamily = "Monospace";
  info.innerHTML = "three.js animataed line using BufferGeometry";
  document.body.appendChild(info);

  // renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // scene
  scene = new THREE.Scene();

  // camera
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.set(0, 0, 1000);

  // geometry
  const geometry = new THREE.BufferGeometry();

  // attributes
  const positions = new Float32Array(MAX_POINTS * 3); // 3 vertices per point
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  // drawcalls
  drawCount = 2; // draw the first 2 points, only
  geometry.setDrawRange(0, drawCount);

  // material
  const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

  // line
  line = new THREE.Line(geometry, material);
  scene.add(line);

  // update positions
  updatePositions();
}

// update positions
function updatePositions() {
  const positions = line.geometry.attributes.position.array;

  let x, y, z, index;
  x = y = z = index = 0;

  for (let i = 0, l = MAX_POINTS; i < l; i++) {
    positions[index++] = x;
    positions[index++] = y;
    positions[index++] = z;

    x += (Math.random() - 0.5) * 30;
    y += (Math.random() - 0.5) * 30;
    z += (Math.random() - 0.5) * 30;
  }
}

// render
function render() {
  renderer.render(scene, camera);
}

// animate
function animate() {
  requestAnimationFrame(animate);

  drawCount = (drawCount + 1) % MAX_POINTS;

  line.geometry.setDrawRange(0, drawCount);

  if (drawCount === 0) {
    // periodically, generate new data

    updatePositions();

    line.geometry.attributes.position.needsUpdate = true; // required after the first render

    line.material.color.setHSL(Math.random(), 1, 0.5);
  }

  render();
}

// new THREE.TextGeometry(texture);

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.5,
//   1000
// );
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
//   requestAnimationFrame(animate);

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// }

// animate();
