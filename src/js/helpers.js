export default class Helpers {
    constructor(total = 0, element) {
        this.total = total;
        this.element = element;
        this.showTotal()
    }
    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    showTotal() {
       this.element.innerHTML = this.total;
    }
}