// First we create a new GUI
let gui = new lil.GUI();

// Here we keep track of the parameters we want to control and give them an initial value
let parameters = {
  Name: "Color values",
  startColor: "#FF0000",
  endColor: "#00FF00",
  lineLengthBase: 100,
};

function setup() {
  // After calling setResponsiveSizing, we can use SKETCHWIDTH, SKETCHHEIGHT and BASE
  setResponsiveSizing(0.8);
  createCanvas(SKETCHWIDTH, SKETCHHEIGHT);

  // We set the background color
  background(250);

  // We add the parameters to the GUI
  gui.add(parameters, "Name");
  gui.add(parameters, "lineLengthBase", 10, 500, 10);

  // Add colors using the color picker
  gui.addColor(parameters, "startColor");
  gui.addColor(parameters, "endColor");
}

function draw() {
  // Clear the background first
  background(255);

  // Lets get the minimum and maximum values of the accountBalance property
  let minAccountBalance = getMinValue("accountBalance");
  let maxAccountBalance = getMaxValue("accountBalance");
  let minTransactions = getMinValue("numTransactions");
  let maxTransactions = getMaxValue("numTransactions");

  // We will loop over all the data points
  for (let i = 0; i < dataset.length; i++) {
    // Map the index of the data point to a position between 100 and height - 100
    let y = map(i, 0, dataset.length - 1, 100, SKETCHHEIGHT - 100);

    // Map the value of the accountBalance property of the current data point to a size between 0 and 1
    let colorPosition = map(
      dataset[i].accountBalance,
      minAccountBalance,
      maxAccountBalance,
      0,
      1
    );

    // Set the stroke color to a gradient between the startColor and endColor
    let strokeColor = lerpColor(
      color(parameters.startColor),
      color(parameters.endColor),
      colorPosition
    );

    //  Draw a line from the left side of the canvas to the right side
    strokeWeight(10);
    strokeCap(SQUARE);
    stroke(strokeColor);

    // Decide how long the line is based on the length of the name
    let characters = dataset[i].name.length;
    let lineLength = map(
      characters,
      0,
      10,
      parameters.lineLengthBase,
      SKETCHWIDTH - parameters.lineLengthBase
    );

    // Draw a line from the center, subtract half the line length on the left side, add it on the right side
    line(
      SKETCHWIDTH / 2 - lineLength / 2,
      y,
      SKETCHWIDTH / 2 + lineLength / 2,
      y
    );
  }
}
