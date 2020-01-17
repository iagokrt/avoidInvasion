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
    this.load.image("ship1", "assets/ships/enemy-small.png");
    this.load.image("ship2", "assets/ships/enemy-medium.png");
    this.load.image("ship3", "assets/ships/enemy-big.png");
  }

  create() {
    this.add.text(20, 20, "Loading Game...");
    this.scene.start("playGame");
  }
}
