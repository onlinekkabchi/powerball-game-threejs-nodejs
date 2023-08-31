import * as THREE from "three";

const sphere = new THREE.SphereGeometry(0.5, 16, 8);
const sphereMat = new THREE.MeshBasicMaterial({ color: 0x81007f }); // Lollipop 컬러
const pointLight = new THREE.PointLight(0xffffff, 400);
pointLight.add(new THREE.Mesh(sphere, sphereMat));
const pointLightHelper = new THREE.PointLightHelper(pointLight, 20);
pointLight.position.set(0, 300, -180);
pointLight.lookAt(0, 0, 0);
pointLight.castShadow = true;
pointLight.intensity = 10;

export { pointLight, pointLightHelper };
