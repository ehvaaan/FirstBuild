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
    this.cameras.main.fadeIn(2000, 0, 0, 0)
    
    this.lose = this.add.image(game.config.width/2, game.config.height/2, 'lose').setScale(0.7, 0.7);

    let scoreConfig = {
        fontFamily: 'Georgia',
        fontSize: '28px',
        backgroundColor: '#FFFFFF',
        color: '#000000',
        align: 'center',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
    }

    
        this.text1 = this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
        this.text1.alpha = 0;
        this.tweens.add({
            targets: this.text1,
            alpha: 1,
            duration: 1700,
            repeat: 900,
            delay: 4500
          }, this);
        this.text2 = this.add.text(game.config.width/2, game.config.height/2 + 64, '[SPACE] to Restart or (M) to return to the Menu', scoreConfig).setOrigin(0.5);
        this.text2.alpha = 0;
        this.tweens.add({
            targets: this.text2,
            alpha: 1,
            duration: 1700,
            repeat: 900,
            delay: 4500
          }, this);
        
    

    keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
    keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("playScene")
        }
        if(Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start("menuScene");
        }
    }

}
