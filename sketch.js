let fireflies = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 50; i++) {
    fireflies.push(new Firefly());
  }
}

function draw() {
  background(20, 33, 61);
  fireflies.forEach((firefly) => {
    firefly.update();
    firefly.display();
  });
}
