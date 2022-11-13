class Camera {
    constructor(position, fov) {
        this.position = position
        this.fov = fov
        this.azimuth = 0;
        this.elevation = 0;
        this.roll = 0;
    }

    perspective(vtx) {
        var r0 = new Vertex(vtx.x - this.position.x, vtx.y - this.position.y, vtx.z - this.position.z, 0);
        var r1 = rotate(r0, this.roll, this.azimuth, this.elevation);
        return this.mm(r1)
    }

    mm(vtx) {
        var ez = this.fov;
        var dx = vtx.x;
        var dy = vtx.y;
        var dz = vtx.z;
        let r  = (ez/dz)*dx;
        let q  = (ez/dz)*dy;
        return {x: r, y: q};
    }
}