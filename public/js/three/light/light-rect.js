import * as THREE from "three";

// rect light 빛 옵션
const light = {
  light1: 0xff0000,
  light2: 0x00ff00,
  light3: 0x0000ff,
};
const params = {
  width: 500,
  height: 400,
  intensity: 40,
};
const rectLight1 = new THREE.RectAreaLight(
  light.light1,
  params.intensity,
  params.width,
  params.height
);
rectLight1.position.set(-200, 150, 5);
rectLight1.lookAt(30, 0, 0);

const rectLight2 = new THREE.RectAreaLight(light.light2, 50, 40, 10);
rectLight2.position.set(0, 30, 5);
rectLight2.lookAt(30, 0, 0);

const rectLight3 = new THREE.RectAreaLight(light.light3, 50, 40, 10);
rectLight3.position.set(5, 30, 5);
rectLight3.lookAt(30, 0, 0);

export { rectLight1, rectLight2, rectLight3 };
