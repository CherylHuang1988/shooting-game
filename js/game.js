class Game {
    constructor() {
        this.background = new Background();  
        this.player = new Player();
        this.enemy = [];
        this.bullet = [];
    }

    preload() {
        this.background.image = loadImage('assets/paved-road-surrounded-by-trees.jpg');
        this.player.image = loadImage('assets/seaplane.png');
        this.enemy.image = loadImage('assets/jet-plane.png');       

    }

    draw() {
        this.background.draw();
        this.player.draw();      
        

        if (frameCount % 120 === 0) {
          this.enemy.push(new Enemy());
        }
        this.enemy.forEach((enemy, index) => {
          enemy.draw();
          if (enemy.x + enemy.width < 0) {
            this.enemy.splice(index, 1);
          }
        }); 

        this.bullet.forEach((bullet, index) => {
          bullet.draw();
          if (bullet.x + bullet.width > CANVAS_WIDTH ) {
            this.bullet.splice(index, 1);
          }
        });                
    }

    keyPressed() {
      if (keyCode === SPACE) {
        this.bullet.push(new Bullet(this.player.x + 100, this.player.y + 50));
      }
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

