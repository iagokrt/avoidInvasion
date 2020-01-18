class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    // Loading background environment images
    this.load.image(
      "space-background",
      "assets/gamebackground/parallax-space-background.png"
    );
    this.load.image(
      "space-big-planet",
      "assets/gamebackground/parallax-space-big-planet.png"
    );
    this.load.image(
      "space-far-planets",
      "assets/gamebackground/parallax-space-far-planets.png"
    );
    this.load.image(
      "space-ring-planet",
      "assets/gamebackground/parallax-space-ring-planet.png"
    );
    this.load.image(
      "space-stars",
      "assets/gamebackground/parallax-space-stars.png"
    );

    // Loading player ship
    this.load.spritesheet("player", "assets/ship.png", {
      frameWidth: 16,
      frameHeight: 24
    });

    // Loading enemy ships
    this.load.spritesheet("ship1", "assets/ships/enemy-small.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("ship2", "assets/ships/enemy-medium.png", {
      frameWidth: 32,
      frameHeight: 16
    });
    this.load.spritesheet("ship3", "assets/ships/enemy-big.png", {
      frameWidth: 32,
      frameHeight: 32
    });

    // Visual-effects
    // Loading explosion
    this.load.spritesheet("explosion", "assets/explosion.png", {
      frameWidth: 16,
      frameHeight: 16
    });

    // Loading shoots!!
    this.load.spritesheet("beam", "assets/beam.png", {
      frameWidth: 16,
      frameHeight: 16
    });
  }

  create() {
    this.add.text(20, 20, "Loading Game...");
    this.scene.start("playGame");

    // Animating spritesheets
    // Enemy ships
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
    // Explosion
    this.anims.create({
      key: "explode",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });

    // Player
    this.anims.create({
      key: "thrust",
      frames: this.anims.generateFrameNumbers("player", {
        start: 2,
        end: 2
      }),
      frameRate: 20,
      repeat: -1
    });
    // Shoots fired!!
    this.anims.create({
      key: "beam_anim",
      frames: this.anims.generateFrameNumbers("beam"),
      frameRate: 20,
      repeat: -1
    });
  }
}
