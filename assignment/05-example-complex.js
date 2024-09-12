// First, we create a new GUI
let gui = new lil.GUI();

// Parameters for controlling the visual aspects
let parameters = {
  Name: "Complex visual",
  minShapeSize: 10,
  maxShapeSize: 100,
  colorVariation: 150,
  lineDashJump: 5,
  lineDashLength: 5,
  baseColor: "#3296fa", // Default hex color
};

function setup() {
  // Set up responsive canvas sizing
  setResponsiveSizing(0.8);
  createCanvas(SKETCHWIDTH, SKETCHHEIGHT);

  // Set the background color
  background(250);

  // Add parameters to the GUI for interaction
  gui.add(parameters, "Name");
  gui.add(parameters, "minShapeSize", 1, 200, 1);
  gui.add(parameters, "maxShapeSize", 1, 200, 1);
  gui.add(parameters, "colorVariation", 0, 255, 1);
  gui.add(parameters, "lineDashJump", 0, 20, 1);
  gui.add(parameters, "lineDashLength", 0, 20, 1);
  gui.addColor(parameters, "baseColor"); // Add color picker to GUI
}

function draw() {
  // Clear the background
  background(250);

  // Get the minimum and maximum values for accountBalance and numTransactions
  let balanceMin = getMinValue("accountBalance");
  let balanceMax = getMaxValue("accountBalance");
  let transactionsMin = getMinValue("numTransactions");
  let transactionsMax = getMaxValue("numTransactions");
  let incomeMin = getMinValue("monthlyIncome");
  let incomeMax = getMaxValue("monthlyIncome");

  // Convert hex base color to RGB
  let baseRGB = hexToRGB(parameters.baseColor);

  // Loop through the dataset
  for (let i = 0; i < dataset.length; i++) {
    // Get the data values for each person
    let accountBalance = dataset[i].accountBalance;
    let numTransactions = dataset[i].numTransactions;
    let monthlyIncome = dataset[i].monthlyIncome;
    let married = dataset[i].married; // Boolean value

    // Map the account balance to the size of the shape
    let shapeSize = map(
      accountBalance,
      balanceMin,
      balanceMax,
      parameters.minShapeSize,
      parameters.maxShapeSize
    );

    // Map the number of transactions to the number of sides of the shape (polygon)
    let sides = map(numTransactions, transactionsMin, transactionsMax, 3, 10);
    sides = Math.floor(sides); // Ensure sides is an integer

    // Map the monthly income to the x-position
    let x = map(monthlyIncome, incomeMin, incomeMax, 100, SKETCHWIDTH - 100);

    // Position the shapes vertically
    let y = map(i, 0, dataset.length - 1, 100, SKETCHHEIGHT - 100);

    // Map monthly income to affect the color variation
    let colVariation = map(
      monthlyIncome,
      incomeMin,
      incomeMax,
      0,
      parameters.colorVariation
    );

    // Adjust the color using the variation and base RGB
    let finalR = baseRGB.r + colVariation;
    let finalG = baseRGB.g + colVariation / 2;
    let finalB = baseRGB.b - colVariation / 2;

    // Change stroke weight based on the 'married' boolean value
    if (married) {
      noFill();
      stroke(finalR, finalG, finalB);
      drawingContext.setLineDash([
        parameters.lineDashLength,
        parameters.lineDashJump,
      ]);
    } else {
      fill(finalR, finalG, finalB);
      noStroke();
    }

    // Draw the polygon with the calculated size and number of sides
    drawPolygon(x, y, shapeSize, sides);
  }
}

// Function to draw a regular polygon with 'npoints' sides
function drawPolygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// Helper function to convert hex to RGB
function hexToRGB(hex) {
  hex = hex.replace("#", "");
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
  return { r: r, g: g, b: b };
}
