let button = document.getElementById("choose");
let button2 = document.getElementById("refresh");
let colors = document.getElementById("colors");

function setup() {
    createCanvas(1500, 1000);//Creates and canvas
    background(0, 0, 0);//creates a black background
    noStroke();
 }
 
 function draw()
 {
    ellipse(mouseX,mouseY,25,25);
 }

 function mouseClicked()
 {
    // let r = random(0,255);
    // let g = random(0,255);
    // let b = random(0,255);
    // fill(r,g,b);

    //ellipse(mouseX,mouseY,100,100);
 }

 button.onclick = function(event){
    event.preventDefault();
    let userChoice = colors.value;

    if(userChoice == "red"){
        fill(255,0,0);
    }
    else if(userChoice == "green"){
        fill(0,255,0);
    }
    else if(userChoice == "blue"){
        fill(0,0,255);
    }
    else if(userChoice = "white"){
        fill(255,255,255);
    }
    
 }
 button2.onclick = function(event){
    event.preventDefault();
    createCanvas(1500, 1000);//Creates and canvas
    background(0, 0, 0);//creates a black background
    noStroke();
 }