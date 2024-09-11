// First we create a new GUI
let gui = new lil.GUI();

// Here we keep track of the parameters we want to control and give them an initial value
let parameters = {
  red: 0,
  green: 0,
  blue: 0,
};

function setup() {
  // After calling setResponsiveSizing, we can use SKETCHWIDTH, SKETCHHEIGHT and BASE
  setResponsiveSizing(1);
  createCanvas(SKETCHWIDTH, SKETCHHEIGHT);

  // We set the background color
  background(250);

  // We add the parameters to the GUI
  gui.add(parameters, "red", 0, 255, 1);
  gui.add(parameters, "green", 0, 255, 1);
  gui.add(parameters, "blue", 0, 255, 1);
}

function draw() {
  // Clear the background first
  background(250);

  // Set the fill color to the values of the parameters
  fill(parameters.red, parameters.green, parameters.blue);

  // Remove the stroke
  noStroke();

  // Draw a circle in the center of the canvas
  ellipse(SKETCHWIDTH / 2, SKETCHHEIGHT / 2, 100);
}
