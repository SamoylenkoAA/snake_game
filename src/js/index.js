import '../styles/main.scss';
import Matrix from "./matrix";
import Snake from "./snake";
import Fruit from "./fruit";

window.onload = () => {
    let element = document.querySelector('#root');
    let matrix = new Matrix(20, 20, element);

    let snake = new Snake(matrix, [[8, 2],[7, 2],[6, 2],[5, 2]]);
    snake.show()

    let fruit = new Fruit(matrix, [[5, 5]]);
    fruit.show();

    document.addEventListener('keydown', (event) => {
        console.log(event.key);
        switch (event.key) {
            case 'ArrowUp':
                snake.course = 38
                break;
            case 'ArrowDown':
                snake.course = 40
                break;
            case 'ArrowLeft':
                snake.course = 37
                break;
            case 'ArrowRight':
                snake.course = 39
                break;
        }
    })

    setInterval(() => {
        snake.move()
    }, 200)
}