!function t(e,s,n){function a(o,r){if(!s[o]){if(!e[o]){var u="function"==typeof require&&require;if(!r&&u)return u(o,!0);if(i)return i(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var h=s[o]={exports:{}};e[o][0].call(h.exports,function(t){var s=e[o][1][t];return a(s?s:t)},h,h.exports,t,e,s,n)}return s[o].exports}for(var i="function"==typeof require&&require,o=0;o<n.length;o++)a(n[o]);return a}({1:[function(t){var e=t("./conf/Config");window.onload=function(){"use strict";document.title=e.TITLE+" v"+e.VERSION;var s=new Phaser.Game(e.WIDTH*e.SCALE.x,e.HEIGHT*e.SCALE.y,Phaser.AUTO,document.getElementById("viewport"),null,!1,!1);s.state.add("boot",t("./states/BootState")),s.state.add("menu",t("./states/MenuState")),s.state.add("pill",t("./states/PillState")),s.state.add("hair",t("./states/HairState")),s.state.start("boot")}},{"./conf/Config":2,"./states/BootState":3,"./states/HairState":4,"./states/MenuState":5,"./states/PillState":6}],2:[function(t,e){e.exports={WIDTH:120,HEIGHT:68,TITLE:"auto",VERSION:"dev",SCALE:new Phaser.Point(8,8)}},{}],3:[function(t,e){e.exports={preload:function(){"use strict";this.game.load.image("test-background","assets/menu/menu-background.png"),this.game.load.bitmapFont("test-font","assets/ui/font.png","assets/ui/font.xml")},create:function(){"use strict";this.game.stage.backgroundColor="#000",this.text=this.game.add.text(this.game.world.centerX,this.game.world.centerY,"Loading.",{font:"bold 60pt Arial",fill:"#fff",align:"center"}),this.text.anchor.set(.5)},update:function(){"use strict";100===this.game.load.progress&&(this.text.destroy(),this.game.state.start("menu"))}}},{}],4:[function(t,e){e.exports={create:function(){"use strict";this.shavedPercent=0,this.shavedThreshold=50,this.enterTime=(new Date).getTime(),this.timerMax=30,this.timer=0,this.timerRunning=!0,this.game.stage.backgroundColor="rgba(0, 0, 0)"},update:function(t){"use strict";this.shavedPercent>=this.shavedThreshold&&(this.timerRunning=!1,this.successState()),this.timerRunning&&(this.timer+=t.time.elapsed,this.timer>=1e3*this.timerMax&&(this.timerRunning=!1,this.failState()))},render:function(){"use strict";var t=Math.floor(255*Math.random()),e=Math.floor(255*Math.random()),s=Math.floor(255*Math.random());this.game.stage.backgroundColor="rgba("+t+", "+e+", "+s+")"},successState:function(){"use strict";console.log("success")},failState:function(){"use strict";console.log("fail")}}},{}],5:[function(t,e){var s=t("../conf/Config");e.exports={create:function(){"use strict";this.game.stage.backgroundColor="#000",this.background=this.game.add.image(0,0,"test-background"),this.background.scale=s.SCALE;var t=this;this.menu=this.game.add.group(),this.menuItems=[{label:"something",transition:"pill"},{label:"something else",transition:"hair"},{label:"uhhhhhh",transition:"uhh"}],this.menuOffset=10,this.menuItems.forEach(function(e,n){var a=t.game.add.bitmapText(10,t.menuOffset*n*s.SCALE.y,"test-font",e.label,12);a.scale=s.SCALE,a.stateTransition=e.transition,a.inputEnabled=!0,a.input.enabled=!0,a.input.useHandCursor=!0,t.menu.add(a)})},update:function(){"use strict";var t=this;this.menu.forEach(function(e){e.input.justPressed()&&t.game.state.start(e.stateTransition)})}}},{"../conf/Config":2}],6:[function(t,e){e.exports={create:function(){"use strict";console.log("pill state")}}},{}]},{},[1]);
//# sourceMappingURL=app.js.map