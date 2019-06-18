module LoadSpriteSheetFromObjectArray {

  class MainScene extends Phaser.Scene {
    constructor() {
      super('MainScene')
    }

    private preload() {
      this.load.setPath('/assets/sprites');

      //  An array of sprite sheets.
      //  The URLs are automatically created based on the path and key (see documentation for details)
      this.load.spritesheet([
        { key: 'explosion', frameConfig: { frameWidth: 64, frameHeight: 64, endFrame: 23 } },
        { key: 'balls', frameConfig: { frameWidth: 17, frameHeight: 17 } }
      ]);
    }

    private create() {
      let config: Phaser.Types.Animations.Animation = {
        key: 'explodeAnimation',
        frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 23, first: 23 }),
        frameRate: 20,
        repeat: -1
      }

      this.anims.create(config);

      this.add.sprite(400, 300, 'explosion').play('explodeAnimation');

      this.add.sprite(400, 300, 'balls', 3);
    }
  }

  let config: GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: new MainScene(),
  }

  export function start() {
    const game = new Phaser.Game(config);
  }
}

LoadSpriteSheetFromObjectArray.start();