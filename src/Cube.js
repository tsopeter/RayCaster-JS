class Cube {
    constructor(position, side) {
        this.shape = new Shape()
        this.shape.position = position
        this.shape.id = global_id.id()
        var v1 = new Vertex(-side, -side, side, global_id.id())
        var v2 = new Vertex(side, -side, side, global_id.id())
        var v3 = new Vertex(side, side, side, global_id.id())
        var v4 = new Vertex(-side, side, side, global_id.id())
        var v5 = new Vertex(-side, -side, -side, global_id.id())
        var v6 = new Vertex(side, -side, -side, global_id.id())
        var v7 = new Vertex(side, side, -side, global_id.id())
        var v8 = new Vertex(-side, side, -side, global_id.id())

        var l1 = new Line(v1, v2)
        var l2 = new Line(v2, v3)
        var l3 = new Line(v3, v4)
        var l4 = new Line(v4, v1)

        var l5 = new Line(v1, v5)
        var l6 = new Line(v2, v6)
        var l7 = new Line(v3, v7)
        var l8 = new Line(v4, v8)

        var l9 = new Line(v5, v6)
        var l10 = new Line(v6, v7)
        var l11 = new Line(v7, v8)
        var l12 = new Line(v8, v5)

        this.shape.vertexes = [v1, v2, v3, v4, v5, v6, v7, v8]
        this.shape.lines = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12]
    }

    getShape () {
        return this.shape
    }
}