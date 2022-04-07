

// ======== this part is all for theme toggling 
const lightMode = document.querySelector(".light-mode");
const darkMode = document.querySelector(".darkmode");
const themeContainer = document.querySelector(".theme-container");
const themeRoller = document.querySelector(".theme-rolling")
let themes = localStorage.getItem("themes");


const enableDarkMode = ()=>{
    document.body.classList.add("darktime");
    // lightMode.style.display = "none"
    // darkMode.style.display = "block"
    localStorage.setItem("themes", "themeEnabled");
}

const disableDarkMode = ()=>{
    document.body.classList.remove("darktime");
    // lightMode.style.display = "block"
    // darkMode.style.display = "none"
    localStorage.setItem("themes", null);
}

 if(themes === "themeEnabled"){
     enableDarkMode();
 }


themeContainer.addEventListener("click", ()=>{
    themes = localStorage.getItem("themes")
   if(themes !== "themeEnabled"){
       enableDarkMode();
      
   }
   else{
       disableDarkMode();
       console.log("disabled");
   }
})

//  for the second add event listenner for the toggle



