class Lose extends Phaser.Scene { 
    constructor() {
        super("loseScene");
    }

    
    preload() {
    // load audio
    //this.load.audio('', './assets/ .wav');
    // load images
    this.load.image('lose', './assets/losescreen.png')
  
    }
    
    

    create() {
    this.lose = this.add.image(game.config.width/2, game.config.height/2, 'lose');

    }

}
