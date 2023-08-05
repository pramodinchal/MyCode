let workTitle = document.getElementById("work");
let breakTitle = document.getElementById("break");

let workTime  = 25;
let breakTime = 5;
let counter;
let workMinutes;


let seconds = "00";

// Display
window.onload = () =>{
    document.getElementById("min").innerHTML = workTime;
    document.getElementById("sec").innerHTML = seconds;

    workTitle.classList.add("active");
}

// Start Timer
function start(){
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    let timerFunction = () =>{
        document.getElementById("min").innerHTML = workMinutes;
        document.getElementById("sec").innerHTML = seconds;
    
        seconds = seconds - 1;

        if(seconds === 0){
            workMinutes = workMinutes - 1;
            if(workMinutes === -1){
                if(breakCount % 2 === 0){

                    workMinutes = breakMinutes;
                    breakCount++;

                    workTitle.classList.remove("active");
                    breakTitle.classList.add("active");
                }else{
                    workMinutes = workTime;
                    breakCount++

                    breakTitle.classList.remove("active");
                    workTitle.classList.add("active");
                }
            }
            seconds = 59;
        }
    }

    counter  = setInterval(timerFunction, 1000);
}


function reset(){
  
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
 
   seconds = 0; 
  clearInterval(counter);
  workTime  = 25;
  breakTime = 5;
}

function pause(){
 
    clearInterval(counter);
}