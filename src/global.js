let canvas = document.getElementById('mycanvas');
let ctx = canvas.getContext('2d');

let scale = 25;
let objScale = 25;

var gameDimension = {
	width: canvas.width,
	height: canvas.height
}

class ID {
    constructor(init){
        this.counter = init
    }

    id(){
        const x = this.counter
        this.counter++
        return x
    }
}

let global_id = new ID(0)
let gameFlag = true

document.getElementById("game").addEventListener('click', () => {
	gameFlag = false;
});