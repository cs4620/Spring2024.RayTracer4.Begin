/**
 * A class that explains a sphere parametrically
 */
class Sphere {
  /**
   * Create a sphere with the given center coordinate
   * and radius.
   * @param {Vector3} center The center of the sphere
   * @param {Number} radius - The radius of the sphere.
   * */
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }
  /**
   * Calculates the intersection point between a ray and
   * this sphere.
   * @param {Vector3} o - The origin of the ray
   * @param {Vector3} d - The direction of the ray
   * @returns undefined if there are no real roots or both roots are 
   * behind the ray origin, the coordinate of the closest collision point otherwise
   * */
  intersect(o, d) {
    let c = this.center;
    let r = this.radius;
    let oMinusC = o.minus(this.center)


    let A = 1;
    let B = 2 * d.dot(oMinusC);
    let C = (d.dot(oMinusC)) ** 2 - this.radius ** 2

    let discriminant = B ** 2 - 4 * A * C;

    if (discriminant <= 0) {
      return undefined;
    }



    let sqrt = Math.sqrt((d.dot(oMinusC)) ** 2 - (oMinusC.dot(oMinusC) - r ** 2));
    let t1 = (-d.dot(oMinusC) - sqrt)
    let t2 = (-d.dot(oMinusC) + sqrt)

    let timeToCollision;

    //If both collision points are positive, choose the closest one
    if (t1 > 0 && t2 > 0) {
      timeToCollision = Math.min(t1, t2);
    }
    //Both collision points were not infront of the ray.
    else {
      //Check if t1 is positive
      if (t1 > 0)
        timeToCollision = t1;
      //Check if t2 is positive
      else if (t2 > 0)
        timeToCollision = t2;
      //They are both behind the ray origin
      else
        return undefined; //The only collision points were behind the origin of the ray
    }

    // return {t,v:new Vector3(o.x + t * d.x, o.y + t * d.y, o.z + t * d.z)};
    let collisionLocation = o.add(d.scale(timeToCollision))
    // return { timeToCollision, collisionLocation };
    return new Collision(timeToCollision, collisionLocation, collisionLocation.minus(this.center).normalize())
  }
}