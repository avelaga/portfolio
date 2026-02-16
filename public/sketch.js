let spacing = 30;
let margin = 30;
let t = 0;   // time offset for animation

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(255);
  fill(0);

  for (let y = margin; y <= height - margin; y += spacing) {
    for (let x = margin; x <= width - margin; x += spacing) {

      // Sample Perlin noise using x, y, and time
      let n = noise(x * 0.01, y * 0.01, t);

      // Map noise to dot size
      let dotSize = map(n, 0, 1, -1, 30);
      fill(0,0,0,50)
      circle(x, y+dotSize, dotSize/5);
    }
  }

  // Move through noise space slowly
  t += 0.005
}
