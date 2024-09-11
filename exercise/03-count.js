// First we create a new GUI
let gui = new lil.GUI();

// Here we keep track of the parameters we want to control and give them an initial value
let parameters = {
  circleCount: 1,
  minSize: 1,
  maxSize: 100,
};

function setup() {
  // After calling setResponsiveSizing, we can use SKETCHWIDTH, SKETCHHEIGHT and BASE
  setResponsiveSizing(1);
  createCanvas(SKETCHWIDTH, SKETCHHEIGHT);

  // We set the background color
  background(250);

  // We add the parameters to the GUI
  gui.add(parameters, "circleCount", 1, 100, 1);
  gui.add(parameters, "minSize", 10, 100, 1);
  gui.add(parameters, "maxSize", 1, 100, 1);

  // We don't want the draw loop to run automatically
  noLoop();

  // We do want to draw the canvas again when the parameters change
  gui.onChange(() => {
    draw();
  });
}

function draw() {
  // Clear the background first
  background(250);

  // Set the fill color to black
  fill(0);

  // Now we'll use a loop which runs as many times as the circleCount parameter
  for (let i = 0; i < parameters.circleCount; i++) {
    // We will pick a random x and y position and use a random value from minSize to maxSize for the size of the circle
    ellipse(
      random(0, SKETCHWIDTH),
      random(0, SKETCHHEIGHT),
      random(parameters.minSize, parameters.maxSize)
    );
  }
}
