export default class Boot extends Phaser.Scene {

     W_SCREEN= 1500;
     H_SCREEN= 700;

    constructor() {
      super({
        key: "Boot",
      });
      
    }
  
   
 preload ()
{

    this.load.setBaseURL('../../public');
    this.load.image('background', 'assets/img/background.png');
    this.load.spritesheet('/assets/spritesheet/pac-nes', 
        'assets/pac-nes.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

 create ()
{
    this.add.image(this.W_SCREEN/2 , this.H_SCREEN/2, 'background').setScale(1.5);
    //this.add.image(400, 300, 'sky').setOrigin(0, 0);
}

 update ()
{
}
  
  
  }
  