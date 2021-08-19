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
        switch (event.key) {
            case 'ArrowUp':
                if(snake.course !== 40)
                    snake.newCourse = 38
                break;
            case 'ArrowDown':
                if(snake.course !== 38)
                    snake.newCourse = 40
                break;
            case 'ArrowLeft':
                if(snake.course !== 39)
                    snake.newCourse = 37
                break;
            case 'ArrowRight':
                if(snake.course !== 37)
                    snake.newCourse = 39
                break;
        }
    })

    setInterval(() => {
        if(snake.eat){

            let cordX, cordY;
            do{
                cordX = randomInteger(1, matrix.cols);
                cordY = randomInteger(1, matrix.rows);
                snake.eat = false;
            }while (matrix.getCell(cordX, cordY) !== '')

            new Fruit(matrix, [[cordX, cordY]]).show()
        }
        snake.move()
    }, 200)
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}