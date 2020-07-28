class Ion extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) { 
        super(scene, x, y, texture, frame);
        
        // add object to existing scene
        scene.add.existing(this);
        scene.physics.add.existing(this);

        // trace firing status
        this.isFiring = false;
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

      
        if(Phaser.Input.Keyboard.JustDown(keySPACE) && this.isFiring == true) {
            
            console.log(this.y);
            
           
        } 
        
        
        if(this.isFiring = true) {
            
        }
            
        
       
        
        
        // reset on miss - if this was greater than, it would constantly reset
        if((this.y > 490) || (this.y < 0) || (this.x > game.config.width) || (this.x < 0)){
            this.reset();
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
