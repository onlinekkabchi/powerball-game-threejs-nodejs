import * as THREE from "three";

// 빛 색
const light = {
  ambient: 0x404040,
  directional: 0xffffff, // 0xd5deff
  bulb: 0xec9006,
  hemiSky: 0xffef00,
  heimGround: 0xc9f6ff,
};

// 빛 강도
// const hemiLuminousIrradiances = {
//   moonless: 0.0001, // 단위는 lx
//   "night airglow": 0.002,
//   fullmoon: 0.5,
//   twilight: 3.4,
//   "living room": 50,
//   "very overcast": 100,
//   "office room": 350,
//   snset: 400,
//   overcast: 1000,
//   daylight: 18000,
//   "direct sun": 50000,
// };

const ambientLight = new THREE.AmbientLight(light.ambient);

// 전체 광
const dirLight = new THREE.DirectionalLight(light.directional);
dirLight.position.set(0, 200, 0);
dirLight.intensity = 10;

const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);

// 반사광
const hemiLight = new THREE.HemisphereLight(light.hemiSky, light.heimGround, 1);
hemiLight.position.set(0, 10, 0);
hemiLight.scale.set(10, 10, 10);
// hemiLight.intensity = hemiLuminousIrradiances["living room"];
hemiLight.intensity = 10;

const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 100);

export { ambientLight, dirLight, hemiLight, dirLightHelper, hemiLightHelper };
