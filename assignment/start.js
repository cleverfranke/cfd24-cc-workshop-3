// First we create a new GUI
let gui = new lil.GUI();

let dataMin, dataMax;

// Here we keep track of the parameters we want to control and give them an initial value
let parameters = {
  Name: "Mapping basics",
};

function setup() {
  // After calling setResponsiveSizing, we can use SKETCHWIDTH, SKETCHHEIGHT and BASE
  setResponsiveSizing(0.8);
  createCanvas(SKETCHWIDTH, SKETCHHEIGHT);

  // We set the background color
  background(250);

  // We add the parameters to the GUI
  gui.add(parameters, "Name");

  console.log(dataset.length);
  console.log(getSumOfValues("numTransactions"));
}

function draw() {
  // Clear the background first
  background(250);

  // We will loop over all the data points
  for (let i = 0; i < dataset.length; i++) {}
}
