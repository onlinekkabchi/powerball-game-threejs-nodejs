import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { AnimationMixer } from "three";

// const gltfLoader = new GLTFLoader();

export class Fox {
  constructor(scene) {
    this.gltfloader = new GLTFLoader();
    this.model = this.gltfloader.load(
      "./static/model/fox.glb",
      function (gltf) {
        const model = gltf.scene;
        model.position.set(5, 0, 0);
        model.scale.set(0.03, 0.03, 0.03);
        scene.add(model);
        console.log(model);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (err) {
        console.error(err);
      }
    );
    this.mixer = null;
  }
  //   async loader(scene) {
  //     // const self = this;
  //     await this.gltfloader.load(
  //       "./static/model/fox.glb",
  //       function (gltf) {
  //         const model = gltf.scene;
  //         model.position.set(5, 0, 0);
  //         model.scale.set(0.03, 0.03, 0.03);
  //         scene.add(model);
  //         console.log(model);
  //       },
  //       function (xhr) {
  //         console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  //       },
  //       function (err) {
  //         console.error(err);
  //       }
  //     );
  //   }
  test() {
    console.log("fox");
    console.log(this.scene);
    console.log(this.model);
  }
}
