class Scene{
  static scene;
  constructor(rayTracedObjects, camera, lights, options = {}){
    this.rayTracedObjects = rayTracedObjects;
    this.camera = camera;
    this.lights = lights;
    this.options = options;
  }

}

