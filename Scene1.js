class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    //background environment images
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

    //player ship
    this.load.image("ship", "assets/ship.png");

    //enemy ships
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

    // visual-effects

    this.load.spritesheet("explosion", "assets/explosion.png", {
      frameWidth: 16,
      frameHeight: 16
    });
  }

  create() {
    this.add.text(20, 20, "Loading Game...");
    this.scene.start("playGame");
  }
}
