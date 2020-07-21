//var cursors;
var arrow;
var ball;
var catchFlag = false;
var launchVelocity = 0;

class Play extends Phaser.Scene { 
    constructor() {
        super("playScene")
    }
    
    preload () {
        //load images and tile sprites
        this.load.image('neurotransmitter', './assets/neurotransmitter.png');
        this.load.image('transmitter', './assets/transmitter.png');
        this.load.image('receptor', './assets/receptor.png');
        this.load.image('brain', './assets/brain.png'); // load brain background
        
        /* this.load.spritesheet('explosion', './assets/explosion.png',
            {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
        this.load.spritesheet('explosion1', './assets/explosion.png',
            {frameWidth: 32, frameHeight: 16, startFrame: 0, endFrame: 9}); */
        
        this.load.image('particle1', './assets/chargee.png');
        this.load.image('particle2', './assets/circle_02.png')
        this.load.image('particle3', './assets/circle_04.png')
        this.load.audio('background', './assets/background.wav')
        this.load.audio('memoryretrieved', './assets/memoryretrieved.wav')

        this.sfxElectricity = this.sound.add('Particle Shot');
        
          
        }
        
        
        
       
    
        
    
    create() {
    
    var music = this.sound.add('background');
    music.setLoop(true);
    music.play();

  

        this.clock1 = this.time.delayedCall(30000, () => {
            game.settings.spaceshipSpeed = game.settings.spaceshipSpeed*1.5;
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
            fixedWidth: 100
        } 

        fireConfig.fixedWidth = 0;

        this.fire = this.add.text(360, 44, 'CHARGE', fireConfig).setOrigin(0.5);
        this.fire.setVisible(false);
        
        this.iconTop = this.add.image(58, 54, 'transmitter').setScale(0.7, 0.7);
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

        // add rocket (p1)
        this.p1Rocket = new Ion(this, game.config.width - game.config.width, 450, 'neurotransmitter').setOrigin(0, 0);
        this.p1Rocket.body.setCollideWorldBounds(false);
        this.p1Rocket.body.setAllowGravity(false);
        
        // add 3 spaceships
        this.ship01 = new Transmitter(this, game.config.width, 335, 'transmitter', 0, 10).setScale(0.5, 0.5).setOrigin(0, 0);
        this.ship02 = new Transmitter(this, game.config.width, 275, 'transmitter', 0, 10).setScale(0.5, 0.5).setOrigin(0, 0);
        this.ship03 = new Transmitter(this, game.config.width, 215, 'transmitter', 0, 10).setScale(0.5, 0.5).setOrigin(0, 0);
        this.ship04 = new Transmitter(this, game.config.width, 155, 'transmitter', 0, 10).setScale(0.5, 0.5).setOrigin(0, 0);
        this.ship05 = new Transmitter(this, game.config.width, 95, 'transmitter', 0, 10).setScale(0.5, 0.5).setOrigin(0, 0);
        this.ship06 = new SmallShip(this, game.config.width, 65, 'transmitter', 0, 10).setScale(0.3, 0.3).setOrigin(0, 0);
        //this.ship07 = new Transmitter(this, game.config.width, 215, 'transmitter', 0, 10).setScale(0.5, 0.5).setOrigin(0, 0);

        

        //this.p1Rocket.body.collideWorldBounds = true;
        //this.p1Rocket.bounce.y = 0.8;
        
        /*sprite2.body.collideWorldBounds = true;
        sprite2.body.bounce.y = 0.8;
        sprite2.body.gravity.y = 200;
        
        sprite3.body.collideWorldBounds = true;
        sprite3.body.bounce.y = 0.8;
        sprite3.body.gravity.y = 50;
    
        sprite4.body.allowGravity = false;*/

        // display timer
        //this.timeLeft = this.add.text(69, 54, this.game.settings.gameTimer.duration, fireConfig);        
        //this.timeLeft.setVisible(true);

        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        
        
        

        // score
        this.p1score = 0;

        // score display
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
            fixedWidth: 100
        }
        
        let scoreConfig2 = {
            fontFamily: 'Georgia',
            fontSize: '24px',
            backgroundColor: '#FFFFFF',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        //this.scoreLeft = this.add.text(515, 24, this.p1score, scoreConfig);
        

        // game over flag
        this.gameOver = false;

        //this.didExplode = this.add.text()
        //this.didExplode.setVisible(false);


        // 60-second play clock
        scoreConfig.fixedWidth = 0;
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, '(F)ire to Restart or (M) to return to the Menu', scoreConfig2).setOrigin(0.5);
            this.gameOver = true;
        }, null, this);
    }

    update() {
        
        // ends game at 60 pts
        /* if(this.p1score >= 60) {
            this.gameOver = true;
        } */

        let audioConfig = {
            mute: false,
            volume: 0.7,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0
            
        }
        
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

        //scoreConfig.fixedWidth = 0;

        if(this.gameOver) {
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, '(F)ire to Restart or (M) to return to the Menu', scoreConfig).setOrigin(0.5);
            
            this.sound.add('memoryretrieved', audioConfig);
            
        }
        
        
        if(!this.gameOver) {
            // update spaceships
            this.ship01.update();
            this.ship02.update();
            this.ship03.update();
            this.ship04.update();
            this.ship05.update();
            this.ship06.update();
        }

        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyF)) {
            game.settings.spaceshipSpeed = game.settings.spaceshipSpeed/1.5;
            this.scene.restart(this.p1score);
        }


        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start("menuScene");
        }

        // QUIT option - music needs to restart
        if(!this.gameOver && Phaser.Input.Keyboard.JustDown(keyQ)) {
            this.scene.start("menuScene");
            //this.scene.music.stop();
        }
        
        /*if((!this.gameOver) && (Phaser.Input.Keyboard.JustDown(keyLEFT) || (keyLEFT.isDown))) {
            this.brain.tilePositionX -= 2;
        } */

        if((!this.gameOver) && (Phaser.Input.Keyboard.JustDown(keyF))) {
            this.p1Rocket.body.setAllowGravity(true).setVelocity(400, -500);
            this.fire.setVisible(true);
            this.isFiring = true;
            this.sfxElectricity.play();
        }

        if(this.inAir && (Phaser.Input.Keyboard.JustDown(keyF))){
            this.p1Rocket.body.setAllowGravity(false).setVelocity(0);
        }
        
       if(!this.gameOver) {
            this.p1Rocket.update();
        }

       
        

        

        // check collisions - FIX DETAILED COLLISIONS
        
        
        
        if(this.checkCollision(this.p1Rocket, this.ship01)) {
            this.p1Rocket.reset();
            //this.scene.destroy(this.ship01);
            this.shipExplode(this.ship01);
            this.iconTop.alpha += 0.1;
            //this.remove(this.ship01, true, true);
            //this.ship01.destroy(true);
            //this.ship01.reset();
            /* this.ship02 = new Transmitter(this, game.config.width, 275, 'transmitter', 0, 10).setScale(0.5, 0.5).setOrigin(0, 0);
            this.ship02.spaceshipSpeed -= game.settings.spaceshipSpeed;
            this.ship02.update(); */
        }
        
        if(this.checkCollision(this.p1Rocket, this.ship02)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship02);
            this.iconTop.alpha += 0.2;
        }
        
        if(this.checkCollision(this.p1Rocket, this.ship03)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship03); 
            this.iconTop.alpha += 0.1;
            // make second reset method so it will reset coming from other direction
        }

        if(this.checkCollision(this.p1Rocket, this.ship04)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship04);
            this.iconTop.alpha += 0.1;
        }   

        if(this.checkCollision(this.p1Rocket, this.ship05)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship05);
            this.iconTop.alpha += 0.1;
        }
        
        this.sound1 = this.sound.add('memoryretrieved', audioConfig);
        
        if(this.checkCollision(this.p1Rocket, this.ship06)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship06);
            this.iconTop.alpha += 0.1;
        }   

        if(this.checkTopCollision(this.iconTop, this.ship06) && (this.iconTop.alpha == 0.9)) {
            this.sound1.play();
            this.iconTop.alpha = 1;
        }
        
        
        /* if(this.checkTopCollision(this.iconTop, this.ship06) && (this.iconTop.alpha == 0.9)) {
            
        } */
        /* if(this.checkCollision(this.p1Rocket, this.ship07)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship07);
        } */
        // check collision for second time and reset coming from other direction
    }

        // simple AABB bounds checking - do they overlap
    checkCollision(rocket, ship) {
        if(rocket.x < ship.x + ship.width * ship.scale && rocket.x + rocket.width * rocket.scale > ship.x && rocket.y < ship.y + ship.height * ship.scale && rocket.height * rocket.scale + rocket.y > ship.y) {
            
            return true;
            
        } else {
            return false;
        }
    }

    
    
   checkTopCollision(icon, ship) {
        if(icon.x < ship.x + ship.width * ship.scale && icon.x + icon.width * icon.scale > ship.x && icon.y < ship.y + ship.height * ship.scale && icon.height * icon.scale + icon.y > ship.y) {
            //icon.alpha += 0.2;
            return true;
            
        } else {
            return false;
        }
    } 

    shipExplode(ship) {
        // temporarily hide ship
        
        // create explosion sprite at ship's position
        //let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        
        if(ship.isSmallShip()) {
            this.explodeParticles.createEmitter({
                x: ship.x, 
                y: ship.y,
                lifespan: 1000,
                speed: { min: 20, max: 100},
                gravityY: 300,
                quantity: 3,
                frequency: 0,
                scale: 0.5
            }).explode();
    
            this.explodeParticles1.createEmitter({
                x: ship.x, 
                y: ship.y,
                lifespan: 1000,
                speed: { min: 20, max: 100},
                gravityY: 300,
                quantity: 3,
                frequency: 0,
                scale: 0.5
            }).explode();
    
            this.explodeParticles2.createEmitter({
                x: ship.x, 
                y: ship.y,
                lifespan: 2000,
                speed: { min: 20, max: 100},
                gravityY: 300,
                quantity: 6,
                frequency: 0,
                scale: 0.5
            }).explode();
            this.icon = this.add.image(ship.x + 10, ship.y + 15, 'transmitter').setScale(0.3, 0.3);
            ship.destroy(); // reset ship position
            //ship.alpha = 1;
            //boom.anims.play('explode').setScale(0.5, 0.5); // play explode animation
        } 
        if(!ship.isSmallShip()) {
        this.explodeParticles.createEmitter({
            x: ship.x, 
            y: ship.y,
            lifespan: 2000,
            speed: { min: 20, max: 100},
            gravityY: 300,
            quantity: 6,
            frequency: 0
        }).explode();

        this.explodeParticles1.createEmitter({
            x: ship.x, 
            y: ship.y,
            lifespan: 1000,
            speed: { min: 20, max: 100},
            gravityY: 300,
            quantity: 3,
            frequency: 0,
        }).explode();

        this.explodeParticles2.createEmitter({
            x: ship.x, 
            y: ship.y,
            lifespan: 1000,
            speed: { min: 20, max: 100},
            gravityY: 300,
            quantity: 3,
            frequency: 0,
        }).explode();
         // reset ship position
        
        //this.didExplode.setVisible(true);
        this.icon = this.add.image(ship.x + 35, ship.y + 35, 'transmitter').setScale(0.5, 0.5);
        ship.destroy(); // reset ship off-screen

        //this.ship.settings.spaceshipSpeed = 0;
        //boom.anims.play('explode'); // play explode animation
    }
        
    
        
        /*boom.on('animationcomplete', () => { // callback after animation completes
            ship.reset(); // reset ship position
            ship.alpha = 1; // make ship visible again
            boom.destroy(); // remove explosion sprite
        });
        */
        // score incrememnt and repaint
        this.p1score += ship.points;
        //this.scoreLeft.text = this.p1score;

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
        } 

        if(this.sound) {
            var x = Math.floor(Math.random() * 3);
            if(x == 0){
                this.sound.play('target');
            } else if(x == 1) {
                this.sound.play('target1');
            } else if(x == 2) {
                this.sound.play('target2');
            } else if(x == 3) {
                this.sound.play('target3');
            }
        }
        
        
    }
}