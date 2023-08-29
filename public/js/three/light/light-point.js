import * as THREE from "three";

const color = 0xffffff;
const pointLight = new THREE.PointLight(color, 10, 0);
const pointLightHelper = new THREE.PointLightHelper(pointLight);
pointLight.position.set(10, 20, 30);
pointLight.lookAt(0, 0, 0);
pointLight.castShadow = true;
pointLight.intensity = 3.4;

export { pointLight, pointLightHelper };
