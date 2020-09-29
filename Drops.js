class Drops {
  constructor(x, y) {
    var options = {
      isStatic: false,
      density: 2,
      friction: 0.2,
      restitution: 0.3,
    };

    this.body = Bodies.circle(x, y, 2.5, options);
    this.radius = 2.5;

    World.add(world, this.body);
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    ellipseMode(RADIUS);
    fill("darkBlue");
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }

  update() {
    if (this.body.position.y > 700) {
      Matter.Body.setPosition(this.body, {
        x: random(0, 400),
        y: random(0, 400),
      });
    }
  }
}
