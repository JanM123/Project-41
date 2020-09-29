const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var boy, boyWalking;

var thunder_one, thunder_two, thunder_three;

var drops, umbrella;

var dropsArray = [];

function preload() {
  thunder_one = loadImage("Images/1.png");
  thunder_two = loadImage("Images/2.png");
  thunder_three = loadImage("Images/3.png");
  thunder_four = loadImage("Images/4.png");
}

function setup() {
  canvas = createCanvas(500, 700);

  engine = Engine.create();
  world = engine.world;

  umbrella = new Umbrella(250, 520);

  maxDrops = 100;

  for (var i = 0; i < maxDrops; i++) {
    dropsArray.push(new Drops(random(0, 500), random(0, 500)));
  }
}

function draw() {
  Engine.update(engine);

  background(0, 0, 0);

  umbrella.display();

  for (var j = 0; j < maxDrops; j++) {
    dropsArray[j].display();
  }

  for (var j = 0; j < maxDrops; j++) {
    dropsArray[j].update();
  }

  if (frameCount % 100 === 0) {
    var rand = Math.round(random(1, 5));
    switch (rand) {
      case 1:
        image(thunder_one, random(50, 450), 0, 150, 200);
        break;
      case 2:
        image(thunder_two, random(50, 450), 0, 150, 200);
        break;
      case 3:
        image(thunder_three, random(50, 450), 0, 150, 200);
        break;
      case 4:
        image(thunder_four, random(50, 450), 0, 150, 200);
        break;
    }
  }

  drawSprites();
}
