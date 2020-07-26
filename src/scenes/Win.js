class Win extends Phaser.Scene { 
    constructor() {
        super("winScene");
    }

    
    preload() {
    // load audio
    //this.load.audio('', './assets/ .wav');
    // load images
    this.load.image('win', './assets/winscreen.png')
  
    }
    
    

    create() {
    this.win = this.add.image(game.config.width/2, game.config.height/2, 'win');
    }

}