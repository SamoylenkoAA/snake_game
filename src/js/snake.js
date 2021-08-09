export default class Snake {
    constructor(matrix, cords) {
        this.matrix = matrix;
        this.cords = cords;
        this.value = 'snake';
        this.alive = true;
    }
    show() {
        this.cords.forEach(item => {
            this.matrix.setCell(item[0], item[1], this.value)
        })
    }
    move(direction) {
        if(!this.alive) {
            return
        }
        let head = this.cords[0].slice();

        switch (direction) {
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
        let tail = this.cords.pop();
        this.cords.unshift(head);

        console.log(head[0])
        this.checkAlive(head[0], head[1]);

        this.matrix.setCell(head[0], head[1], this.value)
        this.matrix.setCell(tail[0], tail[1], '')
    }

    checkAlive(cordX, cordY) {
        if( cordX >= this.matrix.rows || cordX <= 0 || cordY >= this.matrix.cols || cordY <= 0) {
            this.alive = false
        }
    }
}