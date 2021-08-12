class Bullet{
    constructor(x, y, bulletImage) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.image = bulletImage ;
    }

    draw() {
        image(this.image, this.x, this.y, this.width, this.height);        
        this.x += 8
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