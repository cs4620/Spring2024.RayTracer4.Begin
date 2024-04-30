class Camera{
  static Orthographic = 0;
  static Perspective = 1;

  constructor(origin, direction, up, type, angle = Math.PI/4){
    this.origin = origin;
    this.direction = direction.normalize()
    this.up = up.normalize();
    this.type = type;
    this.angle = angle
  }

  getOrigin(x,y){
    if(this.type == Camera.Orthographic){
      return new Vector3(x,y,this.origin.z);
    }
    else{
      //Assume it's perspective
      return this.origin;
    }

  }
  getDirection(x,y){
    if(this.type == Camera.Orthographic){
      return this.direction;
    }
    else{
      //Take a cross product to dtermine the right direction
      let right = this.direction.cross(this.up).normalize()

      //Recalculate the up direction for our sanity
      let up = right.cross(this.direction).normalize()

      let cos = Math.cos(this.angle);
      let sin = Math.sin(this.angle);

      let xOffset = right.scale(x).scale(sin)
      let yOffset = up.scale(y).scale(sin);


      let newDirection = this.direction.scale(cos).add(xOffset).add(yOffset).normalize();


      return newDirection
    }

  }
  
}