import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const width = window.innerWidth;
const height = window.innerHeight;

// 카메라 세팅
const camera = new THREE.PerspectiveCamera(100, width / height, 1, 150);

// const camera = new THREE.OrthographicCamera(
//   width / -2,
//   width / 2,
//   height / 2,
//   height / -2,
//   1,
//   50 // 카메라 거리
// );
camera.position.set(0, 1, 11);

// 카메라 궤도 컨트롤러
function orbitController(camera, renderer) {
  const controls = new OrbitControls(camera, renderer.domElement);
  // controls.minDistance = 3;
  // controls.maxDistance = 100;
  // controls.maxPolarAngle = Math.PI / 2;

  controls.target.set(0, 5, 0);
  // 줌 비활성화
  // controls.enableZoom = false;
  // 회전 비활성화
  // controls.enableRotate = false;
  controls.update();
}

export { camera, orbitController };
