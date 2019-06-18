import Game  = Phaser.Game;

module BasicSpineboy {

    export function start() {
        let config: GameConfig = {
            type: Phaser.WEBGL,
            parent: 'phaser-example',
            width: 800,
            height: 600,
            backgroundColor: '#cdcdcd',
            scene: {
                preload: preload,
                create: create,
                pack: {
                    files: [
                        { type: 'scenePlugin', key: 'SpineWebGLPlugin', url: '/build/Spine/BasicSpineboy/SpineWebGLPlugin.js', sceneKey: 'spine' }
                    ]
                }
            }
        };
        let game = new Game(config);
    }

    function preload() {
        this.load.image('logo', '/assets/sprites/phaser.png');

        this.load.setPath('/assets/animations/spine/');

        this.load.spine('boy', '/spineboy.json', 'spineboy.atlas');
    }

    function create() {
        this.add.image(0, 0, 'logo').setOrigin(0);

        this.add.spine(400, 600, 'boy', 'idle', true);  
    }

}

BasicSpineboy.start();