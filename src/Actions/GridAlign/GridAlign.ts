import "phaser";
import GameObject = Phaser.GameObjects.GameObject;

const config: GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  parent: 'phaser-example',
};

class GridAlign extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene'
    });
  }

  private preload(): void {
    this.load.spritesheet('diamonds', 'assets/sprites/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });
  }

  private create(): void {
    let diamonds: GameObject = new GameObject(this, 'sprite');
    this.add.group()
  }
}

window.onload = () => { let game = new GridAlign(config); }
