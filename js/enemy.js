class Enemy {
    constructor() {
        this.width = 90;
        this.height = 90;
        this.x = CANVAS_WIDTH + this.width;
        this.y = 0;
        this.image;
    }

    draw() {
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