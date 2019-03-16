function Berry() {
    this.create = function () {
        this.pos = createVector(floor(random(width / grid)) * grid, floor(random(height / grid)) * grid)
        this.show = function () {
            fill(213, 231, 231)
            rect(this.pos.x, this.pos.y, grid, grid)
        }
    }
}