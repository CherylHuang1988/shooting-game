class Enemy {
    constructor() {
        this.width = random(100, 130);
        this.height = random(100, 130);
        this.x = CANVAS_WIDTH + this.width;
        this.y = random(0, CANVAS_HEIGHT - this.height);
        this.image;
    }

    draw() {
        //image(this.image, this.x, this.y, this.width, this.height);
        ellipse(this.x, this.y, this.width, this.height);
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