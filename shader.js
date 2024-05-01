/**
 * An ambient shader
 */
class AmbientShader {
  constructor(ambientColor) {
    this.ambientColor = ambientColor;
  }
  illuminateObject(rayFrom = null, rayCollision = null, normal = null, collisionObject = null, remaining = 0) {
    return this.ambientColor;
  }

}

class DiffuseShader {
  constructor(diffuseColor, lightDirection) {
    [this.diffuseColor, this.lightDirection] = [diffuseColor, lightDirection]
  }
  illuminateObject(rayFrom, rayCollision, normal, collisionObject = null, remaining = 0) {
    let coefficient = normal.dot(this.lightDirection);
    if (coefficient < 0)
      coefficient = 0;

    //Now check for shadows
    let shadowRay = closestCollision(rayCollision, this.lightDirection, collisionObject, 1)
    if (shadowRay) {
      return new Vector3(0, 0, 0)
    }
    return this.diffuseColor.scale(coefficient);
  }
}

class MixShader {
  constructor(shaderA, shaderB, percent) {
    [this.shaderA, this.shaderB, this.percent] = [shaderA, shaderB, percent]
  }
  illuminateObject(rayFrom = null, rayCollision = null, normal = null, collisionObject = null, remaining = 0) {
    let a = this.shaderA.illuminateObject(rayFrom, rayCollision, normal, collisionObject, remaining)
    let b = this.shaderB.illuminateObject(rayFrom, rayCollision, normal, collisionObject, remaining)
    let bPercent = 1 - this.percent;
    let result = a.scale(this.percent).add(b.scale(bPercent));
    return result;
  }
}

class MirrorShader {
  constructor(baseColor) {
    this.baseColor = baseColor
  }
  illuminateObject(rayFrom, rayCollision, normal, collisionObject = null, remaining = 0) {
    let toSource = rayFrom.minus(rayCollision).normalize()

    let reflection = toSource.minus(normal.scale(2*toSource.dot(normal)))
    
    let result = closestCollision(rayCollision, reflection, collisionObject, remaining-1);
    
    if (!result) return new Vector3(0, 128, 128);

    //Get the location of the collision
    let rayTracedPixel = result.rayTracedObject.shader.illuminateObject(origin, result.collisionLocation, result.normalAtCollision, result.rayTracedObject, 0)
    return rayTracedPixel
  }

}