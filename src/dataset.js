let dataset = [
  {
    name: "Oliver",
    age: 28,
    married: "No",
    pets: "Yes",
    bank: "ING",
    accountBalance: 5327,
    numTransactions: 240,
    monthlyIncome: 4000,
  },
  {
    name: "Sophia",
    age: 34,
    married: "Yes",
    pets: "No",
    bank: "ABN Amro",
    accountBalance: 11210,
    numTransactions: 180,
    monthlyIncome: 6500,
  },
  {
    name: "Liam",
    age: 25,
    married: "No",
    pets: "Yes",
    bank: "ASN",
    accountBalance: 4567,
    numTransactions: 150,
    monthlyIncome: 3200,
  },
  {
    name: "Isabella",
    age: 29,
    married: "Yes",
    pets: "No",
    bank: "Rabobank",
    accountBalance: 8912,
    numTransactions: 300,
    monthlyIncome: 5200,
  },
  {
    name: "Ethan",
    age: 40,
    married: "Yes",
    pets: "Yes",
    bank: "ABN Amro",
    accountBalance: 2371,
    numTransactions: 120,
    monthlyIncome: 2800,
  },
  {
    name: "Mia",
    age: 31,
    married: "No",
    pets: "No",
    bank: "ING",
    accountBalance: 17492,
    numTransactions: 270,
    monthlyIncome: 5300,
  },
  {
    name: "James",
    age: 26,
    married: "No",
    pets: "Yes",
    bank: "ASN",
    accountBalance: 679,
    numTransactions: 75,
    monthlyIncome: 2100,
  },
  {
    name: "Ava",
    age: 33,
    married: "Yes",
    pets: "Yes",
    bank: "Rabobank",
    accountBalance: 15450,
    numTransactions: 220,
    monthlyIncome: 4800,
  },
  {
    name: "Henry",
    age: 37,
    married: "Yes",
    pets: "No",
    bank: "ABN Amro",
    accountBalance: 9234,
    numTransactions: 200,
    monthlyIncome: 4100,
  },
  {
    name: "Charlotte",
    age: 30,
    married: "No",
    pets: "Yes",
    bank: "ING",
    accountBalance: 20386,
    numTransactions: 350,
    monthlyIncome: 7500,
  },
  {
    name: "Noah",
    age: 27,
    married: "Yes",
    pets: "Yes",
    bank: "ASN",
    accountBalance: 6489,
    numTransactions: 100,
    monthlyIncome: 3400,
  },
  {
    name: "Amelia",
    age: 32,
    married: "No",
    pets: "No",
    bank: "ING",
    accountBalance: 18758,
    numTransactions: 180,
    monthlyIncome: 4900,
  },
  {
    name: "Benjamin",
    age: 29,
    married: "Yes",
    pets: "Yes",
    bank: "Rabobank",
    accountBalance: 1041,
    numTransactions: 90,
    monthlyIncome: 2800,
  },
  {
    name: "Harper",
    age: 35,
    married: "Yes",
    pets: "No",
    bank: "ABN Amro",
    accountBalance: 9321,
    numTransactions: 310,
    monthlyIncome: 6800,
  },
  {
    name: "Lucas",
    age: 24,
    married: "No",
    pets: "Yes",
    bank: "ING",
    accountBalance: 787,
    numTransactions: 40,
    monthlyIncome: 2500,
  },
  {
    name: "Evelyn",
    age: 31,
    married: "Yes",
    pets: "No",
    bank: "Rabobank",
    accountBalance: 15678,
    numTransactions: 210,
    monthlyIncome: 5400,
  },
  {
    name: "Mason",
    age: 38,
    married: "Yes",
    pets: "Yes",
    bank: "ABN Amro",
    accountBalance: 20934,
    numTransactions: 330,
    monthlyIncome: 8000,
  },
  {
    name: "Luna",
    age: 30,
    married: "No",
    pets: "Yes",
    bank: "ASN",
    accountBalance: 14439,
    numTransactions: 190,
    monthlyIncome: 4600,
  },
  {
    name: "Elijah",
    age: 26,
    married: "Yes",
    pets: "No",
    bank: "Rabobank",
    accountBalance: 9523,
    numTransactions: 125,
    monthlyIncome: 3500,
  },
  {
    name: "Ella",
    age: 33,
    married: "No",
    pets: "Yes",
    bank: "ING",
    accountBalance: 13078,
    numTransactions: 400,
    monthlyIncome: 7200,
  },
  {
    name: "Sebastian",
    age: 39,
    married: "Yes",
    pets: "No",
    bank: "ABN Amro",
    accountBalance: 8241,
    numTransactions: 160,
    monthlyIncome: 6000,
  },
  {
    name: "Scarlett",
    age: 28,
    married: "No",
    pets: "Yes",
    bank: "ASN",
    accountBalance: 9290,
    numTransactions: 145,
    monthlyIncome: 3200,
  },
  {
    name: "Aiden",
    age: 24,
    married: "No",
    pets: "No",
    bank: "Rabobank",
    accountBalance: 4571,
    numTransactions: 110,
    monthlyIncome: 2900,
  },
  {
    name: "Victoria",
    age: 40,
    married: "Yes",
    pets: "No",
    bank: "ING",
    accountBalance: 22148,
    numTransactions: 460,
    monthlyIncome: 9200,
  },
  {
    name: "Daniel",
    age: 36,
    married: "Yes",
    pets: "Yes",
    bank: "ABN Amro",
    accountBalance: 10395,
    numTransactions: 350,
    monthlyIncome: 8200,
  },
  {
    name: "Zoe",
    age: 30,
    married: "No",
    pets: "Yes",
    bank: "ASN",
    accountBalance: 672,
    numTransactions: 70,
    monthlyIncome: 2300,
  },
  {
    name: "Matthew",
    age: 27,
    married: "Yes",
    pets: "No",
    bank: "Rabobank",
    accountBalance: 14356,
    numTransactions: 200,
    monthlyIncome: 4300,
  },
  {
    name: "Layla",
    age: 32,
    married: "Yes",
    pets: "No",
    bank: "ING",
    accountBalance: 15534,
    numTransactions: 190,
    monthlyIncome: 5600,
  },
  {
    name: "Michael",
    age: 29,
    married: "No",
    pets: "Yes",
    bank: "ASN",
    accountBalance: 17782,
    numTransactions: 370,
    monthlyIncome: 8000,
  },
  {
    name: "Lily",
    age: 34,
    married: "Yes",
    pets: "No",
    bank: "Rabobank",
    accountBalance: 20967,
    numTransactions: 500,
    monthlyIncome: 9200,
  },
  {
    name: "Samuel",
    age: 27,
    married: "No",
    pets: "Yes",
    bank: "ABN Amro",
    accountBalance: 10124,
    numTransactions: 230,
    monthlyIncome: 6200,
  },
  {
    name: "Penelope",
    age: 36,
    married: "Yes",
    pets: "No",
    bank: "ING",
    accountBalance: 9283,
    numTransactions: 180,
    monthlyIncome: 5000,
  },
  {
    name: "David",
    age: 31,
    married: "Yes",
    pets: "Yes",
    bank: "ASN",
    accountBalance: 8117,
    numTransactions: 160,
    monthlyIncome: 3900,
  },
  {
    name: "Camila",
    age: 25,
    married: "No",
    pets: "Yes",
    bank: "Rabobank",
    accountBalance: 16875,
    numTransactions: 210,
    monthlyIncome: 4700,
  },
  {
    name: "Carter",
    age: 29,
    married: "No",
    pets: "No",
    bank: "ING",
    accountBalance: 6679,
    numTransactions: 130,
    monthlyIncome: 3800,
  },
  {
    name: "Sofia",
    age: 30,
    married: "Yes",
    pets: "No",
    bank: "ABN Amro",
    accountBalance: 13789,
    numTransactions: 330,
    monthlyIncome: 8500,
  },
  {
    name: "Wyatt",
    age: 28,
    married: "No",
    pets: "Yes",
    bank: "ASN",
    accountBalance: 7453,
    numTransactions: 120,
    monthlyIncome: 4200,
  },
  {
    name: "Hannah",
    age: 35,
    married: "Yes",
    pets: "No",
    bank: "Rabobank",
    accountBalance: 18998,
    numTransactions: 480,
    monthlyIncome: 8900,
  },
  {
    name: "Ella",
    age: 26,
    married: "No",
    pets: "Yes",
    bank: "Rabobank",
    accountBalance: 12047,
    numTransactions: 180,
    monthlyIncome: 5200,
  },
  {
    name: "Liam",
    age: 27,
    married: "Yes",
    pets: "No",
    bank: "ABN Amro",
    accountBalance: 9273,
    numTransactions: 175,
    monthlyIncome: 4700,
  },
  {
    name: "Mia",
    age: 32,
    married: "No",
    pets: "Yes",
    bank: "ING",
    accountBalance: 10134,
    numTransactions: 300,
    monthlyIncome: 6500,
  },
  {
    name: "Harper",
    age: 40,
    married: "Yes",
    pets: "No",
    bank: "ASN",
    accountBalance: 8923,
    numTransactions: 270,
    monthlyIncome: 7000,
  },
  {
    name: "Elijah",
    age: 23,
    married: "No",
    pets: "Yes",
    bank: "Rabobank",
    accountBalance: 4523,
    numTransactions: 90,
    monthlyIncome: 3400,
  },
  {
    name: "Oliver",
    age: 35,
    married: "Yes",
    pets: "Yes",
    bank: "ING",
    accountBalance: 16213,
    numTransactions: 270,
    monthlyIncome: 5000,
  },
  {
    name: "Sophia",
    age: 28,
    married: "Yes",
    pets: "No",
    bank: "ABN Amro",
    accountBalance: 5689,
    numTransactions: 220,
    monthlyIncome: 3600,
  },
  {
    name: "Henry",
    age: 36,
    married: "No",
    pets: "Yes",
    bank: "ASN",
    accountBalance: 2312,
    numTransactions: 80,
    monthlyIncome: 2200,
  },
  {
    name: "Victoria",
    age: 31,
    married: "Yes",
    pets: "No",
    bank: "Rabobank",
    accountBalance: 11542,
    numTransactions: 380,
    monthlyIncome: 7600,
  },
  {
    name: "Matthew",
    age: 40,
    married: "Yes",
    pets: "Yes",
    bank: "ING",
    accountBalance: 7591,
    numTransactions: 150,
    monthlyIncome: 4600,
  },
  {
    name: "Ethan",
    age: 30,
    married: "No",
    pets: "Yes",
    bank: "ABN Amro",
    accountBalance: 3526,
    numTransactions: 90,
    monthlyIncome: 3400,
  },
  {
    name: "Zoe",
    age: 28,
    married: "Yes",
    pets: "Yes",
    bank: "ASN",
    accountBalance: 11284,
    numTransactions: 200,
    monthlyIncome: 5400,
  },
  {
    name: "Amelia",
    age: 29,
    married: "No",
    pets: "No",
    bank: "Rabobank",
    accountBalance: 2834,
    numTransactions: 100,
    monthlyIncome: 2900,
  },
  {
    name: "Benjamin",
    age: 32,
    married: "Yes",
    pets: "Yes",
    bank: "ING",
    accountBalance: 19001,
    numTransactions: 260,
    monthlyIncome: 5200,
  },
  {
    name: "Mason",
    age: 27,
    married: "No",
    pets: "No",
    bank: "ABN Amro",
    accountBalance: 2789,
    numTransactions: 70,
    monthlyIncome: 2300,
  },
  {
    name: "Charlotte",
    age: 31,
    married: "Yes",
    pets: "Yes",
    bank: "ASN",
    accountBalance: 20981,
    numTransactions: 180,
    monthlyIncome: 4600,
  },
  {
    name: "Luna",
    age: 35,
    married: "Yes",
    pets: "No",
    bank: "Rabobank",
    accountBalance: 17234,
    numTransactions: 250,
    monthlyIncome: 5900,
  },
  {
    name: "James",
    age: 29,
    married: "No",
    pets: "Yes",
    bank: "ING",
    accountBalance: 13490,
    numTransactions: 140,
    monthlyIncome: 3800,
  },
  {
    name: "Ava",
    age: 32,
    married: "Yes",
    pets: "Yes",
    bank: "ABN Amro",
    accountBalance: 19173,
    numTransactions: 400,
    monthlyIncome: 9200,
  },
  {
    name: "David",
    age: 28,
    married: "No",
    pets: "Yes",
    bank: "ASN",
    accountBalance: 5321,
    numTransactions: 120,
    monthlyIncome: 3200,
  },
  {
    name: "Lily",
    age: 30,
    married: "No",
    pets: "No",
    bank: "Rabobank",
    accountBalance: 9645,
    numTransactions: 180,
    monthlyIncome: 4300,
  },
  {
    name: "Sebastian",
    age: 33,
    married: "Yes",
    pets: "Yes",
    bank: "ING",
    accountBalance: 8613,
    numTransactions: 150,
    monthlyIncome: 4000,
  },
  {
    name: "Daniel",
    age: 36,
    married: "Yes",
    pets: "No",
    bank: "ABN Amro",
    accountBalance: 9325,
    numTransactions: 340,
    monthlyIncome: 7100,
  },
  {
    name: "Harper",
    age: 27,
    married: "No",
    pets: "No",
    bank: "ASN",
    accountBalance: 4576,
    numTransactions: 90,
    monthlyIncome: 2700,
  },
  {
    name: "Lucas",
    age: 31,
    married: "Yes",
    pets: "Yes",
    bank: "Rabobank",
    accountBalance: 7812,
    numTransactions: 140,
    monthlyIncome: 3600,
  },
  {
    name: "Zoe",
    age: 25,
    married: "No",
    pets: "No",
    bank: "ING",
    accountBalance: 12543,
    numTransactions: 220,
    monthlyIncome: 3900,
  },
  {
    name: "Elijah",
    age: 28,
    married: "Yes",
    pets: "Yes",
    bank: "ABN Amro",
    accountBalance: 18452,
    numTransactions: 420,
    monthlyIncome: 8900,
  },
  {
    name: "Sophia",
    age: 29,
    married: "Yes",
    pets: "No",
    bank: "ASN",
    accountBalance: 17590,
    numTransactions: 260,
    monthlyIncome: 5100,
  },
  {
    name: "Evelyn",
    age: 30,
    married: "Yes",
    pets: "Yes",
    bank: "Rabobank",
    accountBalance: 5431,
    numTransactions: 110,
    monthlyIncome: 3100,
  },
  {
    name: "George",
    age: 56,
    married: "Yes",
    pets: "No",
    bank: "ING",
    accountBalance: 9,
    numTransactions: 50,
    monthlyIncome: 1400,
  },
  {
    name: "Julian",
    age: 65,
    married: "No",
    pets: "Yes",
    bank: "Rabobank",
    accountBalance: 11273,
    numTransactions: 270,
    monthlyIncome: 6400,
  },
  {
    name: "Harvey",
    age: 50,
    married: "Yes",
    pets: "Yes",
    bank: "ABN Amro",
    accountBalance: 36543,
    numTransactions: 130,
    monthlyIncome: 3200,
  },
  {
    name: "Naomi",
    age: 45,
    married: "Yes",
    pets: "No",
    bank: "ASN",
    accountBalance: 12178,
    numTransactions: 160,
    monthlyIncome: 4500,
  },
  {
    name: "Grace",
    age: 75,
    married: "No",
    pets: "Yes",
    bank: "ING",
    accountBalance: 32049,
    numTransactions: 190,
    monthlyIncome: 2900,
  },
  {
    name: "Alice",
    age: 48,
    married: "Yes",
    pets: "Yes",
    bank: "Rabobank",
    accountBalance: 55342,
    numTransactions: 210,
    monthlyIncome: 5000,
  },
  {
    name: "Owen",
    age: 29,
    married: "No",
    pets: "No",
    bank: "ING",
    accountBalance: 7531,
    numTransactions: 150,
    monthlyIncome: 3300,
  },
  {
    name: "Holly",
    age: 30,
    married: "Yes",
    pets: "No",
    bank: "ASN",
    accountBalance: 9287,
    numTransactions: 120,
    monthlyIncome: 3600,
  },
  {
    name: "Elliot",
    age: 42,
    married: "No",
    pets: "Yes",
    bank: "Rabobank",
    accountBalance: 17289,
    numTransactions: 250,
    monthlyIncome: 3900,
  },
  {
    name: "Levi",
    age: 55,
    married: "Yes",
    pets: "No",
    bank: "ABN Amro",
    accountBalance: 32021,
    numTransactions: 190,
    monthlyIncome: 5600,
  },
  {
    name: "Rose",
    age: 62,
    married: "No",
    pets: "Yes",
    bank: "ING",
    accountBalance: 15986,
    numTransactions: 320,
    monthlyIncome: 7400,
  },
  {
    name: "Nora",
    age: 36,
    married: "Yes",
    pets: "No",
    bank: "ASN",
    accountBalance: 12431,
    numTransactions: 230,
    monthlyIncome: 4200,
  },
  {
    name: "Theo",
    age: 45,
    married: "Yes",
    pets: "Yes",
    bank: "Rabobank",
    accountBalance: 7600,
    numTransactions: 190,
    monthlyIncome: 3500,
  },
  {
    name: "Jasper",
    age: 28,
    married: "No",
    pets: "No",
    bank: "ABN Amro",
    accountBalance: 14532,
    numTransactions: 150,
    monthlyIncome: 3400,
  },
  {
    name: "Emma",
    age: 31,
    married: "No",
    pets: "Yes",
    bank: "ING",
    accountBalance: 45278,
    numTransactions: 290,
    monthlyIncome: 5000,
  },
  {
    name: "Mila",
    age: 26,
    married: "Yes",
    pets: "Yes",
    bank: "ASN",
    accountBalance: 9823,
    numTransactions: 110,
    monthlyIncome: 3000,
  },
  {
    name: "Ezra",
    age: 24,
    married: "No",
    pets: "Yes",
    bank: "Rabobank",
    accountBalance: 20456,
    numTransactions: 210,
    monthlyIncome: 3900,
  },
  {
    name: "Clara",
    age: 33,
    married: "Yes",
    pets: "No",
    bank: "ING",
    accountBalance: 6500,
    numTransactions: 130,
    monthlyIncome: 4600,
  },
  {
    name: "Oscar",
    age: 29,
    married: "Yes",
    pets: "No",
    bank: "ABN Amro",
    accountBalance: 17565,
    numTransactions: 175,
    monthlyIncome: 4700,
  },
  {
    name: "Freya",
    age: 34,
    married: "Yes",
    pets: "Yes",
    bank: "Rabobank",
    accountBalance: 19821,
    numTransactions: 200,
    monthlyIncome: 5800,
  },
  {
    name: "Eli",
    age: 40,
    married: "No",
    pets: "No",
    bank: "ASN",
    accountBalance: 8300,
    numTransactions: 90,
    monthlyIncome: 2800,
  },
  {
    name: "Sophie",
    age: 30,
    married: "Yes",
    pets: "Yes",
    bank: "ING",
    accountBalance: 12745,
    numTransactions: 240,
    monthlyIncome: 4000,
  },
  {
    name: "Iris",
    age: 25,
    married: "No",
    pets: "No",
    bank: "ABN Amro",
    accountBalance: 15430,
    numTransactions: 150,
    monthlyIncome: 3100,
  },
  {
    name: "Leah",
    age: 35,
    married: "Yes",
    pets: "Yes",
    bank: "Rabobank",
    accountBalance: 32567,
    numTransactions: 280,
    monthlyIncome: 6500,
  },
  {
    name: "Caleb",
    age: 29,
    married: "No",
    pets: "Yes",
    bank: "ASN",
    accountBalance: 18432,
    numTransactions: 190,
    monthlyIncome: 3500,
  },
  {
    name: "Nina",
    age: 32,
    married: "No",
    pets: "Yes",
    bank: "ING",
    accountBalance: 7231,
    numTransactions: 140,
    monthlyIncome: 3700,
  },
  {
    name: "Alex",
    age: 38,
    married: "Yes",
    pets: "No",
    bank: "ABN Amro",
    accountBalance: 40210,
    numTransactions: 250,
    monthlyIncome: 6900,
  },
  {
    name: "Hazel",
    age: 37,
    married: "Yes",
    pets: "Yes",
    bank: "Rabobank",
    accountBalance: 28904,
    numTransactions: 310,
    monthlyIncome: 6000,
  },
  {
    name: "Charlie",
    age: 27,
    married: "No",
    pets: "No",
    bank: "ASN",
    accountBalance: 14567,
    numTransactions: 160,
    monthlyIncome: 3800,
  },
  {
    name: "Ariana",
    age: 31,
    married: "Yes",
    pets: "No",
    bank: "ING",
    accountBalance: 9723,
    numTransactions: 170,
    monthlyIncome: 4100,
  },
  {
    name: "Leo",
    age: 39,
    married: "Yes",
    pets: "No",
    bank: "ABN Amro",
    accountBalance: 6234,
    numTransactions: 120,
    monthlyIncome: 2900,
  },
  {
    name: "Maya",
    age: 29,
    married: "Yes",
    pets: "Yes",
    bank: "Rabobank",
    accountBalance: 38765,
    numTransactions: 350,
    monthlyIncome: 7000,
  },
  {
    name: "Finn",
    age: 43,
    married: "No",
    pets: "Yes",
    bank: "ASN",
    accountBalance: 29387,
    numTransactions: 260,
    monthlyIncome: 5200,
  },
];

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
