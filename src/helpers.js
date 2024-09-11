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
