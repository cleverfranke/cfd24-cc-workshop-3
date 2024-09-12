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

  // Some stuff to programmatically calculate the min and max values of the data, not important for this workshop
  dataMin = Math.min(...dataset.map((entry) => entry.accountBalance));
  dataMax = Math.max(...dataset.map((entry) => entry.accountBalance));
}

function draw() {
  // Clear the background first
  background(250);

  // We will loop over all the data points
  for (let i = 0; i < dataset.length; i++) {
    // We calculate the x position based on accountBalance of the datapoint and map it to 100 and width - 100 to keep some margin
    let x = map(
      dataset[i].accountBalance,
      dataMin,
      dataMax,
      100,
      SKETCHWIDTH - 100
    );

    // We calculate the y position based on the index of the datapoint and map it to 100 and height - 100 to keep some margin
    let y = map(i, 0, dataset.length - 1, 100, SKETCHHEIGHT - 100);

    // The default shapeColor is red
    let shapeColor = "red";
    let shapeType = "circle";

    // If the accountBalance is even, we set the shapeColor to blue
    if (dataset[i].accountBalance % 2 === 0) {
      shapeColor = "blue";
    }

    // Check if the first letter of the name is a vowel
    if ("AEIOU".includes(dataset[i].name[0].toUpperCase())) {
      // If it is, we set the shapeColor to green
      shapeColor = "green";
    }

    // Check if there are more than two vowels in the name
    if (
      dataset[i].name.match(/[aeiou]/gi) &&
      dataset[i].name.match(/[aeiou]/gi).length > 2
    ) {
      // If there are, we set the shapeColor to yellow
      shapeType = "rect";
    }

    // Set the fill and stroke color to the shapeColor
    fill(shapeColor);
    stroke(shapeColor);

    // We draw a circle at the calculated position
    if (shapeType === "circle") {
      ellipse(x, y, BASE * 10);
    } else {
      rect(x - BASE * 5, y - BASE * 5, BASE * 10, BASE * 10);
    }

    // We loop over all the characters in the name and draw the slightly bigger circles
    for (let j = 0; j < dataset[i].name.length; j++) {
      // Remove the fill
      noFill();

      // We'll map the position of the letter in the name to the stroke weight using map
      const strokeWidth = map(j, 0, dataset[i].name.length - 1, 10, 1);
      strokeWeight(strokeWidth);
      stroke(shapeColor);

      // Draw the outward circles
      if (shapeType === "circle") {
        ellipse(x, y, BASE * 20 * j);
      } else {
        rect(
          x - (BASE * 20 * j) / 2,
          y - (BASE * 20 * j) / 2,
          BASE * 20 * j,
          BASE * 20 * j
        );
      }
    }
  }
}
