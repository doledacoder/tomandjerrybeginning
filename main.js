let tomcat = document.querySelector("#cat");
let jerry = document.querySelector("#mouse");
let food = document.querySelector("#cheeze");
let sleep = document.querySelector("#zzz");
let clickLeft = document.querySelector(".clickLeft");
let clickRight = document.querySelector(".clickRight");
let hole = document.querySelector("#hole");
let runningJerry = document.querySelector('.runningjerry');
let runningJerryWithCheese = document.querySelector('.runningJerryWithCheese');
let catEyes = document.querySelector('#catOpenedEyes');
let catJump = document.querySelector('#tomjumps');
let catRun = document.querySelector('#runningtom');


let purr = document.querySelector("#catsleep");
let scary = document.querySelector("#scary");
let jerrysound = document.querySelector("audio#mousesound");
let danger = document.querySelector("audio#scarysound");
let attack = document.querySelector("audio#catattack");

window.addEventListener("load", moveClickHere);
function moveClickHere(){
    console.log('fct moveClickHere');
    clickLeft.classList.add("clickHereLoop");
}


tomcat.addEventListener("click", makeZZZ );
function makeZZZ(){
    console.log('fct makeZZZ');
    sleep.style.display = "block";
    clickLeft.style.display="none"
    clickRight.style.display='block';
    sleep.classList.add("magicStuff");
    purr.play();
    clickRight.classList.add('clickRightAnim');
    hole.addEventListener("click", showJerry );
}

function showJerry(){
    hole.removeEventListener('animationend', showJerry);
    console.log('showJerry');
    jerry.style.display="block";
    clickRight.style.display='none';
    jerry.classList.add("jerryStart");
    jerry.addEventListener('animationend', jerryChange);
}

function jerryChange(){
    console.log('jerryChange and stealing the cheese');
    jerry.removeEventListener('animationend', jerryChange);
    jerry.style.display='none';
    food.style.display='none';
    runningJerry.style.display='block';
    runningJerry.classList.add('stealingTheCheese');
    sleep.style.display='none';
    tomcat.style.display='none';
    catEyes.style.display='block';
    runningJerry.addEventListener('animationend', runBack);
}

function runBack(){
    console.log('fct runBack');
    runningJerry.removeEventListener('animationend', runBack);
    runningJerry.classList.add('runBackAnimation');
    runningJerry.addEventListener('animationend', jerryRunningWithCheese);
    catEyes.style.display='none';
    catJump.style.display='block';
    purr.pause();
}

function jerryRunningWithCheese(){
    runningJerry.removeEventListener('animationend',jerryRunningWithCheese);
    console.log('jerryRunningWithCheese');
    runningJerry.style.display='none';
    runningJerryWithCheese.style.display='block';
    runningJerryWithCheese.classList.add('runBack2');
    console.log('running Tom Animation');
    runningJerryWithCheese.addEventListener('animationend', goneJerry)
}

function goneJerry(){
    runningJerryWithCheese.removeEventListener('animationend',goneJerry)
    catJump.style.display='none';
    catRun.style.display='block';
    runningJerryWithCheese.style.display='none';
    catRun.classList.add('runningTomAnimation');

}





























