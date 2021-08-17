class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.enemy = [];
    this.enemyPics = [];
    this.bullet = [];   
    this.score = 0;     
    this.gameDifficulty = 1  
  }

  setup() {
    this.enemyPics.push(enemyPic1);
    this.enemyPics.push(enemyPic2);
    this.enemyPics.push(enemyPic3);
    this.enemyPics.push(enemyPic4);    
    bgMusic = loadSound("assets/background.mp3", loaded);     
  }

  loaded() {
    bgMusic.loop();
  }

  preload() {
    this.background.image = loadImage("assets/background.jpg");
    this.player.image = loadImage("assets/player.png");
    enemyPic1 = loadImage("assets/enemy1.png");
    enemyPic2 = loadImage("assets/enemy2.png");
    enemyPic3 = loadImage("assets/enemy3.png");
    enemyPic4 = loadImage("assets/enemy4.png");
    bulletImage = loadImage("assets/bullet.png");
    explosionImage = loadImage("assets/explosion.png");    
    shootingSound = loadSound("assets/shooting.mp3");
    explosionSound = loadSound("assets/explosion.mp3");
    deadSound = loadSound("assets/dead.mp3");
  }

  draw() {
    this.background.draw();
    this.player.draw();
    bgMusic.setVolume(0.6);
    deadSound.setVolume(0.6);

    if (frameCount % 60 === 0) {
      const randomPicIndex = Math.floor(random(this.enemyPics.length));
      this.enemy.push(new Enemy(this.enemyPics[randomPicIndex], this.gameDifficulty));
    }

    this.enemy.forEach((enemy, index) => {
      enemy.draw();
      if (enemy.x + enemy.width < 0) {
        enemy.remove();
        this.score -= 10;
        scoreHolder.innerText = this.score;
      }
      if (enemy.delete) {
        this.enemy.splice(index, 1);
      }
      if (this.collisionCheck2(enemy, this.player)) {
        enemy.remove();
        this.player.destroy();
        explosionSound.play();
      }     
      if (this.player.delete) {        
        noLoop();
        bgMusic.pause();
        deadSound.play();
        canvas.innerHTML = '<span style="font-size:1.2cm; color:#C70039 ; font-family:fantasy;">Game Over</span>';        
      }
    });

    this.bullet.forEach((bullet, index) => {
      bullet.draw();
      if (bullet.x >= CANVAS_WIDTH) {
        bullet.remove();
      }
      this.enemy.forEach((enemy) => {
        if (this.collisionCheck(enemy, bullet)) {
          bullet.remove();
          enemy.destroy();
          explosionSound.play();
          this.score += 10;
          scoreHolder.innerText = this.score;
        }
      });
      if (bullet.delete) {
        this.bullet.splice(index, 1);
      }     
    });   
    
    if (frameCount % (60 * 5) === 0) {
      this.gameDifficulty += 1;
    }
  }  

  keyPressed() {
    if (keyCode === SPACE) {
      this.bullet.push(new Bullet(this.player.x + 100, this.player.y + 40, bulletImage));
      shootingSound.play();
    }    
    if (keyCode === ENTER) {
      location.reload(); 
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

  collisionCheck2(enemy, player) {
    // UA > TB
    // RA > LB
    // LA < RB
    // TA < UB
    if (enemy.bottomSide < player.topSide) {
      return false;
    }
    if (enemy.rightSide < player.leftSide) {
      return false;
    }
    if (enemy.leftSide > player.rightSide) {
      return false;
    }
    if (enemy.topSide > player.bottomSide) {
      return false;
    }
    return true;
  }
}
