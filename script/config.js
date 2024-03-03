const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth * 2;
canvas.height = document.documentElement.clientHeight * 2;



const birdImg = new Image()
birdImg.src = './img/bird.png';

const birdWidth = canvas.width / 15;
const birdHeight = birdWidth;
const birdX = (canvas.width / 3) - (birdWidth / 2);
const birdY = (canvas.height / 2) - (birdHeight / 2);



const pipeDownImg = new Image();
pipeDownImg.src = './img/pipeDown.png';

const pipeDownWidth = canvas.width / 5;
const pipeDownHeight = canvas.height / 3;
const pipeDownX = canvas.width - pipeDownWidth;
const pipeDownY = canvas.height - pipeDownHeight;



const pipeUpImg = new Image();
pipeUpImg.src = './img/pipeUp.png';

const pipeUpWidth = canvas.width / 5;
const pipeUpHeight = canvas.height / 3;
const pipeUpX = canvas.width - pipeUpWidth;
const pipeUpY = 0;



const backgroundImg = new Image();
// backgroundImg.src = './img/background.png';

const backgroundWidth = canvas.width;
const backgroundHeight = canvas.height;
const backgroundX = 0;
const backgroundY = 0;



const SPEED = 3.1;

export {
    ctx, 
    birdImg, birdWidth, birdHeight, birdX, birdY, 
    pipeDownImg, pipeDownWidth, pipeDownHeight, pipeDownX, pipeDownY, 
    pipeUpImg, pipeUpWidth, pipeUpHeight, pipeUpX, pipeUpY,
    backgroundImg, backgroundWidth, backgroundHeight, backgroundX, backgroundY,
    SPEED
};