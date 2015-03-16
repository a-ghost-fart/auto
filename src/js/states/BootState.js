module.exports = {
    'preload': function bootStatePreLoad() {
        'use strict';
        this.game.load.spritesheet('button', 'assets/ui/button_sprite_sheet.png', 193, 71);
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
