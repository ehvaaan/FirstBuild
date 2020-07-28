class Play extends Phaser.Scene { 
    constructor() {
        super("playScene")
    }
    
    preload () {
        //load images and tile sprites
        this.load.image('neurotransmitter', './assets/Ion.png');
        this.load.image('transmitter', './assets/original.png'); // base transmitter
        this.load.image('transmitter1', './assets/newtransmitter1.png'); // new transmitter
        this.load.image('transmitter2', './assets/newtransmitter2.png'); // new transmitter
        this.load.image('transmitter3', './assets/newtransmitter3.png'); // new transmitter
        this.load.image('transmitter4', './assets/newtransmitter4.png'); // new transmitter
        this.load.image('polarized', './assets/transmitterPolarized1.png'); // polarized transmitter 

        this.load.image('brain', './assets/brain.png'); // load brain background
        this.load.image('chain', './assets/neuronchain.png'); // load brain background
        
        this.load.image('particle1', './assets/chargee.png');
        this.load.image('particle2', './assets/bluechargee.png')
        this.load.image('particle3', './assets/bluecharge22.png')
        this.load.audio('background', './assets/background.wav')
        this.load.audio('memoryretrieved', './assets/memoryretrieved.wav')
        this.load.audio('lost', './assets/sucks.wav')
        this.load.audio('powerup', './assets/powerup.wav')

        this.sfxElectricity = this.sound.add('Particle Shot');
        
          
        }
        
        
        
       
    
        
    
    create() {
    console.log('Will you remember?');

    
    this.music = this.sound.add('background');
    this.music.setLoop(true);
    this.music.play();

    // 60s playclock
    this.clock1 = this.time.delayedCall(30000, () => {
            game.settings.spaceneuronSpeed = game.settings.spaceneuronSpeed*1.5;
        }, null, this);
    
        // place tile sprite 
        this.brain = this.add.tileSprite(0, 0, 640, 480, 'brain').setOrigin(0, 0);

        this.explodeParticles = this.add.particles('particle1');
        this.explodeParticles1 = this.add.particles('particle2');
        this.explodeParticles2 = this.add.particles('particle3');

        // white rectangle backings
        /*
        this.add.rectangle(5, 5, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 443, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(603, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
        */
        // green UI background
        //this.add.rectangle(37, 42, 566, 64, 0x00FF00).setOrigin(0, 0);

        // FIRE text
        let fireConfig = {
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

        let chargeConfig = {
            fontFamily: 'Montserrat Subrayada',
            fontSize: '22px',
            backgroundColor: '#000000',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        } 

        //fireConfig.fixedWidth = 0;

        this.fire = this.add.text(300, 44, 'CHARGE', fireConfig).setOrigin(0.5);
        this.fire.setVisible(false);

        //this.charged = this.add.text(150, 75, 'FULLY CHARGED', chargeConfig);
        this.charged = this.add.text(430, 80, 'Press F to activate!', chargeConfig);
        this.charged.alpha = 0;
        
        this.iconTop = this.add.image(58, 54, 'polarized').setScale(0.7, 0.7);
        this.iconTop.alpha = 0;
        
        this.electricIcon = this.add.image(600, 54, 'particle1');
        this.electricIcon.alpha = 0.3;
        this.electricIcon1 = this.add.image(558, 54, 'particle1');
        this.electricIcon1.alpha = 0.3;
        this.electricIcon2 = this.add.image(516, 54, 'particle1');
        this.electricIcon2.alpha = 0.3;
        this.electricIcon3 = this.add.image(474, 54, 'particle1');
        this.electricIcon3.alpha = 0.3;
        this.electricIcon4 = this.add.image(432, 54, 'particle1');
        this.electricIcon4.alpha = 0.3;
        

        // random x position for player to start
        var xx = Phaser.Math.Between(game.config.width - game.config.width, game.config.width);
        // add ion (p1)
        this.p1Ion = new Ion(this, xx, 450, 'neurotransmitter').setScale(0.6, 0.6).setOrigin(0, 0);
        this.p1Ion.body.setCollideWorldBounds(false);
        this.p1Ion.body.setAllowGravity(false);
        
        // add 3 spaceneurons
        this.neuron01 = new Transmitter(this, game.config.width, 335, 'transmitter', 0, 10).setScale(0.5, 0.5).setOrigin(0, 0);
        this.neuron02 = new Transmitter(this, game.config.width, 275, 'transmitter1', 0, 10).setScale(0.5, 0.5).setOrigin(0, 0);
        this.neuron03 = new Transmitter(this, game.config.width, 215, 'transmitter2', 0, 10).setScale(0.5, 0.5).setOrigin(0, 0);
        this.neuron04 = new Transmitter(this, game.config.width, 155, 'transmitter3', 0, 10).setScale(0.5, 0.5).setOrigin(0, 0);
        this.neuron05 = new Transmitter(this, game.config.width, 95, 'transmitter', 0, 10).setScale(0.5, 0.5).setOrigin(0, 0);
        this.neuron06 = new SmallNeuron(this, game.config.width, 65, 'transmitter4', 0, 10).setScale(0.3, 0.3).setOrigin(0, 0);

        let timeConfig = {
            fontSize: '22px',
        }
    
        // 2:30 in seconds
        this.initialTime = 60;
    
        this.text = this.add.text(360, 10, 'Memory lost in: ' + formatTime(this.initialTime), timeConfig);
    
        // Each 1000 ms call onEvent
        this.timedEvent = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });
    
        function formatTime(seconds){
            // Minutes
            var minutes = Math.floor(seconds/60);
            // Seconds
            var partInSeconds = seconds%60;
            // Adds left zeros to seconds
            partInSeconds = partInSeconds.toString().padStart(2,'0');
            // Returns formated time
            return `${minutes}:${partInSeconds}`;
        }
        
        function onEvent () {
            this.initialTime -= 1; // One second
            this.text.setText('Memory lost in: ' + formatTime(this.initialTime), timeConfig);
        }

        
        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        
        // score
        this.p1score = 0;
        console.log('Will you be able to remember?');
        
        // game over flag
        this.gameOver = false;

        // 60-second play clock
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            //this.gameOver = true;
            this.scene.start("loseScene");
        }, null, this);
    
            
        
    }

    

    update() {
        
        let audioConfig = {
            mute: false,
            volume: 0.7,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
        }

        if(!this.gameOver) {
            // update neurons
            this.neuron01.update();
            this.neuron02.update();
            this.neuron03.update();
            this.neuron04.update();
            this.neuron05.update();
            this.neuron06.update();
        }

        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyF)) {
            game.settings.spaceneuronSpeed = game.settings.spaceneuronSpeed/1.5;
            this.scene.restart(this.p1score);
        }


        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start("menuScene");
        }

        

        // QUIT option - music needs to restart
        if(!this.gameOver && Phaser.Input.Keyboard.JustDown(keyQ)) {
            this.scene.start("menuScene");
            this.music.stop();
        }
        
        
        if((!this.gameOver) && (Phaser.Input.Keyboard.JustDown(keySPACE))) {
            if(keyLEFT.isDown) {
                this.p1Ion.body.setAllowGravity(true).setVelocity(400, -500);
                this.fire.setVisible(true);
                this.isFiring = true;
                this.sfxElectricity.play();
            } else if(keyRIGHT.isDown) {
                this.p1Ion.body.setAllowGravity(true).setVelocity(400, -500);
                this.fire.setVisible(true);
                this.isFiring = true;
                this.sfxElectricity.play();
            }
        
    } 

       
        
       if(!this.gameOver) {
            this.p1Ion.update();
        }

       
        

        

        // check collisions - FIX DETAILED COLLISIONS
        
        
        
        if(this.checkCollision(this.p1Ion, this.neuron01)) {
            this.p1Ion.reset();
            this.neuronExplode(this.neuron01);
            this.iconTop.alpha += 0.1;
        }
        
        

        if(this.checkCollision(this.p1Ion, this.neuron02)) {
            this.p1Ion.reset();
            this.neuronExplode(this.neuron02);
            this.iconTop.alpha += 0.1;
            //this.iconChain = this.add.image(neuron.x + 152, neuron.y + 132, 'chain').setScale(0.3, 0.3);
        }

        
        
        if(this.checkCollision(this.p1Ion, this.neuron03)) {
            this.p1Ion.reset();
            this.neuronExplode(this.neuron03); 
            this.iconTop.alpha += 0.1;
        }

        if(this.checkCollision(this.p1Ion, this.neuron04)) {
            this.p1Ion.reset();
            this.neuronExplode(this.neuron04);
            this.iconTop.alpha += 0.1;
        }   

        if(this.checkCollision(this.p1Ion, this.neuron05)) {
            this.p1Ion.reset();
            this.neuronExplode(this.neuron05);
            this.iconTop.alpha += 0.1;
        }
        
        this.sound1 = this.sound.add('memoryretrieved', audioConfig);
        this.sound2 = this.sound.add('lost', audioConfig);
        this.power = this.sound.add('powerup', audioConfig);
        
        if(this.p1score == 50 && Phaser.Input.Keyboard.JustDown(keyF)) {
            this.isCharged = true;
            this.iconTop.alpha = 1.5;
            this.power.play();
            this.charged.setVisible(false);
            
            this.explodeParticles.createEmitter({
                x: this.iconTop.x, 
                y: this.iconTop.y,
                lifespan: 1000,
                speed: { min: 20, max: 100},
                gravityY: 300,
                quantity: 3,
                frequency: 0
            }).explode();

            this.explodeParticles1.createEmitter({
                x: this.iconTop.x, 
                y: this.iconTop.y,
                lifespan: 1000,
                speed: { min: 20, max: 100},
                gravityY: 300,
                quantity: 3,
                frequency: 0
            }).explode();
    
            this.explodeParticles2.createEmitter({
                x: this.iconTop.x, 
                y: this.iconTop.y,
                lifespan: 2000,
                speed: { min: 20, max: 100},
                gravityY: 300,
                quantity: 6,
                frequency: 0
            }).explode();
        }

        if(this.checkCollision(this.p1Ion, this.neuron06)) {
            
            this.neuronExplode(this.neuron06);
            this.iconTop = this.add.image(58, 54, 'transmitter').setScale(0.7, 0.7);

            if(this.isCharged) {
            this.music.stop();
            this.sound1.play();
            this.cameras.main.fadeOut(1000, 0, 0, 0)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start("winScene");
                })
        }  else if (!this.isCharged) {
            this.music.stop();
            this.sound2.play();
            this.cameras.main.fadeOut(1000, 0, 0, 0)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start("loseScene");
        })  }
        }
    }

        // simple AABB bounds checking - do they overlap
    checkCollision(ion, neuron) {
        if(ion.x < neuron.x + neuron.width * neuron.scale && ion.x + ion.width * ion.scale > neuron.x && ion.y < neuron.y + neuron.height * neuron.scale && ion.height * ion.scale + ion.y > neuron.y) {
            
            return true;
            
        } else {
            return false;
        }
    }

    
    
   checkTopCollision(icon, neuron) {
        if(icon.x < neuron.x + neuron.width * neuron.scale && icon.x + icon.width * icon.scale > neuron.x && icon.y < neuron.y + neuron.height * neuron.scale && icon.height * icon.scale + icon.y > neuron.y) {
            //icon.alpha += 0.2;
            return true;
            
        } else {
            return false;
        }
    } 

    /* setChain(neuron, neuron) {
            this.icon = this.add.image(neuron.x + 10, neuron.y + 15, 'transmitter').setScale(0.3, 0.3);
            let space1 = this.neuron02;
    } */

    neuronExplode(neuron) {
        if(neuron.isSmallNeuron()) {
            this.explodeParticles.createEmitter({
                x: neuron.x, 
                y: neuron.y,
                lifespan: 1000,
                speed: { min: 20, max: 100},
                gravityY: 300,
                quantity: 3,
                frequency: 0,
                scale: 0.5
            }).explode();
    
            this.explodeParticles1.createEmitter({
                x: neuron.x, 
                y: neuron.y,
                lifespan: 1000,
                speed: { min: 20, max: 100},
                gravityY: 300,
                quantity: 3,
                frequency: 0,
                scale: 0.5
            }).explode();
    
            this.explodeParticles2.createEmitter({
                x: neuron.x, 
                y: neuron.y,
                lifespan: 2000,
                speed: { min: 20, max: 100},
                gravityY: 300,
                quantity: 6,
                frequency: 0,
                scale: 0.5
            }).explode();
            this.icon = this.add.image(neuron.x + 10, neuron.y + 15, 'transmitter').setScale(0.3, 0.3);
            neuron.destroy(); // reset neuron position
        } 
        if(!neuron.isSmallNeuron()) {
        this.explodeParticles.createEmitter({
            x: neuron.x, 
            y: neuron.y,
            lifespan: 2000,
            speed: { min: 20, max: 100},
            gravityY: 300,
            quantity: 6,
            frequency: 0
        }).explode();

        this.explodeParticles1.createEmitter({
            x: neuron.x, 
            y: neuron.y,
            lifespan: 1000,
            speed: { min: 20, max: 100},
            gravityY: 300,
            quantity: 3,
            frequency: 0,
        }).explode();

        this.explodeParticles2.createEmitter({
            x: neuron.x, 
            y: neuron.y,
            lifespan: 1000,
            speed: { min: 20, max: 100},
            gravityY: 300,
            quantity: 3,
            frequency: 0,
        }).explode();
        this.icon = this.add.image(neuron.x + 35, neuron.y + 35, 'transmitter').setScale(0.5, 0.5);
        neuron.destroy(); // reset neuron off-screen
    }
        this.p1score += neuron.points;

        // increase electric charge
        if(this.p1score == 10) {
            this.electricIcon.alpha = 1;
        }
        
        if(this.p1score == 20) {
            this.electricIcon1.alpha = 1;
        }
        
        if(this.p1score == 30) {
            this.electricIcon2.alpha = 1;
        }

        if(this.p1score == 40) {
            this.electricIcon3.alpha = 1;
        }

        if(this.p1score == 50) {
            this.electricIcon4.alpha = 1;
             this.tweens.add({
                targets: this.charged,
                alpha: 1,
                duration: 1700,
                repeat: 900
              }, this);
        } 
        
        

        if(this.sound) {
            var x = Math.floor(Math.random() * 3);
            if(x == 0){
                this.sound.play('charged');
            } else if(x == 1) {
                this.sound.play('charge2');
            } else if(x == 2) {
                this.sound.play('target2');
            } else if(x == 3) {
                this.sound.play('target3');
            }
        }
        
        
    }
}