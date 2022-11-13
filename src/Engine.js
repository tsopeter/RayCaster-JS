class Engine {
    constructor(ctx, fov) {
        this.camera = new Camera(new Vertex(0, 0, 0), fov);
        this.shapes = [];
        this.ctx = ctx;
    }

    clear(){
        const width  = this.ctx.canvas.width
        const height = this.ctx.canvas.height
        this.ctx.clearRect(0, 0, width, height)
    }

    render(){
        const halfx = this.ctx.canvas.width/2
        const halfy = this.ctx.canvas.height/2
        this.shapes.forEach( s => {
            s.lines.forEach(e => {
                let vtx0 = new Vertex(e.id0.x + s.position.x, e.id0.y + s.position.y, e.id0.z + s.position.z)
                let vtx1 = new Vertex(e.id1.x + s.position.x, e.id1.y + s.position.y, e.id1.z + s.position.z)
                let v0 = this.camera.perspective(vtx0)
                let v1 = this.camera.perspective(vtx1)

                this.ctx.beginPath()
                this.ctx.moveTo(v0.x + halfx, v0.y + halfy)
                this.ctx.lineTo(v1.x + halfx, v1.y + halfy)
                this.ctx.stroke()
            });
        })
    }

    addShape(shape){
        this.shapes.push(shape);
    }

    getShape(id){
        for (let i = 0; i < this.shapes.length; i++) {
            if (this.shapes[i].id == id)
                return this.shapes[i];
        }
        return undefined
    }

    getShapes() {
        return this.shapes
    }
};