// Rocket prefab
class Transmitter extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) { 
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);

        // store pointValue
        this.points = pointValue;
    }

    isSmallNeuron() {
        return false;
    }

    update() {
        this.x -= 0;
    }
    
    update2() {
        // move spaceship left
        this.x -= game.settings.spaceshipSpeed;
        //this.ship04 -= game.settings.spaceshipSpeed1;
        //this.spacecraft -= game.settings.spaceshipSpeed*1.75;
        
        // move spaceship right


        // wrap around from left to right edge
        if(this.x <= 0 - this.width) {
            this.x = game.config.width;
        }

        // wrap around from right to left edge
        
        
        
    }

    reset() {
        this.x = game.config.width;
    }

    destroy() {
        this.x = 800;
        this.y = 800;
        //this.didExplode.setVisible(false);
    }
}