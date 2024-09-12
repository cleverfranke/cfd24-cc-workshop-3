// First we create a new GUI
let gui = new lil.GUI();

let dataMin, dataMax;

// Here we keep track of the parameters we want to control and give them an initial value
let parameters = {
  Name: "Even/uneven",
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

  // We will loop over all the data points
  for (let i = 0; i < data.length; i++) {
    // We calculate the x position based on amount of the datapoint and map it to 100 and width - 100 to keep some margin
    let x = map(data[i].amount, dataMin, dataMax, 100, SKETCHWIDTH - 100);

    // We calculate the y position based on the index of the datapoint and map it to 100 and height - 100 to keep some margin
    let y = map(i, 0, data.length - 1, 100, SKETCHHEIGHT - 100);

    // The default shapeColor is red
    let shapeColor = "red";

    // If the amount is even, we set the shapeColor to blue
    if (data[i].amount % 2 === 0) {
      shapeColor = "blue";
    }

    // Set the fill and stroke color to the shapeColor
    fill(shapeColor);
    stroke(shapeColor);

    // We draw a circle at the calculated position
    ellipse(x, y, BASE * 10);

    // We loop over all the characters in the name and draw the slightly bigger circles
    for (let j = 0; j < data[i].name.length; j++) {
      // Remove the fill
      noFill();

      // We'll map the position of the letter in the name to the stroke weight using map
      const strokeWidth = map(j, 0, data[i].name.length - 1, 10, 1);
      strokeWeight(strokeWidth);
      stroke(shapeColor);

      // Draw the outward circles
      ellipse(x, y, BASE * 20 * j);
    }
  }
}

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
