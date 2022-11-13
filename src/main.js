main = () => {
	console.log('Main started');

    var engine = new Engine(ctx, 350);
    var smobj0 = new SmartObject(new Vertex(0, 0, 30), [
        [-5, -5, -5, 0],
        [-5, 5, -5, 0],
        [5, 5, -5, 0],
        [5, -5, -5, 0]
    ])
    var smobj1 = new SmartObject(new Vertex(0, 0, 30), [
        [-5, -5, -5, 0],
        [-5, 5, -5, 0],
        [5, 5, -5, 0],
        [5, -5, -5, 0]
    ])
    var smobj2 = new SmartObject(new Vertex(0, 0, 30), [
        [-5, -5, -5, 0],
        [-5, 5, -5, 0],
        [5, 5, -5, 0],
        [5, -5, -5, 0]
    ])
    var smobj3 = new SmartObject(new Vertex(0, 0, 30), [
        [-5, -5, -5, 0],
        [-5, 5, -5, 0],
        [5, 5, -5, 0],
        [5, -5, -5, 0]
    ])
    var smobj4 = new SmartObject(new Vertex(0, 0, 30), [
        [-5, -5, -5, 0],
        [-5, 5, -5, 0],
        [5, 5, -5, 0],
        [5, -5, -5, 0]
    ])
    var smobj5 = new SmartObject(new Vertex(0, 0, 30), [
        [-5, -5, -5, 0],
        [-5, 5, -5, 0],
        [5, 5, -5, 0],
        [5, -5, -5, 0]
    ])
    

    smobj1.getShape().rotate(0, deg2rad(90), 0)
    smobj2.getShape().rotate(0, deg2rad(180), 0)
    smobj3.getShape().rotate(0, deg2rad(270), 0)
    smobj4.getShape().rotate(0, 0, deg2rad(90))
    smobj5.getShape().rotate(0, 0, deg2rad(-90))
    var Agg = new Aggregate([smobj0, smobj1, smobj2, smobj3, smobj4, smobj5])
    Agg.applyContainers(engine)

    prog(0, engine)

	console.log('Main ended');
};

function prog(x, engine){
	setTimeout(() => {
        var rot = deg2rad(1)
		document.getElementById('frame-counter').innerText = 'frame: ' + x++;
        engine.clear()
        engine.getShapes().forEach(e => e.rotate(rot, rot, 0))
        engine.render()
        if (gameFlag == false)
            return
		prog(x, engine);
	}, 20);
}