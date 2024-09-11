// First we create a new GUI
let gui = new lil.GUI();

// Here we keep track of the parameters we want to control and give them an initial value
let parameters = {
  red: 0,
  green: 0,
  blue: 0,
  textString: "C°F",
  minSize: 32,
  maxSize: 128,
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
  gui.add(parameters, "textString");
}

function draw() {
  // Clear the background first
  background(250);

  // Set the fill color to the values of the parameters
  fill(parameters.red, parameters.green, parameters.blue);

  // Remove the stroke
  noStroke();

  for (let i = 0; i < parameters.itemCount; i++) {
    // For readability, generate the random text size based on min and max and save it in a variable
    const textSize = random(parameters.minSize, parameters.maxSize);

    // Draw the text at a position in the center of the canvas
    textSize(BASE * textSize);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(parameters.textString, SKETCHWIDTH / 2, SKETCHHEIGHT / 2);
  }
}
