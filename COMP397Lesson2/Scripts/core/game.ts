﻿/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />

var canvas: HTMLElement;
var stage: createjs.Stage;

var helloLabel: createjs.Text;


function init(): void {
    console.log("Game Started...");
    canvas = document.getElementById("canvas"); //reference to index.html - canvas
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", update);

    main();
}

function update(event: createjs.Event): void {
    stage.update(); //undates stage every tick
}

function main(): void {
    helloLabel = new createjs.Text("Hello World!", "60px Consolas", "#000000");
    helloLabel.regX = helloLabel.getBounds().width * 0.5;
    helloLabel.regY = helloLabel.getBounds().height * 0.5;
    helloLabel.x = 320;
    helloLabel.y = 240;
    stage.addChild(helloLabel);
}