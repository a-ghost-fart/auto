module.exports = {
    'create': function hairStateCreate() {
        'use strict';
        this.shavedPercent = 0;
        this.shavedThreshold = 50;
        this.enterTime = Date.now();
        this.timer = 30;
        this.timerRunning = true;
    },

    'update': function hairStateUpdate() {
        'use strict';
        if (this.shavedPercent >= this.shavedThreshold) {
            this.timerRunning = false;
            this.successState();
        }
        if (this.timerRunning) {
            var diff = Math.floor((Date.now() - this.enterTime) / 1000);
            if (this.diff >= this.timer) {
                this.timerRunning = false;
                this.failState();
            }
        }
    },

    'successState': function hairStateSucceed() {
        'use strict';
        console.log('success');
    },

    'failState': function hairStateFail() {
        'use strict';
        console.log('fail');
    }
};
