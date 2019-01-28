import Paddle from './paddle.js';



let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');



const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);



https://discordapp.com/channels/533422262460874762/533422262460874765/536779017769058304
