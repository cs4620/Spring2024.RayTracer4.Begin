class SunLight{
  constructor(color, direction){
    this.color = color;
    this.direction = direction;
  }
  illumination(origin){
    return this.color;
  }
}