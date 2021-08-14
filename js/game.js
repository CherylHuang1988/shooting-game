class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.enemy = [];
    this.enemyPics = [];
    this.bullet = [];    
  }

  setup() {
    this.enemyPics.push(enemyPic1);
    this.enemyPics.push(enemyPic2);
    this.enemyPics.push(enemyPic3);
  }

  preload() {
    this.background.image = loadImage("assets/background.jpg");
    this.player.image = loadImage("assets/player.png");
    enemyPic1 = loadImage("assets/enemy1.png");
    enemyPic2 = loadImage("assets/enemy2.png");
    enemyPic3 = loadImage("assets/enemy3.png");
    bulletImage = loadImage("assets/bullet.png");
    explosionImage = loadImage("assets/explosion.png");
  }

  draw() {
    this.background.draw();
    this.player.draw();

    if (frameCount % 120 === 0) {
      const randomPicIndex = Math.floor(random(this.enemyPics.length));
      this.enemy.push(new Enemy(this.enemyPics[randomPicIndex]));
    }

    this.enemy.forEach((enemy, index) => {
      enemy.draw();
      if (enemy.x + enemy.width < 0) {
        enemy.remove();
      }
      if (enemy.delete) {
        this.enemy.splice(index, 1);
      }
    });

    this.bullet.forEach((bullet, index) => {
      bullet.draw();
      if (bullet.x >= CANVAS_WIDTH) {
        bullet.remove();
      }
      this.enemy.forEach((enemy) => {
        if (this.collisionCheck(bullet, enemy)) {
          bullet.remove();
          enemy.destroy();
        }
      });
      if (bullet.delete) {
        this.bullet.splice(index, 1);
      }     
    });    
  }

  keyPressed() {
    if (keyCode === SPACE) {
      this.bullet.push(
        new Bullet(this.player.x + 100, this.player.y + 40, bulletImage)
      );
    }
  }

  collisionCheck(enemy, bullet) {
    // UA > TB
    // RA > LB
    // LA < RB
    // TA < UB
    if (enemy.bottomSide < bullet.topSide) {
      return false;
    }
    if (enemy.rightSide < bullet.leftSide) {
      return false;
    }
    if (enemy.leftSide > bullet.rightSide) {
      return false;
    }
    if (enemy.topSide > bullet.bottomSide) {
      return false;
    }
    return true;
  }
}
