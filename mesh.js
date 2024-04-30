/**
 * A triangular mesh
 */
class Mesh {
  /**
   * Factory method that takes an OBJ and creates a mesh
   * @param {String} string A string in OBJ format
   * @returns A mesh represented by the OBJ string
   */
  static fromOBJ(string) {

    //Break down the string by lines
    let lines = string.split('\n');

    //Where values will be stored
    let vs = []   //Vertex array
    let vts = []  //Texture coordinates array
    let vns = []  //Normals array
    let fs = []   //Faces array

    //Loop over all the lines
    for (let line of lines) {
      //Trim everything so whitespace doesn't break the parsel
      let trimmedLine = line.trim()

      //If the string is empty after trimming, ignore it.
      if (trimmedLine.length == 0) continue;

      //Split the line delimited by spaces
      let parts = line.trim().split(" ")

      //Look at the lineHeader, i.e., the first part of the line
      let lineHeader = parts[0].trim();

      //Handle vertices
      if (lineHeader == 'v') {
        //push onto v
        let v = new Vector3(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]));
        vs.push(v)
      }
      //Handle texture coordinates
      if (lineHeader == 'vt') {
        //push onto vt
        let vt = new Vector3(parseFloat(parts[1]), parseFloat(parts[2]));
        vts.push(vt)
      }
      //Handle normals
      if (lineHeader == 'vn') {
        //push onto n
        let vn = new Vector3(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]));
        vns.push(vn);
      }
      //Handle faces
      if (lineHeader == 'f') {
        //push onto f
        let face = {
          points: []
        }
        //Loop over the parts of a face definition
        for (let i = 1; i <= 3; i++) {
          //Grab te part we are on
          let first = parts[i]

          //Split on forward slashes
          let coords = first.split('/')
          
          //Get the vertex index
          let vIndex = parseInt(coords[0].trim()) - 1;

          //Get the texture coordinate index
          let vtIndex = parseInt(coords[1].trim()) - 1;

          //Get the normal index
          let vnIndex = parseInt(coords[2].trim()) - 1;

          //Put the values into a vertex
          let temp = new Vertex(vs[vIndex], vts[vtIndex], vns[vnIndex])

          //Add the vertex to the current face
          face.points.push(temp)
        }
        fs.push(face)
      }
    }

    //Generate a triangle
    let all = []
    for(let f of fs){
      let triangle = new Triangle(f.points[0], f.points[1], f.points[2])
      all.push(triangle)
    }
    
    //Generate a mesh
    let mesh = new Mesh(all);
    return mesh;
  }

  /**
   * Given a list of triangles, generate a new mesh object
   * @param {TriangleArray} triangles 
   */
  constructor(triangles) {
    this.triangles = triangles;
  }

  /**
   * Find the intersection of the ray with this mesh.
   * 
   * @param {Vector3} rayOrigin The origin of the ray
   * @param {Vector3} rayDirection The direction of the ray
   * @returns The collision point (if any)
   */
  intersect(rayOrigin, rayDirection) {
    let closest = Number.MAX_VALUE; //Store the closest collision distance
    let best = undefined //Store the closest collision object

    //Loop over the triangles
    for (let triangle of this.triangles) {
      //Find the intersection
      let intersection = triangle.intersect(rayOrigin, rayDirection)

      //If the intersection exists...
      if (intersection) {
        //...and the intersection is closer than any we've seen before...
        if (intersection.timeToCollision < closest) {
          //Store the collision details for further comparison
          best = intersection;
          closest = intersection.timeToCollision
        }
      }
    }
    //If we found an intersection...
    if (best) {
      //...return its collision object
      return best;
    }
    else {
      //...otherwise, return undefined
      return;
    }
  }

}