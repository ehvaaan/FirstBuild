// create game configuration object// 
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Trip, What, Play, Win, Lose ],
    physics:{
        default:'arcade',
        arcade: {
            gravity: {
                //debug:true
                x: 0,
                y: 1000
            },
            checkCollision: {
                up: true,
                down: true
            },
            width: 640,
            height: 480,
    }
},
};

// create main game object//
let game = new Phaser.Game(config);
// define game settings
game.settings = {
    spaceshipSpeed: 3, 
    spaceshipSpeed0: 0,
    //spaceshipSpeed2: spaceshipSpeed*2,
    gameTimer: 60000
}
// reserve some keyboard
let keySPACE, keyQ, keyM, keyF, keyLEFT, keyRIGHT;

let highScore;
let level;
let newHighScore = false;


// console.log("Hello whirled!");//