import Element from "./element";

export default class Fruit extends Element{
    constructor(matrix, cords) {
        super(matrix, cords);
        this.value = 'fruit';
    }
}