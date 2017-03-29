let tomcat = document.querySelector("#cat");
let jerry = document.querySelector("#mouse");
let food = document.querySelector("#cheeze");
let sleep = document.querySelector("#zzz");
let info = document.querySelector(".info");
let bgr = document.querySelector("#bgr");


let purr = document.querySelector("audio#catsleep");
let scary = document.querySelector("audio#scary");
let jerrysound = document.querySelector("audio#mousesound");
let danger = document.querySelector("audio#scarysound");
let attack = document.querySelector("audio#catattack");



tomcat.addEventListener("click", makeZZZ );
function makeZZZ(){
    sleep.style.display = "block";
    sleep.classList.add("magicStuff");
    purr.play();
    info.innerHTML="Press on cat hole to continue";
    bgr.addEventListener("click", showJerry );
}

function showJerry(){

    jerry.style.display="block";
}
