module.exports = {
    'preload': function bootStatePreLoad() {
        'use strict';
        this.game.load.image('test-background', 'assets/menu/menu-background.png');

        this.game.load.image('hair-background', 'assets/hair/hair-background.png');
        this.game.load.image('hair-tileset', 'assets/hair/hair-tileset.png');
        this.game.load.tilemap('hair-tilemap', 'assets/hair/hair-tilemap.json', null, Phaser.Tilemap.TILED_JSON);

        this.game.load.bitmapFont('test-font', 'assets/ui/font.png', 'assets/ui/font.xml');
    },
    'create': function bootStateCreate() {
        'use strict';
        this.game.stage.backgroundColor = '#000';
        this.text = this.game.add.text(
            this.game.world.centerX,
            this.game.world.centerY,
            'Loading.',
            {
                'font': 'bold 60pt Arial',
                'fill': '#fff',
                'align': 'center'
            }
        );
        this.text.anchor.set(0.5);
    },
    'update': function bootStateUpdate() {
        'use strict';
        if (this.game.load.progress === 100) {
            this.text.destroy();
            this.game.state.start('menu');
        }
    }
};
