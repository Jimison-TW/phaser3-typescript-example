module LoadImageFromObject {

  class MainScene extends Phaser.Scene {
    constructor() {
      super('MainScene')
    }

    private preload() {
      this.load.image({
        key: 'taikodrummaster',
        url: '/assets/pics/taikodrummaster.jpg'
      });
    }

    private create() {
      this.add.image(400, 300, 'taikodrummaster');
    }
  }

  let config: GameConfig = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scale: {
      width: 800,
      height: 600,
    },
    scene: new MainScene(),
  }

  export function start() {
    const game = new Phaser.Game(config);
  }
}

LoadImageFromObject.start();