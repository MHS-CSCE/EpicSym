let colorlist = ['gold', 'yellow', 'turquoise', 'red']

function setup() {
    
    createCanvas(windowWidth - (windowWidth / 3), windowHeight);
    background(205);
}

function draw() {
    if (mouseIsPressed == true) {
        noStroke()
        fill(random(colorlist));
        ellipse(mouseX, mouseY, 25, 25);
    }
}
