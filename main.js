// let photo1 = document.getElementById("#photo1");
// let photo2 = document.getElementById("#photo2");
// let photo3 = document.getElementById("#photo3");
// let photo4 = document.getElementById("#photo4");
// let photo5 = document.getElementById("#photo5");
// let photo6 = document.getElementById("#photo6");

// let para1 = document.getElementById("#para1");
// let para2 = document.getElementById("#para2");
// let para3 = document.getElementById("#para3");
// let para4 = document.getElementById("#para4");
// let para5 = document.getElementById("#para5");
// let para6 = document.getElementById("#para6");

// photo1.onclick = function photoClick() {
//     para1.innerHTML = "A photo of me this past wrestling season. I Started wrestling 9th grade and plan to continue the rest of High School. The weight class I wrestle is 121 pounds";
//     alert("clicked");
// }

// main.js
document.getElementById("photo1").onclick = function () {
    document.getElementById("para1").innerHTML = "A photo of me this past wrestling season. I started wrestling in 9th grade and plan to continue throughout High School. The weight class I wrestle is 121 pounds.";
    document.getElementById("para1").style.fontSize = "50px"
    alert("Clicked photo 1!");
};

document.getElementById("photo2").onclick = function () {
    document.getElementById("para2").innerHTML = "A photo of me when I was a child with my family when we went to McDonals";
    document.getElementById("para2").style.fontSize = "50px"
    alert("Clicked photo 2!");
};

document.getElementById("photo3").onclick = function () {
    document.getElementById("para3").innerHTML = "A photo of my family at my sister's military graduation last year, She had been gone for a few months to complete basic training, This was the first time we were able to see her in person for a few months";
    document.getElementById("para3").style.fontSize = "50px"
    alert("Clicked photo 3!");
};

document.getElementById("photo4").onclick = function () {
    document.getElementById("para4").innerHTML = "A photo of me with the President's Education Awards program, I had got it in 6th or 7th grade. The requirments to recieve it was have an A or above 90% in all classes. This was the first award i recieved";
    document.getElementById("para4").style.fontSize = "50px"
    alert("Clicked photo 4!");
};

document.getElementById("photo5").onclick = function () {
    document.getElementById("para5").innerHTML = "A photo of me as a cub scout when i was younger";
    document.getElementById("para5").style.fontSize = "50px"
    alert("Clicked photo 5!");
};

document.getElementById("photo6").onclick = function () {
    document.getElementById("para6").innerHTML = "A photo of me on a kayak adventure. My Dad owns kayakes so we go to a river from time to time to kayake there";
    document.getElementById("para6").style.fontSize = "50px"
    alert("Clicked photo 6!");
};