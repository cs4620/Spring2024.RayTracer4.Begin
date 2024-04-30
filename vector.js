/**
 * A class for storing x,y,and z values
 * */
class Vector3 {

  static zero = new Vector3();
  static one = new Vector3(1,1,1);
  static forward = new Vector3(0,0,-1);
  static backward = new Vector3(0,0,1);
  static left = new Vector3(0,0,-1);
  static right = new Vector3(0,0,1);
  static up = new Vector3(0,1,0);
  static down = new Vector3(0,-1,0)
  /**
   * Creates a new Vector3.
   * <p>
   * Any parameters not supplied defaults to 0.
   * </p>
   * */
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    Object.freeze(this);
  }

  /**
   * Get the x, treating it as r in RGB
   */
  get r(){
    return this.x;
  }

  /**
   * Get the y, treating it as g in RGB
   */
  get g(){
    return this.y;
  }

  /**
   * Get the z, treating it as b in RGB
   */
  get b(){
    return this.z
  }
  /**
   * Creates a new Vector3 of length 1 from this vector.
   * @returns {Vector3} The normalized vector.
   * */
  normalize() {
    let length = this.length()
    return new Vector3(this.x / length, this.y / length, this.z / length);
  }
  /**
   * Calculates the length of this vector.
   * @returns The length of the vector
   */
  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)
  }
  /**
   * Calculates the dot product of this and another vector
   * @param {Vector3} other The other vector
   * @returns The dot product of the two vectors
   */
  dot(other) {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }
  /**
   * Calculates the cross product of this and another vector
   * @param {Vector3} other The other vector
   * @returns The cross product of the two vectors stored in a new Vector3
   */
  cross(other) {
      return new Vector3(this.y * other.z - this.z * other.y, this.z * other.x - this.x * other.z, this.x * other.y - this.y * other.x);
  }
  /**
   * Create a new Vector3 that is the sum of this and another vector.
   * @param {Vector3} other The other vector
   * @returns A new Vector3 with the sume of the vectors.
   */
  add(other) {
    return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
  }
  /**
   * Creates a new Vector3 that is the inverse of this.
   * @returns A new Vector 3
   */
  negate() {
    return new Vector3(-this.x, -this.y, -this.z);
  }
  /**
   * Creates a new Vector3 that is the difference between this and another vector.
   * @param {Vector3} other The other vector
   * @returns A new Vector3 that is the difference
   */
  minus(other) {
    return this.add(other.negate());
  }

  scale(scalar){
    return new Vector3(this.x * scalar, this.y * scalar, this.z*scalar);
  }
}