function Snake() {
    this.pos = createVector(floor(random(width / grid)) * grid, floor(random(height / grid)) * grid);
    this.tail = [];
    this.motion = {
        xVal: 0,
        yVal: 0
    }

    this.show = function () {
        noStroke();
        for (let i = 0; i < this.tail.length; i++) {
            fill(214, 104, 41, 150)
            rect(this.tail[i].x, this.tail[i].y, grid, grid);
        }
        fill(214, 104, 41)
        rect(this.pos.x, this.pos.y, grid, grid);
    }

    this.update = function () {
        this.posunTail()
        this.motionAdd()
        this.pos.x += this.motion.xVal * grid;
        this.pos.y += this.motion.yVal * grid;
        this.kontrolaPozice()
        this.biteMyself()
        for (let i = 0; i < berries.length; i++) {
            if (berries[i].pos.x == this.pos.x && berries[i].pos.y == this.pos.y) {
                this.eatFood(i)
            }
        }
    }

    this.biteMyself = function () {
        for (let i = 0; i < this.tail.length; i++) {
            if (this.tail[i].x == this.pos.x && this.tail[i].y == this.pos.y) {
                this.tail.splice(0, i + 1);
            }
        }
    }

    this.add30 = function () {
        for (let i = 0; i < 30; i++) {
            this.tail.push({
                x: this.pos.x,
                y: this.pos.y
            })
        }
    }

    this.eatFood = function (i) {
        berries[i].create();
        this.tail.push({
            x: this.pos.x,
            y: this.pos.y
        });

        addBerry++
    }

    this.motionAdd = function () {
        if (speedX != -(this.motion.xVal)) {
            this.motion.xVal = speedX;
        }
        if (speedY != -(this.motion.yVal)) {
            this.motion.yVal = speedY;
        }

    }

    this.posunTail = function () {
        if (this.tail.length != 0) {
            this.tail.shift();
            this.tail.push({
                x: this.pos.x,
                y: this.pos.y
            })
        }
    }

    this.kontrolaPozice = function () {
        if (this.pos.x >= width) {
            this.pos.x = 0;
        } else if (this.pos.x < 0) {
            this.pos.x = width - grid;
        }
        if (this.pos.y >= height) {
            this.pos.y = 0;
        } else if (this.pos.y < 0) {
            this.pos.y = height - grid;
        }
    }
}