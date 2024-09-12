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
  itemCount: 1,
};

function setup() {
  // After calling setResponsiveSizing, we can use SKETCHWIDTH, SKETCHHEIGHT and BASE
  setResponsiveSizing(1);

  createCanvas(SKETCHWIDTH, SKETCHHEIGHT);

  // We set the background color
  background(250);

  // Limit the frameRate
  frameRate(5);

  // Randomize the rgb values
  parameters.red = round(random(0, 255));
  parameters.green = round(random(0, 255));
  parameters.blue = round(random(0, 255));

  // We add the parameters to the GUI
  gui.add(parameters, "red", 0, 255, 1);
  gui.add(parameters, "green", 0, 255, 1);
  gui.add(parameters, "blue", 0, 255, 1);
  gui.add(parameters, "textString");
}

function draw() {
  // Clear the background first (remove these comments to see the effect)
  // background(250);

  // Set the fill color to the values of the parameters
  fill(parameters.red, parameters.green, parameters.blue);

  // Remove the stroke
  noStroke();

  for (let i = 0; i < parameters.itemCount; i++) {
    // For readability, generate the random text size based on min and max and save it in a variable
    const fontSize = random(parameters.minSize, parameters.maxSize);

    // Draw the text at a position in the center of the canvas
    textSize(BASE * fontSize);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);

    fill(parameters.red, parameters.green, parameters);
    text(parameters.textString, random(SKETCHWIDTH), random(SKETCHHEIGHT));
  }
}
