import * as THREE from "three";

// 빛 색
const light = {
  ambient: 0x404040,
  directional: 0xfffee9, // 0xd5deff
  bulb: 0xec9006,
  hemiSky: 0xfffbc8,
  heimGround: 0xfff59e,
};

// 빛 강도
const hemiLuminousIrradiances = {
  moonless: 0.0001, // 단위는 lx
  "night airglow": 0.002,
  fullmoon: 0.5,
  twilight: 3.4,
  "living room": 50,
  "very overcast": 100,
  "office room": 350,
  snset: 400,
  overcast: 1000,
  daylight: 18000,
  "direct sun": 50000,
};

const ambientLight = new THREE.AmbientLight(light.ambient);

// 전체 광
const dirLight = new THREE.DirectionalLight(light.directional);
dirLight.position.set(0, 200, 0);
dirLight.intensity = 0.5;

const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 3);

// 반사광
const hemiLight = new THREE.HemisphereLight(light.hemiSky, light.heimGround, 1);
hemiLight.position.set(0, 10, 0);
hemiLight.intensity = hemiLuminousIrradiances["twilight"];

const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 5);

export { ambientLight, dirLight, hemiLight, dirLightHelper, hemiLightHelper };
