// First we create a new GUI
let gui = new lil.GUI();

// Here we keep track of the parameters we want to control and give them an initial value
let parameters = {
  textString: "C°F",
};

function setup() {
  // After calling setResponsiveSizing, we can use SKETCHWIDTH, SKETCHHEIGHT and BASE
  setResponsiveSizing(1);
  createCanvas(SKETCHWIDTH, SKETCHHEIGHT);

  // We set the background color
  background(250);

  // We add the parameters to the GUI
  gui.add(parameters, "textString");
}

function draw() {
  // Clear the background first
  background(250);

  // Set the fill to black
  fill(0);

  // Remove the stroke
  noStroke();

  // Draw the text at a position in the center of the canvas
  textSize(BASE * 64);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(parameters.textString, SKETCHWIDTH / 2, SKETCHHEIGHT / 2);
}
