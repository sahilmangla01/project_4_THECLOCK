

let hours = document.getElementById("hh");
let minute = document.getElementById("mm");
let second = document.getElementById("ss");
let ampm = document.getElementById("ampm");
let text = document.querySelector(".rightText");
let select = document.querySelectorAll(".slct");
let timeBox = document.querySelectorAll(".timebox")
let image = document.querySelector(".imge");
let leftText = document.querySelector(".greetText");
let hoverChange = document.querySelector('.setAlarm');


setInterval(setTime, 1000)
function setTime(){
    let date = new Date();
let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();
let hr = hh;

    
    if(hr >12){
        hr = hr-12
        
    }
    hr= (hr<12) ? "0"+hr: hr
    mm= (mm<12) ? "0"+mm : mm
    ss= (ss<12) ? "0"+ss: ss

    
    hours.innerHTML = `${hr}`;
    
    minute.innerHTML = `${mm}`;

    second.innerHTML = `${ss}`;
    
    if(hh>12){
       ampm.innerHTML = "PM" 
    }
    else{
        ampm.innerHTML = "AM"
    }

     if(hh > 7 && hh<12){
        text.innerHTML = " GRAB SOME HEALTHY BREAKFAST!!!";
     }
     else if(hh>12 && hh<18){
        text.innerHTML = " LET'S HAVE SOME LUNCH !!";
     }
    else if(hh>18 && hh<22){
        text.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    }
    else if(hh>22 &&hh<7){
        text.innerHTML = " CLOSE YOUR EYES AND GO TO SLEEP";
    }
    
}

function setAlarm(){
    let date = new Date();
let hh = date.getHours();

if(parseInt(select[0].value) === hh){
    leftText.innerHTML = "GOOD MORNING!! WAKE UP!!"
    image.src = "./Images/Component 30 – 1.svg"

}
if(parseInt(select[1].value) === hh){
    leftText.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP"
    image.src = "./Images/Component 31 – 1.svg"

}
if(parseInt(select[2].value) === hh){
    leftText.innerHTML ="GOOD EVENING !!"
    image.src = "./Images/lunch_image.png"

}
if(parseInt(select[3].value) === hh){
    leftText.innerHTML = "GOOD NIGHT !!"
    image.src = "./Images/Component 32 – 1.svg"

}


let selectIndex1 = select[0].selectedIndex;
let targetIndex1 = select[0].options[selectIndex1];



if(parseInt(selectIndex1)){
    timeBox[0].innerHTML = `${targetIndex1.innerHTML}`

}



let selectIndex2 = select[1].selectedIndex;
let targetIndex2 = select[1].options[selectIndex2];

if(parseInt(selectIndex2)){
    timeBox[1].innerHTML = `${targetIndex2.innerHTML}`
}



let selectIndex3 = select[2].selectedIndex;
let targetIndex3 = select[2].options[selectIndex3];

if(parseInt(selectIndex3)){
    timeBox[2].innerHTML = `${targetIndex3.innerHTML}`
}



let selectIndex4 = select[3].selectedIndex;
let targetIndex4 = select[3].options[selectIndex4];


if(parseInt(selectIndex4)){
    timeBox[3].innerHTML = `${targetIndex4.innerHTML}`
}





}

hoverChange.addEventListener("mouseover",()=>{
    hoverChange.innerHTML = " Party Time"
   
})
hoverChange.addEventListener("mouseout",()=>{
    hoverChange.innerHTML = " Set Alarm"
   
})






