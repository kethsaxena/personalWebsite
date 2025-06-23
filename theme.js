const themeToggle = document.getElementById("themeSwitch");


function setTheme(themeName){
    const html = document.querySelector("html") 
    console.log(html);
    html.setAttribute("data-theme",themeName);
}

function toggleTheme(event){
    if(event.target.checked){
        setTheme("dark");
    }
    else{
        setTheme("light");
    }
}

function setInitialTheme(){
    const preferDarkMode = window.matchMedia("prefers-color-scheme:dark").matches; 
    if(preferDarkMode){
        themeToggle.checked = true;
        setTheme("dark");
    }
    else{
         themeToggle.checked = false;
        setTheme("light");
    }
}

function showIntialTheme(){
    setInitialTheme();
    themeToggle.addEventListener("change",toggleTheme)

}
//EVENT LISTENERS
document.addEventListener("DOMContentLoaded",showIntialTheme)
