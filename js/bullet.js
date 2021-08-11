class Bullet{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.image;
    }

    draw() {
        //image(this.image, this.x, this.y, this.width, this.height);
        noStroke();
        push();
        fill(199, 0, 57);
        ellipse(this.x, this.y, this.width, this.height);
        pop();
        this.x += 3
    }
}