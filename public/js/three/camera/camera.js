import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// 카메라 세팅
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(0, 2, 10);

// 카메라 궤도 컨트롤러
function orbitController(camera, renderer) {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 3;
  controls.maxDistance = 100;
  controls.maxPolarAngle = Math.PI / 2;
  controls.target.set(0, 1, 0);
  // 줌 비활성화
  // controls.enableZoom = false;
  controls.update();
}

export { camera, orbitController };
