let startbtn = document.querySelector(".start-btn");
let pausebtn = document.querySelector(".pause-btn");
let resetbtn = document.querySelector(".reset-btn")
let showtime = document.querySelector(".display");

let turn =1;
let time = 0;
let min = 0;
let sec = 0;
let timer;


let formatdisplay =  (num)=>{
    return num<10 ? "0"+num : num;
}

startbtn.addEventListener("click",()=>{
    if(turn==1){
        startbtn.classList.add("hide");
        pausebtn.classList.remove("hide");
        resetbtn.classList.remove("hide");
        turn =0;
    }
    clearInterval(timer);
    timer = setInterval(()=>{
        time++;
        updatedisplay();
    },10);
    
})



let updatedisplay = ()=>{
    let csec = time%100;
    if(csec==0){
        sec++;
        sec = sec%60;
        if(sec==0){
        min++;
        min = min%24;
    }
    }
    showtime.textContent = `${formatdisplay(min)}:${formatdisplay(sec)}:${formatdisplay(csec)}`;
}


// whenever pause button is pressed use this function

pausebtn.addEventListener("click",()=>{
    if(turn==0){
        startbtn.classList.remove("hide");
        pausebtn.classList.add("hide");
        turn =1;
    }
   clearInterval(timer);
})

// whenever reset button is pressed use this function

resetbtn.addEventListener("click",()=>{
    showtime.textContent = `${"00"}:${"00"}:${"00"}`;
    time = 0;
    min = 0;
    sec = 0;
    clearInterval(timer);
    pausebtn.classList.add("hide");
    resetbtn.classList.add("hide");
    turn=1;
    startbtn.classList.remove("hide");
})

 

