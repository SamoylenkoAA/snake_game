import Element from "./element";

export default class Snake extends Element{
    constructor(matrix, cords) {
        super(matrix, cords)
        this.value = 'snake';
        this.course = 39;
        this.newCourse = this.course;
        this.alive = true;
        this.eat = false;
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
        let checkCell = this.matrix.getCell(head[0], head[1])

        if(!this.checkAlive(head) || checkCell === 'snake' || checkCell === 'wall'){
            this.alive = false;
            return;
        }

        if(checkCell === 'fruit') {
            this.eat = true;
        }else {
            let tail = this.cords.pop();
            this.matrix.setCell(tail[0], tail[1], '')
        }

        this.matrix.setCell(head[0], head[1], this.value)
        this.cords.unshift(head);
    }

    checkAlive(head) {
        return head[0] >= 1 && head[0] <= this.matrix.cols && head[1] >= 1 && head[1] <= this.matrix.rows
    }
}