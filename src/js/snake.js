export default class Snake {
    constructor(matrix, cords) {
        this.matrix = matrix;
        this.cords = cords;
        this.value = 'snake';
        this.course = 39;
        this.newCourse = this.course;
        this.alive = true;
    }
    show() {
        this.cords.forEach(item => {
            this.matrix.setCell(item[0], item[1], this.value)
        })
    }
    move() {
        if(!this.alive) {
            return
        }
        this.course = this.newCourse;
        let head = this.cords[0].slice();

        switch (this.newCourse) {
            case 39:
                head[0]++
                break;
            case 37:
                head[0]--
                break;
            case 40:
                head[1]++
                break;
            case 38:
                head[1]--
                break;
        }

        if(!this.checkAlive(head)){
            this.alive = false;
            return;
        }

        let tail = this.cords.pop();

        this.matrix.setCell(tail[0], tail[1], '')
        this.matrix.setCell(head[0], head[1], this.value)
        this.cords.unshift(head);
    }

    checkAlive(head) {
        return head[0] >= 1 && head[0] <= this.matrix.cols && head[1] >= 1 && head[1] <= this.matrix.rows
    }
}