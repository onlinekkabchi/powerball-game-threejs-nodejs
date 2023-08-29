import * as THREE from "three";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";

const hdrEquirect = new RGBELoader()
  .setPath("./static/texture/")
  .load("Window_Lighting_01.jpeg", function () {
    hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
  });

export { hdrEquirect };
