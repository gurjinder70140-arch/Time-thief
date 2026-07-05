const canvas=document.getElementById("game");
const ctx=canvas.getContext("2d");

let timer=300;
let kills=0;
let gameActive=true;

const timerText=document.getElementById("timer");
const killsText=document.getElementById("kills");

const player={
    x:450,
    y:300,
    size:20,
    speed:5
};

let keys={};
let enemies=[];
let deadEnemies=[];

function spawnEnemy(){
    const side=Math.floor(Math.random()*4);
    let x,y;
    
    if(side===0){x=Math.random()*canvas.width;y=-20;}
    else if(side===1){x=canvas.width+20;y=Math.random()*canvas.height;}
    else if(side===2){x=Math.random()*canvas.width;y=canvas.height+20;}
    else{x=-20;y=Math.random()*canvas.height;}
    
    enemies.push({
        x:x,
        y:y,
        size:20,
        alive:true
    });
}

// Spawn initial enemies
for(let i=0;i<5;i++) spawnEnemy();

document.addEventListener("keydown",e=>{
    keys[e.key]=true;
    if(e.code==="Space") attack();
});

document.addEventListener("keyup",e=>{
    keys[e.key]=false;
});

function movePlayer(){
    if(keys["w"] || keys["W"]) player.y-=player.speed;
    if(keys["s"] || keys["S"]) player.y+=player.speed;
    if(keys["a"] || keys["A"]) player.x-=player.speed;
    if(keys["d"] || keys["D"]) player.x+=player.speed;
    
    // Keep player in bounds
    player.x=Math.max(0,Math.min(canvas.width-player.size,player.x));
    player.y=Math.max(0,Math.min(canvas.height-player.size,player.y));
}

function attack(){
    for(let i=0;i<enemies.length;i++){
        if(!enemies[i].alive) continue;
        
        let dx=enemies[i].x-player.x;
        let dy=enemies[i].y-player.y;
        let dist=Math.sqrt(dx*dx+dy*dy);
        
        if(dist<50){
            enemies[i].alive=false;
            kills++;
            timer+=15;
            
            killsText.innerText=kills;
            timerText.innerText=timer;
            
            // Spawn new enemy when one is defeated
            if(Math.random()>0.3) spawnEnemy();
        }
    }
}

function enemyAI(){
    for(let i=0;i<enemies.length;i++){
        if(!enemies[i].alive) continue;
        
        let e=enemies[i];
        let dx=player.x-e.x;
        let dy=player.y-e.y;
        let d=Math.sqrt(dx*dx+dy*dy);
        
        // Prevent division by zero
        if(d>0){
            e.x+=dx/d*1.5;
            e.y+=dy/d*1.5;
        }
        
        // Damage when enemy touches player
        if(d<20){
            timer-=0.5;
            timerText.innerText=Math.floor(timer);
        }
        
        // Remove enemies far from canvas
        if(e.x<-50||e.x>canvas.width+50||e.y<-50||e.y>canvas.height+50){
            e.alive=false;
        }
    }
    
    // Clean up dead enemies every few frames
    if(kills%10===0){
        enemies=enemies.filter(e=>e.alive);
    }
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    // Draw player
    ctx.fillStyle="cyan";
    ctx.fillRect(player.x,player.y,player.size,player.size);
    
    // Draw enemies
    ctx.fillStyle="red";
    for(let i=0;i<enemies.length;i++){
        if(enemies[i].alive){
            ctx.fillRect(enemies[i].x,enemies[i].y,enemies[i].size,enemies[i].size);
        }
    }
}

function gameLoop(){
    if(!gameActive) return;
    
    movePlayer();
    enemyAI();
    draw();
    
    if(timer<=0){
        gameActive=false;
        alert("GAME OVER! Final Score: "+kills);
        location.reload();
    }
    
    requestAnimationFrame(gameLoop);
}

let lastTimerUpdate=Date.now();
setInterval(()=>{
    if(gameActive){
        timer--;
        timerText.innerText=Math.floor(timer);
    }
},1000);

gameLoop();