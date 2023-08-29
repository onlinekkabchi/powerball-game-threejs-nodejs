import * as THREE from "three";

// threejs 인스턴스
// import { gridHelper, axesHelper } from "./helper/helper.js";
import { camera, orbitController } from "./camera/camera.js";
import { renderer } from "./camera/renderer.js";
import { dirLight, bulbLight, hemiLight } from "./light/light.js";

// 모델
import { cube1, cube2, stageFlag } from "./models/cube.js";
import { stage, stageBaked } from "./models/stage.js";
import egg from "./models/egg.js";
import Lottery from "./models/lottery-machine-class.js";
// import { Lottery, objLottery } from "./models/lottery-machine.js";
// import fox from "./fox.js";
import { Fox } from "./models/fox.js";

// 텍스쳐
import { hdrEquirect, hdrLoader } from "./camera/hdr.js";

// 씬 세팅
const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x1b1b1b);
scene.background = hdrLoader;

// helper 세팅
// scene.add(gridHelper, axesHelper);

// 카메라, 랜더러 추가
orbitController(camera, renderer);

// 캔버스 추가
document.body.appendChild(renderer.domElement);

// 큐브 추가
scene.add(cube2, stageFlag);

// 무대 원본, 베이킹본
stage(scene);
// stageBaked(scene);

// 달걀
// egg(scene);

// 로터리 머신 비동기함수
// lottery("./static/model/lottery-machine1.glb", scene);

// 로터리 머신 클래스
const lotmachine = new Lottery("./static/model/lottery-machine1.glb", scene);
lotmachine.load();

// 여우
// const fox = new Fox(scene);

// 빛 추가!
scene.add(dirLight, bulbLight, hemiLight);

const radius = 5;
const angularSpeed = 1;

// 랜더링 함수
function render() {
  cube2.rotation.x += 0.03;
  // cube1.rotation.y += 0.03;
  cube2.rotation.y += 0.03;
  stageFlag.rotation.y += 0.05;

  // 전구 원운동
  const time = performance.now() * 0.001; // Convert to seconds
  const bulbX = radius * Math.cos(angularSpeed * time);
  const bulbZ = radius * Math.sin(angularSpeed * time);
  bulbLight.position.set(bulbX, 1, bulbZ);

  // 파이널 랜더링
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function show() {
  console.log(lotmachine);
  lotmachine.show();
}

animate();
show();
