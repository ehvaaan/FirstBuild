class Menu extends Phaser.Scene { 
    constructor() {
        super("menuScene");
    }
    
    preload() {
    // load audio
    this.load.audio('sfx_select', './assets/blip_select12.wav');
    this.load.audio('charged', './assets/charged.wav' );
    this.load.audio('charge2', './assets/charge2.wav' );
    this.load.audio('target2', './assets/target2.wav' );
    this.load.audio('target4', './assets/target3.wav' );
    this.load.audio('Particle Shot', './assets/Particle Shot.wav');
    this.load.image('transmitter', './assets/original.png');
    this.load.image('transmitter1', './assets/newtransmitter1.png');
    this.load.image('transmitter2', './assets/newtransmitter2.png');
    this.load.image('transmitter3', './assets/newtransmitter3.png');
    this.load.image('transmitter4', './assets/newtransmitter4.png');

    //this.load.audio('background', './assets/background.wav')
}
    
    

    create() {
    /*var music = this.sound.add('background');
    music.setLoop(true);
    music.play();*/
    //this.synth = this.sound.play('background');

    // menu display
    if(window.localStorage) {
        console.log('Local storage supported');
    } else {
        console.log('Local storage not supported');
    }

    let menuConfig = {
        fontFamily: 'Montserrat Subrayada',
        fontSize: '26px',
        backgroundColor: '#FF7575',
        color: '#FFFFFF',
        align: 'right',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
    }
    // menu text 
    let centerX = game.config.width/2;
    let centerY = game.config.height/2;
    let textSpacer = 64;

    // white backings
    this.add.rectangle(178, 80, 281, 65, 0xFFFFFF).setOrigin(0, 0);
    this.add.rectangle(165, 400, 310, 65, 0xFFFFFF).setOrigin(0, 0);
    this.add.rectangle(55, 207, 530, 65, 0xFFFFFF).setOrigin(0, 0);
    //this.add.rectangle(603, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
    //menuConfig.backgroundColor = '#00FF00';
    //menuConfig.color = '#000';
    this.add.text(centerX, centerY - textSpacer*2, 'NEURO SIMULATOR', menuConfig).setOrigin(0.5);
    //menuConfig.backgroundColor = '#F3B141';
    //menuConfig.color = '#000';
    this.add.text(centerX, centerY, 'Use the ⇦ ⇨ arrows to move + [SPACE] to fire', menuConfig).setOrigin(0.5);
    //menuConfig.backgroundColor = '#93C47D';
    //menuConfig.color = '#000';
    /* this.add.text(centerX, centerY + textSpacer, 'Press ← for Easy', menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = '#E06666';
    menuConfig.color = '#000';
    this.add.text(centerX, centerY + textSpacer*2, 'Press → for Hard', menuConfig).setOrigin(0.5);
    */
    //menuConfig.backgroundColor = '#F3B141';
    //menuConfig.color = '#000';
    this.add.text(centerX, centerY + textSpacer*3, 'Press [SPACE] to continue', menuConfig).setOrigin(0.5);
    
    
    this.icon = this.add.image(57, 54, 'transmitter', menuConfig).setScale(1, 1);
    this.icon = this.add.image(400, 194, 'transmitter4', menuConfig).setScale(0.4, 0.4);
    this.icon = this.add.image(529, 359, 'transmitter2', menuConfig).setScale(0.5, 0.5);
    this.icon = this.add.image(640, 154, 'transmitter', menuConfig).setScale(0.6, 0.6);
    this.icon = this.add.image(150, 304, 'transmitter3', menuConfig).setScale(0.3, 0.3);
    this.icon = this.add.image(65, 440, 'transmitter2', menuConfig).setScale(0.7, 0.7);
    this.icon = this.add.image(510, 10, 'transmitter1', menuConfig).setScale(0.4, 0.4);

    this.cameras.main.setBackgroundColor('#4488AA')
    // debug: move to next scene
    // this.scene.start("playScene");

    //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    console.log('Your goal is to form a memory: gain enough charge to fire an action potential to the neuron at the top, and gain a new memory!');
    

    }

    update() {
        //this.music.stop('background');
        
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
                
        //this.sound.play('sfx_select');
        
            // fade to black
            this.cameras.main.fadeOut(1000, 0, 0, 0)
        
    
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start("tripScene");
        })
    
        //this.cameras.main.fadeIn(6000);
        //this.scene.start("whatScene");

        }
        /* if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 5, 
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");
        */
            
        
        

    }
    }

