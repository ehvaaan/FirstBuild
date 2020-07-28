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
    this.load.image('charge', './assets/chargee.png');
    this.load.image('transmitter1', './assets/newtransmitter1.png');
    this.load.image('transmitter2', './assets/newtransmitter2.png');
    this.load.image('transmitter3', './assets/newtransmitter3.png');
    this.load.image('transmitter4', './assets/newtransmitter4.png');

  
    }
    
    

    create() {
    console.log('By gaining charge, you will eventually be able to activate the connection to the new neuron!');
    console.log('Press F if you want to learn!')

    this.cameras.main.fadeIn(2000, 0, 0, 0)

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

    var sprite1 = this.add.sprite(75, 400, 'transmitter1').setScale(0.4, 0.4);
    sprite1.alpha = 0;
    this.tweens.add({
        targets: sprite1,
        alpha: 1,
        duration: 2000,
        repeat: 3000,
        delay: 1700
      }, this);

    var sprite2 = this.add.sprite(305, 370, 'transmitter2').setScale(0.4, 0.4);
    sprite2.alpha = 0;
    this.tweens.add({
        targets: sprite2,
        alpha: 1,
        duration: 1500,
        repeat: 1000,
        delay: 5000
      }, this);

    
    var sprite3 = this.add.sprite(575, 70, 'transmitter3').setScale(0.6, 0.6);
    sprite3.alpha = 0;
    this.tweens.add({
        targets: sprite3,
        alpha: 1,
        duration: 1700,
        repeat: 900,
        delay: 2700
      }, this);
    
    var sprite4 = this.add.sprite(575, 450, 'transmitter4').setScale(0.5, 0.5);
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
    
      var sprite6 = this.add.sprite(75, 110, 'transmitter3').setScale(0.7, 0.7);
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
        delay: 2500
      }, this);

    this.tutorial2 = this.add.text(135, 100, '⇦ SHOOT THE NEURONS TO CHARGE', textConfig).setOrigin(0, 0);
    this.tutorial2.alpha = 0;
      this.tweens.add({
          targets: this.tutorial2,
          alpha: 1,
          duration: 2000,
          delay: 6800
        }, this);

  
    this.electricIcon = this.add.image(600, 54, 'charge');
    this.electricIcon.alpha = 0;
    this.tweens.add({
      targets: this.electricIcon,
      alpha: 0.3,
      duration: 1000,
      delay: 6800
    }, this);
    this.tweens.add({
      targets: this.electricIcon,
      alpha: 1,
      duration: 100,
      delay: 7800
    }, this);
    this.electricIcon1 = this.add.image(558, 54, 'charge');
    this.electricIcon1.alpha = 0;
    this.tweens.add({
      targets: this.electricIcon1,
      alpha: 0.3,
      duration: 1000,
      delay: 6800
    }, this);
    this.tweens.add({
      targets: this.electricIcon1,
      alpha: 1,
      duration: 100,
      delay: 7900
    }, this);
    this.electricIcon2 = this.add.image(516, 54, 'charge');
    this.electricIcon2.alpha = 0;
    this.tweens.add({
      targets: this.electricIcon2,
      alpha: 0.3,
      duration: 1000,
      delay: 6800
    }, this);
    this.tweens.add({
      targets: this.electricIcon2,
      alpha: 1,
      duration: 100,
      delay: 8000
    }, this);
    this.electricIcon3 = this.add.image(474, 54, 'charge');
    this.electricIcon3.alpha = 0;
    this.tweens.add({
      targets: this.electricIcon3,
      alpha: 0.3,
      duration: 1000,
      delay: 6800
    }, this);
    this.tweens.add({
      targets: this.electricIcon3,
      alpha: 1,
      duration: 100,
      delay: 8100
    }, this);
    this.electricIcon4 = this.add.image(432, 54, 'charge');
    this.electricIcon4.alpha = 0;
    this.tweens.add({
      targets: this.electricIcon4,
      alpha: 0.3,
      duration: 1000,
      delay: 6800
    }, this);
    this.tweens.add({
      targets: this.electricIcon4,
      alpha: 1,
      duration: 100,
      delay: 8300
    }, this);
    this.tutorial3 = this.add.text(380, 150, 'Watch for full charge!', textConfig).setOrigin(0, 0);
    this.tutorial3.alpha = 0;
      this.tweens.add({
          targets: this.tutorial3,
          alpha: 1,
          duration: 2000,
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
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        if (Phaser.Input.Keyboard.JustDown(keyF)) {
          console.log('The connection that is formed between these neurons through which the action potential transfers is called the synapse!');
          console.log('The neuron that transfers the charge is called the pre-synaptic neuron, and the one that receives it is called the post-synaptic neuron!');
      
  
        }
        
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.music.stop();
            this.scene.start("playScene");
        
        }
        
    }

 
}

