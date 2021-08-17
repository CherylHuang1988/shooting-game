const CANVAS_HEIGHT = 600;
const CANVAS_WIDTH = 1300;
const DOWN_ARROW = 40;
const UP_ARROW = 38;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const SPACE = 32;
const ENTER = 13;
let enemyPic1;
let enemyPic2;
let enemyPic3;
let enemyPic4;
let bulletImage;
let explosionImage;
let bgMusic;
let shootingSound;
let explosionSound;
let deadSound;
const scoreHolder = document.querySelector("h1 span");
const canvas = document.querySelector("#canvas");
let theRealSpeed;
let musicRate = 1

