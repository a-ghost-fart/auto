!function t(e,s,i){function n(o,r){if(!s[o]){if(!e[o]){var u="function"==typeof require&&require;if(!r&&u)return u(o,!0);if(a)return a(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var h=s[o]={exports:{}};e[o][0].call(h.exports,function(t){var s=e[o][1][t];return n(s?s:t)},h,h.exports,t,e,s,i)}return s[o].exports}for(var a="function"==typeof require&&require,o=0;o<i.length;o++)n(i[o]);return n}({1:[function(t){var e=t("./conf/Config"),s=t("./states/BootState"),i=t("./states/MenuState"),n=t("./states/PillState"),a=t("./states/HairState");window.onload=function(){"use strict";document.title=e.TITLE;var t=new Phaser.Game(e.WIDTH,e.HEIGHT,Phaser.AUTO,document.getElementById("viewport"),null,!1,!1);t.state.add("boot",s),t.state.add("menu",i),t.state.add("pill",n),t.state.add("hair",a),t.state.start("boot")}},{"./conf/Config":2,"./states/BootState":3,"./states/HairState":4,"./states/MenuState":5,"./states/PillState":6}],2:[function(t,e){e.exports={WIDTH:960,HEIGHT:540,TITLE:"auto"}},{}],3:[function(t,e){e.exports={preload:function(){"use strict";this.game.load.spritesheet("button","assets/ui/button_sprite_sheet.png",193,71)},create:function(){"use strict";this.game.stage.backgroundColor="#000",this.text=this.game.add.text(this.game.world.centerX,this.game.world.centerY,"Loading.",{font:"bold 60pt Arial",fill:"#fff",align:"center"}),this.text.anchor.set(.5)},update:function(){"use strict";100===this.game.load.progress&&(this.text.destroy(),this.game.state.start("menu"))}}},{}],4:[function(t,e){e.exports={create:function(){"use strict";this.shavedPercent=0,this.shavedThreshold=50,this.enterTime=Date.now(),this.timer=30,this.timerRunning=!0},update:function(){"use strict";if(this.shavedPercent>=this.shavedThreshold&&(this.timerRunning=!1,this.successState()),this.timerRunning){{Math.floor((Date.now()-this.enterTime)/1e3)}this.diff>=this.timer&&(this.timerRunning=!1,this.failState())}},successState:function(){"use strict";console.log("success")},failState:function(){"use strict";console.log("fail")}}},{}],5:[function(t,e){e.exports={create:function(){"use strict";function t(){s.game.state.start("pill")}function e(){s.game.state.start("hair")}this.game.stage.backgroundColor="#000",this.button=this.game.add.button(this.game.world.centerX-95,400,"button",t,this,2,1,0),this.button=this.game.add.button(this.game.world.centerX-95,480,"button",e,this,2,1,0);var s=this}}},{}],6:[function(t,e){e.exports={create:function(){"use strict";console.log("pill state")}}},{}]},{},[1]);
//# sourceMappingURL=app.js.map