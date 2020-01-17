class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    /*
    this.background = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "space-background"
    );
    this.background.setOrigin(0, 0);
      */
    this.backgroundStars = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "space-stars"
    );
    this.backgroundStars.setOrigin(0, 0);

    this.backgroundFarPlanets = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "space-far-planets"
    );
    this.backgroundFarPlanets.setOrigin(0, 0);
    this.backgroundFarPlanets.setScale(1);

    /*
    this.backgroundRingPlanet = this.add.image(
      config.width / 2,
      config.height / 7,
      "space-ring-planet"
    );
    this.backgroundRingPlanet.setOrigin(0, 2.3);
    this.backgroundRingPlanet.setScale(0.5);
    this.backgroundRingPlanet.setRotation(20.2);
    */

    // player ship
    // this.ship = this.add.image(config.width / 2, config.height / 1.5, "ship");

    // enemy ships
    this.ship1 = this.add.sprite(
      config.width / 2 - 50,
      config.height / 2,
      "ship1"
    );
    this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2");
    this.ship3 = this.add.sprite(
      config.width / 2 + 50,
      config.height / 2,
      "ship3"
    );

    // animating spritesheets
    // anims enemy ships
    this.anims.create({
      key: "ship1_anim",
      frames: this.anims.generateFrameNumbers("ship1"),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "ship2_anim",
      frames: this.anims.generateFrameNumbers("ship2"),
      frameRate: 18,
      repeat: -1
    });
    this.anims.create({
      key: "ship3_anim",
      frames: this.anims.generateFrameNumbers("ship3"),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "explode",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });

    this.ship1.play("ship1_anim");
    this.ship2.play("ship2_anim");
    this.ship3.play("ship3_anim");
  }

  moveShip(ship, speed) {
    ship.y += speed;
    if (ship.y > config.height) {
      this.resetShipPos(ship);
    }
  }

  resetShipPos(ship) {
    ship.y = 0;
    var randomX = Phaser.Math.Between(0, config.width);
    ship.x = randomX;
  }

  update() {
    //background parallax
    this.backgroundStars.tilePositionY -= 0.5;
    this.backgroundFarPlanets.tilePositionY += 0.1;
    this.backgroundFarPlanets.tilePositionX -= 0.4;

    //enemy ships flying forward
    this.moveShip(this.ship1, 0.7);
    this.moveShip(this.ship2, 0.5);
    this.moveShip(this.ship3, 0.3);
  }
}
