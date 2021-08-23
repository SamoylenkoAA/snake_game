import '../styles/main.scss';
import Swal from "sweetalert2";
import Matrix from "./matrix";
import Snake from "./snake";
import Fruit from "./fruit";
import Wall from "./wall";
import Helpers from "./helpers";

window.onload = () => {
    let element = document.querySelector('#root');
    let totalShow = document.querySelector('#total-show');

    let matrix = new Matrix(20, 20, element);

    let snake = new Snake(matrix, [[8, 2],[7, 2],[6, 2],[5, 2]]);
    snake.show()

    let fruit = new Fruit(matrix, [[5, 5]]);
    fruit.show();

    let wall =  new Wall(matrix, [[4, 2],[4, 3],[4, 4],[10, 5],[11, 5],[11, 6],[11, 7],[11, 8],[18, 1],[19, 1],[20, 1],[20, 2]])
    wall.show();

    let helpers = new Helpers( 0 , totalShow);

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

    let interval = setInterval(() => {
        if(!snake.alive){
            Swal.fire('Game Over!')
            clearInterval(interval);
        }

        if(snake.eat){
            helpers.total++;
            helpers.showTotal();

            let cordX, cordY;
            do{
                cordX = helpers.randomInteger(1, matrix.cols);
                cordY = helpers.randomInteger(1, matrix.rows);
                snake.eat = false;
            }while (matrix.getCell(cordX, cordY) !== '')

            new Fruit(matrix, [[cordX, cordY]]).show()
        }
        snake.move()
    }, 200)
}
