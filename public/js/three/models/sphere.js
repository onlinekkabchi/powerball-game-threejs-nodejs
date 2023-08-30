import * as THREE from "three";
import { hdrLoader } from "../camera/hdr.js";

const geometry1 = new THREE.SphereGeometry(15, 32, 16);
const material1 = new THREE.MeshStandardMaterial({
  //   emissive: 0xffffee,
  //   emissiveIntensity: 0.1,
  color: 0xebebeb,
  roughness: 0,
  metalness: 1, // 반사광있는 금속재질
  //   transmission: 1, // 'transmission' is not a property of this material;
  transparent: 1,
  envMap: hdrLoader,
  envMapIntensity: 0.1,
});

const geometry2 = new THREE.SphereGeometry(15, 32, 16);
const material2 = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0,
  roughness: 0,
  transparent: 1,
  // refractionRatio: 0.98,
  //   reflectivity: 0.9,
  transmission: 1,
  envMap: hdrLoader,
  envMapIntensity: 0.1,
  thickness: 0.1,
});

const sphere = new THREE.Mesh(geometry1, material1);
sphere.position.set(0, 2.5, 0);
sphere.scale.set(0.13, 0.13, 0.13);

const sphere1 = new THREE.Mesh(geometry2, material2);
sphere1.position.set(5, 2.5, 0);
sphere1.scale.set(0.12, 0.12, 0.12);

export { sphere, sphere1 };
