class Enemy {
    constructor(enemyPic, speed) {       
        this.width = random(70, 110);
        this.height = random(70, 110);
        this.x = CANVAS_WIDTH + this.width;
        this.y = random(0, CANVAS_HEIGHT - this.height);
        this.image = enemyPic;  
        this.delete = false;      
        this.isDestroying = false; 
        theRealSpeed = 2 * speed; 
        this.speed = theRealSpeed; 
    }

    draw() {
        if (this.isDestroying){
          this.image = explosionImage
          image(this.image, this.x, this.y, this.width, this.height);
        } else {
          image(this.image, this.x, this.y, this.width, this.height);
          this.x -= this.speed;
        }
    }    

    destroy() {
      this.isDestroying = true;
      setTimeout(() => {       
        this.delete = true
      }, 200)
    }

    remove() {
      this.delete = true;
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