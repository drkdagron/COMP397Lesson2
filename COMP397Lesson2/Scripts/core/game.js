/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />
/// <reference path="../objects/label.ts" />
var canvas;
var stage;
var helloLabel;
var goodbyeLabel;
function init() {
    console.log("Game Started...");
    canvas = document.getElementById("canvas"); //reference to index.html - canvas
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameLoop);
    main();
}
function gameLoop(event) {
    stage.update(); //undates stage every tick
}
function main() {
    helloLabel = new objects.Label("Hello World!", "60px Consolas", "#000000", 320, 240);
    stage.addChild(helloLabel);
    goodbyeLabel = new objects.Label("Goodbye World!", "40px Consolas", "#FF0000", 320, 340);
    stage.addChild(goodbyeLabel);
}
//# sourceMappingURL=game.js.map