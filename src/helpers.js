// Function to calculate and set the responsive canvas dimensions and scaling factor
let sketchHeight, sketchWidth; // Variables to store the calculated canvas dimensions

let ratio = 3112 / 4096; // Aspect ratio of the sketch (width/height)
let baseWidth = 1000;
let base = 0;

function setResponsiveSizing(scale = 1) {
  SKETCHHEIGHT = windowHeight * scale; // Set height based on window height and scale
  SKETCHWIDTH = SKETCHHEIGHT * ratio; // Calculate width based on aspect ratio
  BASE = SKETCHWIDTH / baseWidth; // Adjust base scaling factor
}

function getMinValue(property) {
  // Throw an error if no property string is provided
  if (!property || typeof property !== "string") {
    throw new Error("Please provide a valid property name.");
  }

  // Use map to extract values for the given property and Math.min to find the minimum
  return Math.min(...dataset.map((item) => item[property]));
}

function getMaxValue(property) {
  // Throw an error if no property string is provided
  if (!property || typeof property !== "string") {
    throw new Error("Please provide a valid property name.");
  }

  // Use map to extract values for the given property and Math.max to find the maximum
  return Math.max(...dataset.map((item) => item[property]));
}

function getAverageValue(property) {
  // Throw an error if no property string is provided
  if (!property || typeof property !== "string") {
    throw new Error("Please provide a valid property name.");
  }

  // Extract values for the given property and filter to ensure they are numbers
  const values = dataset
    .map((item) => item[property])
    .filter((value) => typeof value === "number");

  // Throw an error if no numeric values are found
  if (values.length === 0) {
    throw new Error(`No numeric values found for property "${property}".`);
  }

  // Calculate the total sum and return the average
  const total = values.reduce((sum, current) => sum + current, 0);

  return total / values.length; // Return the average
}

function getTrueFalse(property) {
  // Throw an error if no property string is provided
  if (!property || typeof property !== "string") {
    throw new Error("Please provide a valid property name.");
  }

  // Count how many entries have true and false values for the given property
  let trueCount = 0;
  let falseCount = 0;

  dataset.forEach((item) => {
    if (item[property] === true) {
      trueCount++;
    } else if (item[property] === false) {
      falseCount++;
    }
  });

  // Return an object with the counts for true and false
  return {
    true: trueCount,
    false: falseCount,
  };
}

function getUniqueValues(property) {
  // Throw an error if no property string is provided
  if (!property || typeof property !== "string") {
    throw new Error("Please provide a valid property name.");
  }

  // Use Set to collect unique values from the dataset
  const uniqueValues = [...new Set(dataset.map((item) => item[property]))];

  return uniqueValues;
}

function findByPropertyValue(property, value) {
  // Throw an error if no property string is provided
  if (!property || typeof property !== "string") {
    throw new Error("Please provide a valid property name.");
  }

  // Return all items where the property matches the given value
  return dataset.filter((item) => item[property] === value);
}

function getMedianValue(property) {
  // Throw an error if no property string is provided
  if (!property || typeof property !== "string") {
    throw new Error("Please provide a valid property name.");
  }

  // Filter to keep only numeric values, then sort the array
  const values = dataset
    .map((item) => item[property])
    .filter((value) => typeof value === "number")
    .sort((a, b) => a - b);

  if (values.length === 0) {
    throw new Error(`No numeric values found for property "${property}".`);
  }

  const middleIndex = Math.floor(values.length / 2);

  // If even, return the average of the two middle values, else return the middle value
  return values.length % 2 === 0
    ? (values[middleIndex - 1] + values[middleIndex]) / 2
    : values[middleIndex];
}

function getSumOfValues(property) {
  // Throw an error if no property string is provided
  if (!property || typeof property !== "string") {
    throw new Error("Please provide a valid property name.");
  }

  // Use reduce to sum the values for the given property
  return dataset.reduce((sum, item) => {
    return sum + (typeof item[property] === "number" ? item[property] : 0);
  }, 0);
}

// Get the minimal account balance
let minAccountBalance = getMinValue("accountBalance");

// Get the max age
let maxAge = getMaxValue("age");

// Get the sum of all transactions
let sumOfTransactions = getSumOfValues("numTransactions");

// Get the average account balance
let averageAccountBalance = getAverageValue("accountBalance");
