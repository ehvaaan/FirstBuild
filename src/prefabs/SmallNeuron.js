class SmallNeuron extends Transmitter {

    constructor(scene, x, y, texture, frame, pointValue) { 
        super(scene, x, y, texture, frame, pointValue);

        
    }
    
    isSmallNeuron() {
            return true;
        }
        
    update2() {
        this.x -= game.settings.spaceshipSpeed*1.5;
        
        if(this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }
    update() {
        // move spaceship left
        this.x -= 0;

        // wrap around from left to right edge
        

        // wrap around from right to left edge
        
    }
    
    destroy() {
        this.x = 800;
        this.y = 800;
    }

}
