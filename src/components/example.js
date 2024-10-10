var W_SCREEN= 1500;
var H_SCREEN= 700;
var config = {
    type: Phaser.AUTO,
    width: W_SCREEN,
    height: H_SCREEN,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{

    this.load.setBaseURL('../../public');
    this.load.image('background', 'assets/img/background.png');
    this.load.spritesheet('/assets/spritesheet/pac-nes', 
        'assets/pac-nes.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

function create ()
{
    this.add.image(W_SCREEN/2 , H_SCREEN/2, 'background').setScale(1.5);
    //this.add.image(400, 300, 'sky').setOrigin(0, 0);
}

function update ()
{
}