export default class Element {
    constructor(matrix, cords) {
        this.matrix = matrix;
        this.cords = cords;
        this.value = '';
    }
    show(){
        this.cords.forEach(item => {
            this.matrix.setCell(item[0], item[1], this.value);
        })
    }
}