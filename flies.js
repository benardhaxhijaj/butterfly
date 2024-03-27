class Firefly {
  constructor() {
    this.light = color(247, 37, 133);
    this.dim = color(0);
    this.t = 0;
    this.x = width / 2;
    this.y = height / 2;
    this.a = map(sin(this.t), -1, 1, 0, 1);
    this.dF = random(1000);
    this.facing = map(noise(this.dF), 0, 1, -TAU, TAU);
    this.size = random(0.2, 0.5);
    this.speed = random(0.1, 0.3) * this.size * 4;
  }

  update() {
    this.t += this.speed * 0.02;
    this.a = map(sin(this.t), -1, 1, 0, 1);
    this.x += this.speed * 2 * cos(this.facing);
    this.y += this.speed * 2 * sin(this.facing);
    if (this.x > width + 50) {
      this.x = -50;
    } else if (this.x < -50) {
      this.x = width + 50;
    }
    if (this.y > height + 50) {
      this.y = -50;
    } else if (this.y < -50) {
      this.y = height + 50;
    }
    this.dF += 0.002;
    this.facing = map(noise(this.dF), 0, 1, -TAU, TAU);
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.facing);
    scale(this.size);

    // Rotate each element individually and introduce randomness
    stroke(1);
    strokeWeight(1);
    rotate(random(TWO_PI)); // Random rotation for the first line
    line(0, 0, 30 * cos(PI / 6), 30 * sin(PI / 6));

    rotate(random(TWO_PI)); // Random rotation for the second line
    line(0, 0, 30 * cos(-PI / 6), 30 * sin(-PI / 6));

    strokeWeight(5);
    rotate(random(TWO_PI)); // Random rotation for the first point
    point(30 * cos(PI / 6), 30 * sin(PI / 6));

    rotate(random(TWO_PI)); // Random rotation for the second point
    point(30 * cos(-PI / 6), 30 * sin(-PI / 6));

    noStroke();
    fill(255, 214, 10);
    rotate(random(TWO_PI)); // Random rotation for the ellipse
    ellipse(-5, 0, 40, 40);

    fill(this.light);
    rotate(random(TWO_PI)); // Random rotation for the first ellipse
    ellipse(-50, 0, 100, 50);

    fill(255);
    stroke(30);
    rotate(random(TWO_PI)); // Random rotation for the second ellipse
    ellipse(-50, 0, 100, 50);

    pop();
  }
}
