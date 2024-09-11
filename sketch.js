// First we create a new GUI
let gui = new lil.GUI();

// Here we keep track of the parameters we want to control and give them an initial value
let parameters = {
  blue: 0,
  green: 0,
  itemCount: 1,
  maxSize: 128,
  minSize: 32,
  red: 0,
  textString: "C°F",
};

function setup() {
  // After calling setResponsiveSizing, we can use SKETCHWIDTH, SKETCHHEIGHT and BASE
  setResponsiveSizing(1);

  createCanvas(SKETCHWIDTH, SKETCHHEIGHT);

  // We set the background color
  background(250);

  // To mix things up a bit, we can randomize the colors each time the sketch is loaded
  parameters.red = round(random(255));
  parameters.green = round(random(255));
  parameters.blue = round(random(255));

  // We add the parameters to the GUI
  gui.add(parameters, "blue", 0, 255, 1);
  gui.add(parameters, "green", 0, 255, 1);
  gui.add(parameters, "itemCount", 1, 10, 1);
  gui.add(parameters, "maxSize", 32, 128, 1);
  gui.add(parameters, "minSize", 32, 128, 1);
  gui.add(parameters, "red", 0, 255, 1);
  gui.add(parameters, "textString");

  // Frame rate is set to 5 to make it easier to see the changes
  frameRate(5);
}

function draw() {
  // We are not clearing the background, but you can do so to see the results by uncommenting the following rule
  // background(250)

  // Set the fill color to the values of the parameters
  fill(parameters.red, parameters.green, parameters.blue);

  // Remove the stroke
  noStroke();

  for (let i = 0; i < parameters.itemCount; i++) {
    // For readability, generate the random text size based on min and max and save it in a variable
    const fontSize = random(parameters.minSize, parameters.maxSize);

    // For readability, save the random position in a variable
    const xPosition = random(SKETCHWIDTH);
    const yPosition = random(SKETCHHEIGHT);

    // Draw the text at a position in the center of the canvas
    textSize(BASE * fontSize);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(parameters.textString, xPosition, yPosition);
  }
}
