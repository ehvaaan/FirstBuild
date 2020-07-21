class SmallShip extends Transmitter {

    constructor(scene, x, y, texture, frame, pointValue) { 
        super(scene, x, y, texture, frame, pointValue);

        
    }
    
    isSmallShip() {
            return true;
        }
        
    update() {
        // move spaceship left
        this.x -= game.settings.spaceshipSpeed*1.5;

        // wrap around from left to right edge
        if(this.x <= 0 - this.width) {
            this.x = game.config.width;
        }

        // wrap around from right to left edge
        
    }
    
    destroy() {
        this.x = 800;
        this.y = 800;
    }

}
