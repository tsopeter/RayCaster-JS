class Shape {
    constructor(position, vertexes, lines, id) {
        this.id = id
        this.position = position;
        this.vertexes = vertexes;
        this.lines = lines;
    }

    rotate(roll, azimuth, elevation){
        for (let i = 0; i < this.vertexes.length; ++i) {
            let r0 = rotate(this.vertexes[i], roll, azimuth, elevation)
            this.vertexes[i].x = r0.x
            this.vertexes[i].y = r0.y
            this.vertexes[i].z = r0.z
        }
    }

    perVertexApply (fn) {
        for (let i = 0; i < this.vertexes.length; ++i) {
            let r0 = fn(this.vertexes[i])
            this.vertexes[i].x = r0.x
            this.vertexes[i].y = r0.y
            this.vertexes[i].z = r0.z
        }
    }

    get(id) {
        for (let i = 0; i < this.vertexes.length; i++) {
            if (this.vertexes[i].id == id)
                return this.vertexes[i]
        }
        return undefined;
    }
}