export default class Matrix {
    constructor(rows = 30, cols = 10, element) {
        this.rows = rows;
        this.cols = cols;
        this.element = element;
        this.cells = [];
        this.createMatrix()
    }
    createMatrix() {
        for(let i = 0; i < this.rows * this.cols; i++) {
            let div = document.createElement('div');
            if(i % this.cols === 0){
                div.classList.add('row-start')
            }
            this.element.appendChild(div);
            this.cells[i] = "";
        }
    }
    setCell(x, y, val) {
        let num = this._exactCell(x, y);
        this.cells[num] = val;
        this.element.children[num].setAttribute('data-game', val)
    }
    getCell(x, y) {
        let num = this._exactCell(x, y);
        return this.cells[num];
    }
    _exactCell(x, y) {
        return x - 1 + (y - 1) * this.cols
    }
}