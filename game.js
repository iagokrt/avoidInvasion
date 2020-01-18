var gameSettings = {
  playerSpeed: 200
};

var config = {
  width: 450,
  height: 162,
  backgroundColor: "000000  ",
  scene: [Scene1, Scene2],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  }
};

window.onload = function() {
  var game = new Phaser.Game(config);
};
