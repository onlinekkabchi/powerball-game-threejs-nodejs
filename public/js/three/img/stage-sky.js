import { Sky } from "three/addons/objects/Sky.js";

const sky = new Sky();

const parameters = {
  elevation: 2,
  azimuth: 180,
};
const pmremGenerator = new THREE.PMREMGenerator(renderer);
const skyUniforms = sky.material.uniforms;

export default function setSky(scene) {
  sky.scale.setScalar(1000);
  scene.add(sky);

  skyUniforms["turbidity"].value = 10;
  skyUniforms["rayleigh"].value = 2;
  skyUniforms["mieCoefficient"].value = 0.005;
  skyUniforms["mieDirectionalG"].value = 0.8;
}
