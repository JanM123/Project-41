class Umbrella {
  constructor(x, y) {
    var options = {
      isStatic: true,
    };

    this.body = Bodies.circle(x, y, 120, options);
    this.image = loadImage(
      "Images/walking_8.png",
      "Images/walking_7.png",
      "Images/walking_6.png",
      "Images/walking_5.png",
      "Images/walking_4.png",
      "Images/walking_3.png",
      "Images/walking_2.png",
      "Images/walking_1.png"
    );

    World.add(world, this.body);
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    fill("black");
    imageMode(CENTER);
    image(this.image, 0, 0, 250, 350);
    pop();
  }
}
