import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

async function lottery(gscene) {
  //   로터리 머신
  //   const gltf = await loader.loadAsync("./static/model/lottery-machine.glb");
  const gltf = await Promise.all([
    loader.loadAsync("./static/model/lottery-machine.glb"),
  ]);
  const model = gltf.scene;
  gscene.add(model);
}

export { lottery };
