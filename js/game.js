class Game {
    constructor() {
        this.background = new Background();  
        this.player = new Player();
        this.enemy = new Enemy();
    }

    preload() {
        this.background.image = loadImage('assets/paved-road-surrounded-by-trees.jpg');
        this.player.image = loadImage('assets/seaplane.png')
        this.enemy.image = loadImage('assets/jet-plane.png')

    }

    draw() {
        this.background.draw();
        this.player.draw();
        this.enemy.draw();
    }

    collisionCheck(player, treasure) {
        // UA > TB
        // RA > LB
        // LA < RB
        // TA < UB    
        if (player.bottomSide < treasure.topSide) {
          return false;
        }    
        if (player.rightSide < treasure.leftSide) {
          return false;
        }    
        if (player.leftSide > treasure.rightSide) {
          return false;
        }    
        if (player.topSide > treasure.bottomSide) {
          return false;
        }    
        return true;
      }
}