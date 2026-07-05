const canvas=document.getElementById("game");
const ctx=canvas.getContext("2d");

let timer=300;
let kills=0;

const timerText=document.getElementById("timer");
const killsText=document.getElementById("kills");

const player={
x:450,
y:300,
size:20,
speed:4
};

let keys={};

let enemies=[];

function spawnEnemy(){

enemies.push({
x:Math.random()*860,
y:Math.random()*560,
size:20,
alive:true
});

}

for(let i=0;i<8;i++)
spawnEnemy();

document.addEventListener("keydown",e=>{

keys[e.key]=true;

if(e.code==="Space") attack();

});

document.addEventListener("keyup",e=>{

keys[e.key]=false;

});

function movePlayer(){

if(keys["w"]) player.y-=player.speed;
if(keys["s"]) player.y+=player.speed;
if(keys["a"]) player.x-=player.speed;
if(keys["d"]) player.x+=player.speed;

player.x=Math.max(0,Math.min(canvas.width-player.size,player.x));
player.y=Math.max(0,Math.min(canvas.height-player.size,player.y));

}

function attack(){

enemies.forEach(e=>{

if(!e.alive) return;

let dx=e.x-player.x;
let dy=e.y-player.y;

let dist=Math.sqrt(dx*dx+dy*dy);

if(dist<45){

e.alive=false;

kills++;

timer+=20;

killsText.innerText=kills;
timerText.innerText=timer;

}

});

}

function enemyAI(){

enemies.forEach(e=>{

if(!e.alive) return;

let dx=player.x-e.x;
let dy=player.y-e.y;

let d=Math.sqrt(dx*dx+dy*dy);

e.x+=dx/d*1;
e.y+=dy/d*1;

if(d<18){

timer--;

timerText.innerText=timer;

}

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="cyan";
ctx.fillRect(player.x,player.y,player.size,player.size);

enemies.forEach(e=>{

if(!e.alive) return;

ctx.fillStyle="red";

ctx.fillRect(e.x,e.y,e.size,e.size);

});

}

function gameLoop(){

movePlayer();

enemyAI();

draw();

if(timer<=0){

alert("GAME OVER");

location.reload();

}

requestAnimationFrame(gameLoop);

}

setInterval(()=>{

timer--;

timerText.innerText=timer;

},1000);

gameLoop();