"use strict"

/**
 * The main ray tracing routine
 */
async function main() {
  let canvas = document.querySelector("canvas");
  canvas.width = width * 2;
  canvas.height = height;
  let ctx = canvas.getContext("2d")

  let image = Array.from(Array(width), () => new Array(height))

  //Ray Tracer starts
  //Loop over all the pixels
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (!image[x][y])
        image[x][y] = []

      if (x == 210 && y == 200) {
        let noop = 0;
      }


      let color = render(x, y);
      ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`
      ctx.fillRect(x, y, 1, 1)
      if (x == 315 && y == 200) {
        ctx.fillStyle = `rgb(255,0,255)`
        ctx.fillRect(x, y, 1, 1)
      }
    }
  }
}

/**
 * Run our ray tracer
 */
function render(x, y) {


  //Determine the origin and direction of the ray
  let startX = x - width / 2;
  let startY = y - height / 2;
  let origin = Scene.scene.camera.getOrigin(startX, startY);
  let direction = Scene.scene.camera.getDirection(startX / (width / 2), startY / (height / 2));

  let result = closestCollision(origin, direction, null, 2);
  if (!result) return new Vector3(128, 128, 128);

  //Get the location of the collision
  let rayTracedPixel = result.rayTracedObject.shader.illuminateObject(origin, result.collisionLocation, result.normalAtCollision, result.rayTracedObject, 0)
  return rayTracedPixel

}

function closestCollision(origin, direction, ignored = null, remaining = 1) {
  if (remaining <= 0) return;
  let closestPositiveT = Number.MAX_VALUE;
  let closestCollision;

  //The color of the closest collision for this pixel
  for (let rayTracedObject of Scene.scene.rayTracedObjects) {
    if (rayTracedObject == ignored) continue;
    //Get the geometry of the current object
    let geometry = rayTracedObject.geometry

    //Find the intersection with this object
    let collision = geometry.intersect(origin, direction);

    //Check to see if the collision exists...
    //...and if it is closer than any other collision we've seen
    if (collision && collision.timeToCollision < closestPositiveT) {
      //Get the distance to collision
      closestPositiveT = collision.timeToCollision
      collision.rayTracedObject = rayTracedObject;
      closestCollision = collision;
    }
  }
  return closestCollision;
}

//Run the main ray tracer
main();