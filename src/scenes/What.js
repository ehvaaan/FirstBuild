class What extends Phaser.Scene { 
    constructor() {
        super("whatScene");
    }

    
    preload() {
    // load audio
    this.load.audio('intro', './assets/Intro.wav');
    // load images
    this.load.image('background', './assets/brain1.png')
    this.load.image('transmitter', './assets/transmitter.png');
    this.load.image('ion', './assets/Ion.png');
  
    }
    
    

    create() {
      
    this.music = this.sound.add('intro');
    this.music.setLoop(true);
    this.music.play();

    this.brain = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0, 0);

    
    var sprite = this.add.sprite(game.config.width/2, game.config.height/2, 'transmitter').setScale(0.5, 0.5);
    sprite.alpha = 0;
    this.tweens.add({
        targets: sprite,
        alpha: 1,
        duration: 2000,
        repeat: 1000
      }, this);

    var sprite1 = this.add.sprite(75, 400, 'transmitter').setScale(0.4, 0.4);
    sprite1.alpha = 0;
    this.tweens.add({
        targets: sprite1,
        alpha: 1,
        duration: 2000,
        repeat: 3000,
        delay: 1700
      }, this);

    var sprite2 = this.add.sprite(305, 370, 'transmitter').setScale(0.4, 0.4);
    sprite2.alpha = 0;
    this.tweens.add({
        targets: sprite2,
        alpha: 1,
        duration: 1500,
        repeat: 1000,
        delay: 5000
      }, this);

    
    var sprite3 = this.add.sprite(575, 70, 'transmitter').setScale(0.6, 0.6);
    sprite3.alpha = 0;
    this.tweens.add({
        targets: sprite3,
        alpha: 1,
        duration: 1700,
        repeat: 900,
        delay: 2700
      }, this);
    
    var sprite4 = this.add.sprite(575, 450, 'transmitter').setScale(0.5, 0.5);
    sprite4.alpha = 0;
    this.tweens.add({
        targets: sprite4,
        alpha: 1,
        duration: 2000,
        repeat: 1100,
        delay: 4500
      }, this);

    var sprite5 = this.add.sprite(275, 40, 'transmitter').setScale(0.4, 0.4);
    sprite5.alpha = 0;
    this.tweens.add({
        targets: sprite5,
        alpha: 1,
        duration: 1700,
        repeat: 900,
        delay: 700
      }, this);
    
      var sprite6 = this.add.sprite(75, 110, 'transmitter').setScale(0.7, 0.7);
      sprite6.alpha = 0;
      this.tweens.add({
          targets: sprite6,
          alpha: 1,
          duration: 1300,
          repeat: 1200,
          delay: 6600
        }, this);

        var ion = this.add.sprite(game.config.width/2, 440, 'ion');
        ion.alpha = 0;
        this.tweens.add({
          targets: ion,
          alpha: 1,
          duration: 1300,
          repeat: 1200,
          delay: 2200
        }, this);


    keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    let textConfig = {
        fontFamily: 'Montserrat Subrayada',
        fontSize: '28px',
        backgroundColor: '#000000',
        color: '#FFFFFF',
        align: 'right',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
    } 

    this.tutorial1 = this.add.text(360, 420, '⇦ YOU', textConfig).setOrigin(0, 0);
    this.tutorial1.alpha = 0;
    this.tweens.add({
        targets: this.tutorial1,
        alpha: 1,
        duration: 4000,
        //repeat: 1200,
        delay: 2500
      }, this);

    this.tutorial2 = this.add.text(135, 100, '⇦ SHOOT THE NEURONS TO CHARGE', textConfig).setOrigin(0, 0);
    this.tutorial2.alpha = 0;
      this.tweens.add({
          targets: this.tutorial2,
          alpha: 1,
          duration: 2000,
          //repeat: 1200,
          delay: 6800
        }, this);

    this.play = this.add.text(135, 275, 'PRESS [SPACE] TO CONTINUE', textConfig).setOrigin(0, 0);
    this.play.alpha = 0;
      this.tweens.add({
          targets: this.play,
          alpha: 1,
          duration: 2000,
          repeat: 1200,
          delay: 9000
        }, this);
    }

    update() {
        this.brain.tilePositionX -= 3;
        
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.music.stop();
            this.scene.start("playScene");
        
        }
        
    }

 
}

