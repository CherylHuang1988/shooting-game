class Background {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = CANVAS_WIDTH;
        this.height = CANVAS_HEIGHT;
        this.image;
    }

    draw() {
        this.x -= 3;
        image(this.image, this.x, this.y, this.width, this.height);
        image(this.image, this.x + this.width, this.y, this.width, this.height);
        if (this.x <= -this.width) {
            this.x = 0
        }        
    }
}