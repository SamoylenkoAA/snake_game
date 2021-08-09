import '../styles/main.scss';
import Matrix from "./matrix";
import Snake from "./snake";

window.onload = () => {
    let element = document.querySelector('#root');
    let matrix = new Matrix(20, 20, element);

    let snake = new Snake(matrix, [[8, 2],[7, 2],[6, 2],[5, 2]]);
    snake.show()

    setInterval(() => {
        snake.move(39)
    }, 1000)
}