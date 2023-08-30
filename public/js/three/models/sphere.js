import * as THREE from "three";

const sphereGeo = new THREE.SphereGeometry(15, 32, 16);
const sphereMat = new THREE.MeshStandardMaterial({
  //   emissive: 0xffffee,
  //   emissiveIntensity: 1,
  color: 0xffffff,
});

const sphere = new THREE.Mesh(sphereGeo, sphereMat);
sphere.position.set(0, 2.5, 0);
sphere.scale.set(0.13, 0.13, 0.13);

export { sphere };
