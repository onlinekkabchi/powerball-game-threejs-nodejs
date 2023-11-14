import * as THREE from "three";

const color = 0xec9006;

const bulbLuminousPowers = {
  "110000 lm (1000W)": 110000,
  "3500 lm (300W)": 3500,
  "1700 lm (100W)": 1700,
  "800 lm (60W)": 800,
  "400 lm (40W)": 400,
  "180 lm (25W)": 180,
  "20 lm (4W)": 20,
  Off: 0,
};

// ref for solar irradiances: https://en.wikipedia.org/wiki/Lux
// const hemiLuminousIrradiances = {
//   "0.0001 lx (Moonless Night)": 0.0001,
//   "0.002 lx (Night Airglow)": 0.002,
//   "0.5 lx (Full Moon)": 0.5,
//   "3.4 lx (City Twilight)": 3.4,
//   "50 lx (Living Room)": 50,
//   "100 lx (Very Overcast)": 100,
//   "350 lx (Office Room)": 350,
//   "400 lx (Sunrise/Sunset)": 400,
//   "1000 lx (Overcast)": 1000,
//   "18000 lx (Daylight)": 18000,
//   "50000 lx (Direct Sun)": 50000,
// };

const params = {
  shadows: true,
  exposure: 0.68,
  bulbPower: Object.keys(bulbLuminousPowers)[4],
  // hemiIrradiance: Object.keys(hemiLuminousIrradiances)[0],
};

// 전구
const bulbLight = new THREE.PointLight(color, 10, 2000, 100);
const bulbGeometry = new THREE.SphereGeometry(2, 36, 16);
const bulbMat = new THREE.MeshStandardMaterial({
  emissive: 0xffffee,
  emissiveIntensity: 1,
  color: 0xffffff,
});
bulbLight.add(new THREE.Mesh(bulbGeometry, bulbMat));
bulbLight.position.set(-20, 100, 0);
bulbLight.castShadow = true;

// bulbLight.power = bulbLuminousPowers["400 lm (40W)"];
bulbLight.power = 1200;
// bulbMat.emissiveIntensity = bulbLight.intensity / Math.pow(0.02, 2.0);
bulbMat.emissiveIntensity = bulbLight.intensity / Math.pow(0.02, 2.0);

export { bulbLight };
