import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

// 유리 질감 샘플
const glass3 = new THREE.MeshPhongMaterial({
  color: 0xccddff,
  //   envMap: textureCube,
  refractionRatio: 0.98,
  //   reflectivity: 0.9,
});
const glass2 = new THREE.MeshPhongMaterial({
  color: 0xccfffd,
  //   envMap: textureCube,
  //   refractionRatio: 0.985,
});
const glass1 = new THREE.MeshPhongMaterial({
  color: 0xffffff,
  //   envMap: textureCube,
  //   refractionRatio: 0.98,
});

const params = {
  color: 0xffffff,
  transmission: 1,
  opacity: 1,
  metalness: 0,
  roughness: 0,
  ior: 1.5,
  thickness: 0.01,
  specularIntensity: 1,
  specularColor: 0xffffff,
  envMapIntensity: 1,
  lightIntensity: 1,
  exposure: 1,
};

const glasstransparent = new THREE.MeshPhysicalMaterial({
  color: params.color,
  metalness: params.metalness,
  roughness: params.roughness,
  ior: params.ior,
  //   alphaMap: texture,
  //   envMap: hdrEquirect,
  envMapIntensity: params.envMapIntensity,
  transmission: params.transmission, // use material.transmission for glass materials
  specularIntensity: params.specularIntensity,
  specularColor: params.specularColor,
  opacity: params.opacity,
  side: THREE.DoubleSide,
  transparent: true,
});

export default class Lottery {
  constructor(path, scene) {
    this.path = path;
    this.scene = scene;
    // this.gltfloader =
    this.model = null;
    this.mixer = null;
  }
  async load() {
    const file = await loader.loadAsync(this.path);

    // const sampleMat = new THREE.MeshStandardMaterial({
    //   color: 0xff4400,
    //   metalness: 0.9,
    //   roughness: 0.2,
    //   name: "orange",
    // });

    this.model = file.scene;
    console.log(file);
    console.log(this.model);
    console.log(this.model.children[4]);

    // 유리 씌우기
    const dom = this.model.children[4];
    dom.material = glasstransparent;

    this.model.position.set(0, -5, 0);
    this.model.scale.set(20, 20, 20);

    this.scene.add(this.model);
  }
  show() {
    console.log("show lotmachine");
  }
}
