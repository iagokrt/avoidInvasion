class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    // create parallax background
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

    this.ship1.play("ship1_anim");
    this.ship2.play("ship2_anim");
    this.ship3.play("ship3_anim");

    this.ship1.setInteractive();
    this.ship2.setInteractive();
    this.ship3.setInteractive();

    // player ship
    this.player = this.physics.add.sprite(
      config.width / 2 - 8,
      config.height - 64,
      "player"
    );
    this.player.play("thrust");
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);

    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.projectiles = this.add.group();
  }

  update() {
    // Background parallax 'Moviment'
    this.backgroundStars.tilePositionY -= 0.5;
    this.backgroundFarPlanets.tilePositionY += 0.1;
    this.backgroundFarPlanets.tilePositionX -= 0.4;

    // Enemy ships flying forward
    this.moveShip(this.ship1, 0.7);
    this.moveShip(this.ship2, 0.5);
    this.moveShip(this.ship3, 0.3);

    this.movePlayerManager();

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      this.shootBeam();
    }
    for (var i = 0; i < this.projectiles.getChildren().length; i++) {
      var beam = this.projectiles.getChildren()[i];
      beam.update();
    }
  }

  //shoots
  shootBeam() {
    var beam = new Beam(this);
  }

  // Player mechanics
  movePlayerManager() {
    // stop movement on keyUp
    this.player.setVelocity(0);

    // arrowKeys
    if (this.cursorKeys.left.isDown) {
      this.player.setVelocityX(-gameSettings.playerSpeed);
      this.player.play("thrust");
    } else if (this.cursorKeys.right.isDown) {
      this.player.setVelocityX(+gameSettings.playerSpeed);
      this.player.play("thrust");
    }
    if (this.cursorKeys.up.isDown) {
      this.player.setVelocityY(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.down.isDown) {
      this.player.setVelocityY(+gameSettings.playerSpeed);
    }
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
}
