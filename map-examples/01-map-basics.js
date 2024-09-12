// First we create a new GUI
let gui = new lil.GUI();

let data = [
  {
    name: "Oliver",
    amount: 53,
  },
  {
    name: "Sophia",
    amount: 112,
  },
  {
    name: "Liam",
    amount: 45,
  },
  {
    name: "Isabella",
    amount: 89,
  },
  {
    name: "Ethan",
    amount: 230,
  },
  {
    name: "Mia",
    amount: 175,
  },
  {
    name: "James",
    amount: 67,
  },
  {
    name: "Ava",
    amount: 150,
  },
  {
    name: "Henry",
    amount: 92,
  },
  {
    name: "Charlotte",
    amount: 204,
  },
];

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

  // Some stuff to programmatically calculate the min and max values of the data, not important for this workshop
  dataMin = Math.min(...data.map((entry) => entry.amount));
  dataMax = Math.max(...data.map((entry) => entry.amount));
}

function draw() {
  // Clear the background first
  background(250);

  // Set the fill color to black
  fill(0);

  // We will loop over all the data points
  for (let i = 0; i < data.length; i++) {
    // We calculate the x position based on amount of the datapoint and map it to 100 and width - 100 to keep some margin
    let x = map(data[i].amount, dataMin, dataMax, 100, SKETCHWIDTH - 100);

    // We calculate the y position based on the index of the datapoint and map it to 100 and height - 100 to keep some margin
    let y = map(i, 0, data.length - 1, 100, SKETCHHEIGHT - 100);

    // We draw a circle at the calculated position
    ellipse(x, y, 10);

    // We draw the name of the person below the circle for debugging purposes
    text(data[i].name, x, y + 20);
  }
}
