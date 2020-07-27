var jumpTimer = 0;

class Ion extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) { 
        super(scene, x, y, texture, frame);
        
        // add object to existing scene
        scene.add.existing(this);
        scene.physics.add.existing(this);

        // trace rocket's firing status
        this.isFiring = false;

        // add rocket sfx
        //this.sfxRocket = scene.sound.add('Particle Shot');

        
        }
    
    

    update() {
        // left/right movement
        if(this.isFiring) {
            if(keyRIGHT.isDown && this.x <= 578) {
                this.body.velocity.x = 300;
            } else if(keyLEFT.isDown && this.x > 0) {
                this.body.velocity.x = -300;
            }
            
        }

        /* if(this.isFiring) {
            if(keyRIGHT.isDown && this.x <= 578) {
                this.body.velocity.x = 300;
            } else if(keyLEFT.isDown && this.x > game.config.width - game.config.width) {
                this.body.velocity.x = -300;
            } else {
                this.body.velocity.x = 0;
            }
            
        } */
       
       /* if ((!this.gameOver) && !this.isFiring) {
            this.body.setAllowGravity(true);
              if (this.body.touching.down && jumpTimer === 0) {
                  // jump is allowed to start
                  jumpTimer = 1;
                  //this.p1Rocket.body.velocity.x = 400;
                  this.p1Rocket.body.velocity.y = -500;
              } else if (jumpTimer > 0 && jumpTimer < 31) {
                  // keep jumping higher
                  jumpTimer++;
                  //this.p1Rocket.body.velocity.x = 400 + (jumpTimer * 5);
                  this.body.velocity.y = -500 + (jumpTimer * 5);  
                }   
          }  else {
              // jump button not being pressed, reset jump timer
              jumpTimer = 0;
          } */ 
        // fire button
        
        /*if(Phaser.Input.Keyboard.JustDown(keyF)) {
            
        } */
        if(Phaser.Input.Keyboard.JustDown(keySPACE) && this.isFiring == true) {
            
            console.log(this.y);
            //this.sfxRocket.play();
            //this.scene.fire.setVisible(true);
        
            //this.isFiring = false;
            //this.shoot(this);
            //scene.add.text(69, 54, 'FIRE!', scoreConfig);
            // play sfx
           
        } 
        
        
        if(this.isFiring = true) {
            
        }
            // disables double jump
        /* if((Phaser.Input.Keyboard.JustDown(keyF)) && (this.isFiring)) {
            this.isFiring = false;
        } */
        /* if(this.isFiring) {
             this.scene.fire.setVisible(true);
         } */
        
        /*this.add.rectangle(260, 55, 100, 34, 0xF3B141).setOrigin(0, 0);
        this.fire = this.add.text(69, 54, 'FIRE', fireConfig).setOrigin(0.5);
        
         if(this.isFiring) {            
            //this.fire = this.add.text(69, 54, this.p1score, scoreConfig);
            //this.fire.text = ;
            //this.fire = this.add.text(260, 55, 100, 34, 0xF3B141).setOrigin(0, 0);
            
            this.fire.text = this.add.text(this.fire);
            
        } */

        // if fired, move up (negative moves UP the screen)
        

        /* if(this.isFiring && this.y >= 108) {
            //this.reset();
        } */
        
        
        // reset on miss - if this was greater than, it would constantly reset
        if((this.y > 490) || (this.y < 0) || (this.x > game.config.width) || (this.x < 0)){
            //console.log(this.y);
            this.reset();
            //this.isFiring = false;
            //this.scene.fire.setVisible(false);
        }

    }
    // reset rocket to "ground" if collision occurs
    reset() {
        //console.log(game.config.height);
        this.fire = false;
        this.body.setAllowGravity(false).setVelocity(0);
        this.y = 450;
        var xx = Phaser.Math.Between(game.config.width - game.config.width, 620);
        this.x = xx;
        this.scene.fire.setVisible(false);
    }
}
