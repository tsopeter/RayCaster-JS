class Vertex {
    constructor(x, y, z, id){
        this.x = x;
        this.y = y;
        this.z = z;
        this.id = id;
    }
}

function Vertex_equals(vtx0, vtx1) {
    const xx = vtx0.x == vtx1.x
    const yy = vtx0.y == vtx1.y
    const zz = vtx0.z == vtx1.z
    return xx && yy && zz
}