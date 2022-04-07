const lightM = document.querySelector(".light-mode");
const darkM = document.querySelector(".darkmode")
const themeEl = document.querySelector(".theme");
let localmove = localStorage.getItem("localmove");
const rollings = themeRoller.getAttribute("data-rolling");


let rollingOn = ()=>{
    themeRoller.setAttribute("data-rolling", "on");
    darkM.style.display = "block"
    lightM.style.display = "none"
    localStorage.setItem("localmove", "moving");
}
let rollingOff = ()=>{
    themeRoller.setAttribute("data-rolling", "off")
    darkM.style.display = "none"
    lightM.style.display = "block"
    localStorage.setItem("localmove", "resting");
}

if(localmove === "moving"){
    rollingOn();
}

themeEl.addEventListener("click", ()=>{
    localmove = localStorage.getItem("localmove");
    
    if(localmove !== "moving"){
       rollingOn()
    }
    else{
       rollingOff()
    }

})