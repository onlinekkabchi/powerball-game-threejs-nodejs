import * as THREE from "three";

const light = 0xffffff;
const pointLight = new THREE.PointLight(light, 0.5, 100);
const pointLightHelper = new THREE.PointLightHelper(pointLight);
pointLight.position.set(0, 20, -4);
pointLight.castShadow = true;

export { pointLight, pointLightHelper };
