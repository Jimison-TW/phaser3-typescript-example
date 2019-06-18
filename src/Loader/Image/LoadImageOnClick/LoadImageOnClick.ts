module LoadImageOnClick {

  class MainScene extends Phaser.Scene {
    constructor() {
      super('MainScene')
    }

    private preload() {
      this.load.image('buttonBG', '/assets/sprites/button-bg.png');
      this.load.image('buttonText', '/assets/sprites/button-text.png');
    }

    private create() {
      let bg = this.add.image(0, 0, 'buttonBG').setInteractive();
      let text = this.add.image(0, 0, 'buttonText');

      let container = this.add.container(400, 300, [bg, text]);

      bg.once('pointerup', this.loadImage, this);
    }

    private loadImage() {
      this.load.once('complete', this.addSprites, this);

      this.load.image('pic', '/assets/pics/turkey-1985086.jpg');
      this.load.image('titan', '/assets/pics/titan-mech.png');

      this.load.start();
    }

    private addSprites() {
      this.add.image(400, 300, 'pic');
      this.add.image(400, 300, 'titan');
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

LoadImageOnClick.start();