class Aggregate {
    constructor(Containers) {
        this.Containers = Containers   // Containers must have getShape
    }

    applyContainers (engine) {
        this.Containers.forEach(cont => {
            engine.addShape(cont.getShape())
        });
    }
}