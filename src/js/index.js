import '../styles/main.scss';
import Matrix from "./matrix";

window.onload = () => {
    let element = document.querySelector('#root');
    let matrix = new Matrix(20, 20, element);
}