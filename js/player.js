class Player{
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 100;
        this.height = 100;
        this.image;
        this.speed = 5;
        this.rightBoundary = CANVAS_WIDTH - this.width;
        this.bottomBoundary = CANVAS_HEIGHT - this.height;
    }

    draw() {
        image(this.image, this.x, this.y, this.width, this.height);
        this.move();
        this.x = constrain(this.x, 0, (CANVAS_WIDTH - this.width));
        this.y = constrain(this.y, 0, (CANVAS_HEIGHT - this.height));
    } 
    
    move() {
        if (keyIsDown(DOWN_ARROW)) {
          this.y += this.speed;
        }    
        if (keyIsDown(UP_ARROW)) {
          this.y -= this.speed;
        }
        if (keyIsDown(LEFT_ARROW)) {
          this.x -= this.speed;
        }    
        if (keyIsDown(RIGHT_ARROW)) {
          this.x += this.speed;
        }
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