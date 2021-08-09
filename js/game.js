class Game {
    constructor() {
        this.background = new Background();        
    }

    preload() {
        this.background.image = loadImage('assets/paved-road-surrounded-by-trees.jpg');

    }

    draw() {
        this.background.draw();

    }

    keyPressed() {

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