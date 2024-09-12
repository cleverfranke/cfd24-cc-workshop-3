// First we create a new GUI
let gui = new lil.GUI();

// Here we keep track of the parameters we want to control and give them an initial value
let parameters = {
  Name: "Mapping basics",
  minCircleSize: 10,
  maxCircleSize: 50,
};

function setup() {
  // After calling setResponsiveSizing, we can use SKETCHWIDTH, SKETCHHEIGHT and BASE
  setResponsiveSizing(0.8);
  createCanvas(SKETCHWIDTH, SKETCHHEIGHT);

  // We set the background color
  background(250);

  // We add the parameters to the GUI
  gui.add(parameters, "Name");
  gui.add(parameters, "minCircleSize", 1, 100, 1);
  gui.add(parameters, "maxCircleSize", 1, 100, 1);
}

function draw() {
  // Clear the background first
  background(250);

  // Lets get the minimum and maximum values of the numTransactions property
  let dataMin = getMinValue("numTransactions");
  let dataMax = getMaxValue("numTransactions");

  // We will loop over all the data points
  for (let i = 0; i < dataset.length; i++) {
    // Get the value of the numTransactions property of the current data point
    let value = dataset[i].numTransactions;

    // Map this value to a size between 10 and 50
    let size = map(
      value,
      dataMin,
      dataMax,
      parameters.minCircleSize,
      parameters.maxCircleSize
    );

    // Map the index of the data point to a position between 100 and height - 100
    let y = map(i, 0, dataset.length - 1, 100, SKETCHHEIGHT - 100);

    // Set the fill color to black
    fill(0);

    // Draw an ellipse at the center width and the calculated y position with the calculated size
    ellipse(SKETCHWIDTH / 2, y, size, size);
  }
}
