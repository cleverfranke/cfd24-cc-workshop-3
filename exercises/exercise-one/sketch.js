// First we create a new GUI
let gui = new lil.GUI();

// Here we keep track of the parameters we want to control and give them an initial value
let parameters = {
  circleSize: 50,
  xPosition: 0,
  yPosition: 0,
};

function setup() {
  // After calling setResponsiveSizing, we can use SKETCHWIDTH, SKETCHHEIGHT and BASE
  setResponsiveSizing(1);
  createCanvas(SKETCHWIDTH, SKETCHHEIGHT);

  // We set the background color
  background(250);

  // We set the initial position of the circle to the center of the canvas
  parameters.xPosition = SKETCHWIDTH / 2;
  parameters.yPosition = SKETCHHEIGHT / 2;

  // We add the parameters to the GUI
  gui.add(parameters, "circleSize", 0, 100, 1);
  gui.add(parameters, "xPosition", 0, SKETCHWIDTH, 1);
  gui.add(parameters, "yPosition", 0, SKETCHHEIGHT, 1);
}

function draw() {
  fill(0);

  // Now we can use the values of the parameters to draw the ellipse
  ellipse(
    parameters.xPosition,
    parameters.yPosition,
    parameters.circleSize,
    parameters.circleSize
  );
}
