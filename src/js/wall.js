import Element from "./element";

export default class Wall extends Element{
    constructor(matrix, cords) {
        super(matrix, cords);
        this.value = 'wall'
    }
}