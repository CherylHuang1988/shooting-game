class Enemy {
    constructor(enemyPic) {       
        this.width = random(70, 100);
        this.height = random(70, 100);
        this.x = CANVAS_WIDTH + this.width;
        this.y = random(0, CANVAS_HEIGHT - this.height);
        this.image = enemyPic;        
    }

    draw() {
      console.log(this.image)
        image(this.image, this.x, this.y, this.width, this.height);
        this.x -= 2;
    }

    get bottomSide() {
        return this.y + this.height;
      }    
      get topSide() {
        return this.y;
      }    
      get leftSide() {
        return this.x;
      }
      get rightSide() {
        return this.x + this.width;
      }
}