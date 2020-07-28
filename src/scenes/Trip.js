class Trip extends Phaser.Scene {
    constructor() {
        super("tripScene");
        }
        
    preload() {
        this.load.image('title', './assets/Title.png')
    }
    
    create() {
        this.cameras.main.setBackgroundColor('#421278');
        this.cameras.main.fadeIn(2000, 0, 0, 0);

        this.trip = this.add.image(320, 240, 'title');
        
        this.clock1 = this.time.delayedCall(5000, () => {
            this.cameras.main.fadeOut(1000, 0, 0, 0);
        }, null, this);
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start("whatScene");
        })

    }

    update() {
    
        
    }
            
        }
