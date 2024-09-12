// First we create a new GUI
let gui = new lil.GUI();

let dataMin, dataMax;

// Here we keep track of the parameters we want to control and give them an initial value
let parameters = {
  Name: "Start template",
  strokeWidth: 1,
};

function setup() {
  // After calling setResponsiveSizing, we can use SKETCHWIDTH, SKETCHHEIGHT and BASE
  setResponsiveSizing(0.8);
  createCanvas(SKETCHWIDTH, SKETCHHEIGHT);

  // We set the background color
  background(250);

  // We add the parameters to the GUI
  gui.add(parameters, "Name");
  gui.add(parameters, "strokeWidth", 1, 100, 0.25);
}

function draw() {
  // Clear the background first
  background(250);

  // We will loop over all the data points and draw an ellipse for each one
  for (let i = 0; i < dataset.length; i++) {
    noFill();

    ellipse(
      SKETCHWIDTH / 2,
      SKETCHHEIGHT / 2,
      dataset[i].numTransactions,
      dataset[i].numTransactions
    );

    strokeWeight(parameters.strokeWidth);
    stroke(0);
  }
}
