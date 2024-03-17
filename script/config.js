
export default class Config {
    constructor() { 
    // IMGS ----------------------------------------------------------------

    // SOUNDS ----------------------------------------------------------------
    this.dieSound = new Audio;
    this.dieSound.src = './sounds/die sound.mp3';

    this.flySound = new Audio();
    this.flySound.src = './sounds/fly sound.mp3';

    this.scoreSound = new Audio();
    this.scoreSound.src = './sounds/score sound.mp3';
        
    // ELEMENTS ----------------------------------------------------------------
    this.newGameBtn = document.getElementById("new-game-btn");
    this.continueBtn = document.getElementById("continue-btn");
    
    this.gameInfo = document.querySelector(".game-info");

    this.scoreBox = document.querySelector(".score__count");
    this.recordBox = document.querySelector(".record__count");
    
    this.gameOverWindow = document.querySelector(".game-over-window");
    this.gameOverWindowScore = document.querySelector(".game-over-window__score");
    

    
    // FIELD ------------------------------------------------------------------
    this.field = document.getElementById('canvas');
    this.fieldWidth = document.documentElement.clientWidth;
    this.fieldHeight = document.documentElement.clientHeight;
    

  
    // PIPE ------------------------------------------------------------------
    this.pipeDownImg = new Image();
    this.pipeDownImg.src = './imgs/pipeDown.svg';

    this.pipeUpImg = new Image();
    this.pipeUpImg.src = './imgs/pipeUp.svg';



    // this.PIPE_WIDTH = this.fieldWidth / 4;
    // this.PIPE_HEIGHT = this.fieldHeight / 3;

    // // средняя высота трубы, с расчетом на то, что pipeHole составляет одну четвертую от трубы, а трубы одинаковые
    // this.PIPE_HEIGHT = this.fieldHeight * 4 / 9;
    // // сумма высот верхней и нижней труб
    // this.SUM_PIPE_HEIGHT = Math.round(this.fieldHeight * 8 / 9);
    // // минимальная возможная высота трубы
    // this.PIPE_HEIGHT_MIN = Math.floor(this.fieldHeight / 5);
    // // максимальная возможная высота трубы
    // this.PIPE_HEIGHT_MAX = Math.ceil(this.fieldHeight / 1.5);
    // this.PIPE_HOLE = this.fieldHeight - this.SUM_PIPE_HEIGHT;




    this.PIPE_WIDTH = this.fieldWidth / 4;

    // средняя высота трубы, с расчетом на то, что pipeHole составляет одну четвертую от трубы, а трубы одинаковые
    // this.PIPE_HEIGHT = (this.fieldHeight - this.PIPE_HEIGHT / 4) / 2;
    this.PIPE_HEIGHT = this.fieldHeight * 4 / 10; // this.fieldHeight * 4 / 9

    // промежуток между трубами
    this.PIPE_HOLE = this.PIPE_HEIGHT / 4;
    // сумма высот верхней и нижней труб
    this.SUM_PIPE_HEIGHT = this.PIPE_HEIGHT * 2;
    // минимальная возможная высота трубы
    this.PIPE_HEIGHT_MIN = this.PIPE_HEIGHT / 2;
    // максимальная возможная высота трубы
    this.PIPE_HEIGHT_MAX = this.PIPE_HEIGHT * 1.5;


    // this.PIPE_UP_HEIGHT = Math.floor(Math.random() * (this.PIPE_HEIGHT_MAX - this.PIPE_HEIGHT_MIN + 1)) + this.PIPE_HEIGHT_MIN;
    // this.PIPE_DOWN_HEIGHT = this.SUM_PIPE_HEIGHT - this.PIPE_UP_HEIGHT;
    // this.PIPE_HOLE = this.PIPE_HEIGHT / 4 ;




    this.PIPE_X = this.fieldWidth;
    this.PIPE_UP_Y = 0;
    // this.PIPE_DOWN_Y = this.fieldHeight - this.PIPE_HEIGHT;

    this.PIPE_GAP = this.PIPE_WIDTH * 2.5; // 3


    this.PIPE_PADDING = 50;
    this.PIPE_MOVE_SPEED = 3;


    this.PIPE_SPAWN_POINT = this.fieldWidth - this.PIPE_GAP;

    // this.PIPE_SCORE_POINT = this.BIRD_X; 
    

    // BIRD ------------------------------------------------------------------
    this.birdImg1 = new Image();
    this.birdImg1.src = './imgs/bird-1.svg';

    this.birdImg2 = new Image();
    this.birdImg2.src = './imgs/bird-2.svg';

    this.birdImg3 = new Image();
    this.birdImg3.src = './imgs/bird-3.svg';

    this.birdImg4 = new Image();
    this.birdImg4.src = './imgs/bird-4.svg';

    this.birdImg5 = new Image();
    this.birdImg5.src = './imgs/bird-5.svg';

    this.birdImg6 = new Image();
    this.birdImg6.src = './imgs/bird-6.svg';

    this.birdImg7 = new Image();
    this.birdImg7.src = './imgs/bird-7.svg';

    this.birdImg8 = new Image();
    this.birdImg8.src = './imgs/bird-8.svg';

    this.birdImg9 = new Image();
    this.birdImg9.src = './imgs/bird-9.svg';

    this.birdStates = [this.birdImg1, this.birdImg2, this.birdImg3, this.birdImg4, this.birdImg5, this.birdImg6, this.birdImg7, this.birdImg8, this.birdImg9];

    this.BIRD_WIDTH = Math.floor(this.PIPE_WIDTH / 3); // 2
    this.BIRD_HEIGHT = Math.floor(this.PIPE_HOLE / 4); // 5

    this.BIRD_X = Math.floor(this.fieldWidth / 3);
    this.BIRD_Y = Math.floor(this.fieldHeight / 2);
    // this.BIRD_X = Math.floor((this.fieldWidth / 3) - (this.BIRD_WIDTH / 2));
    // this.BIRD_Y = Math.floor((this.fieldHeight / 2) - (this.BIRD_HEIGHT / 2));

    this.BIRD_ROTATION_DEGREE = 0;
    // this.ONE_DEGREE = Math.PI / 180;
    // this.BIRD_ROTATION_ANGLE = this.BIRD_ROTATION_DEGREE * this.BIRD_ROTATION;

    this.BIRD_FLY_SPEED = this.PIPE_HOLE / 1.5;
    this.BIRD_FALL_DELAY = -3
    this.BIRD_FALL_START_SPEED = 0.1;
    this.BIRD_ANIMATION_SPEED = 10;
    this.PIPE_SCORE_POINT = this.BIRD_X;



    // BACKGROUND ------------------------------------------------------------------
    this.bgImg = new Image();
    this.bgImg.src = './imgs/sun.svg';

    this.BG_HEIGHT = this.fieldHeight * 0.75;
    this.BG_WIDTH = this.BG_HEIGHT;
    this.BG_X = this.fieldWidth / 2;
    this.BG_Y = 0;
    


    // GROUND ----------------------------------------------------------------
    this.groundImg = new Image();
    this.groundImg.src = './imgs/ground-2.svg';

    this.GROUND_WIDTH = this.fieldWidth;
    this.GROUND_HEIGHT = this.fieldHeight / 30;
    this.GROUND_X = 0;
    this.GROUND_Y = this.fieldHeight - this.GROUND_HEIGHT;
    }
}    