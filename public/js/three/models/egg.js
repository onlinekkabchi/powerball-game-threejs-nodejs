import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();
const eggMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

export default function egg(scene) {
  loader.load(
    "./static/model/egg-1.glb",
    function (gltf) {
      const model = gltf.scene;

      console.log("egg");
      console.log(model);

      model.children[0].material = eggMaterial;

      model.position.set(0, 2, 0);
      model.scale.set(2, 2, 2);
      scene.add(model);
    },
    undefined,
    function (err) {
      console.error(err);
    }
  );
}
