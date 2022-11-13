class SmartObject {
    constructor(position, pairwise) {
        this.pairs = pairwise
        this.shape = new Shape()
        this.shape.position = position
        this.build_shape()
    }

    build_shape () {
        // builds vertexes
        var vertexes = []
        this.pairs.forEach(pairs => {
            vertexes.push([new Vertex(pairs[0], pairs[1], pairs[2], global_id.id()), pairs[3], true])
        });

        // generate simple link
        var simple_links = []
        vertexes.forEach(pairs => {
            let arg = pairs[1]
            vertexes.forEach (simple => {
                if (simple[1] == arg && pairs != simple)
                    simple_links.push([pairs[0], simple[0], true])
            });
        });

        // remove any redundant simple links
        simple_links.forEach(simple => {
            if (simple[2]) {
                let swp = swap2(simple)
                simple_links.forEach(s => {
                    if (swp[0] == s[0] && swp[1] ==s[1])
                        s[2] = false
                })
            }
        });

        // now append to links
        var links = []
        simple_links.forEach(simple => {
            if (simple[2])
                links.push(simple)
        })

        this.shape.vertexes = vertexes.map(x => x[0])
        this.shape.lines = links.map(x => new Line(x[0], x[1]))

        console.log(this.shape.vertexes)
        console.log(this.shape.lines)

    }

    getShape () {
        return this.shape;
    }
}