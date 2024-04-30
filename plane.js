/**
 * A triangle class, with vertices specified in counter-clockwise order
 */
class Plane{
  /**
   * 
   * @param {Vector3} one The first vertex
   * @param {Vector3} two The second vertex
   * @param {Vector3} three The third vertex
   */
  constructor(one, two, three){
    this.vertices = [];
    this.vertices.push(...[one, two, three])
  }
  
  /**
   * Get the first vertex
   */
  get one(){
    return this.vertices[0];
  }
  
  /**
   * Get the second vertex
   */
  get two(){
    return this.vertices[1]
  }
  
  /**
   * Get the third vertex
   */
  get three(){
    return this.vertices[2]
  }
  
  /**
   * Get the vector from one to two
   */
  get oneTwo(){
    return this.one.position.minus(this.two.position).normalize();
  }
  
  /**
   * Get the vector from three to two
   */
  get threeTwo(){
    return this.three.position.minus(this.two.position).normalize();
  }
  
  /**
   * Calculate the collision point with the triangle
   * @param {Vector3} rayOrigin The origin of the ray
   * @param {Vector3} rayDirection The direction of the ray
   * @returns The cillion point
   */
  intersect(rayOrigin,rayDirection){
    //First find the collision on the plane
    
    //Get the perpendicular (normal) of the plane that contains this triangle
    //by getting the cross product of vectors on the edges of the triangle

    //Calculate the D from the plane that contains this triangle
    //Negate the dot ABC with a vector

    //Calculate the time to collision
    //Calculate the time to collision as -D-origin dot ABC all over direction dot ABC
    
    //Calculate the collision location
    //The location is origin + direction scaled by time to collision
    //let collisionLocation = rayOrigin.add(rayDirection.scale(timeToCollision));
    
    //Return all the details about the collision
    //Retur the time to collision, collision location, and normal at collision (ABC)
    return new Collision(1000, Vector3.Zero, Vector3.up);
  }
}