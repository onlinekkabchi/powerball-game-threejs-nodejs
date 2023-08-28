import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();
// const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

export default function egg(scene) {
  loader.load(
    "./static/model/egg-1.glb",
    function (gltf) {
      const model = gltf.scene;
      model.position.set(1, 10, 0);
      model.scale.set(0.5, 0.5, 0.5);
      scene.add(model);
    },
    undefined,
    function (err) {
      console.error(err);
    }
  );
}
