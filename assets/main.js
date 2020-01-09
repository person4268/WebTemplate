//style="color:#eaeaea; background-color: #1e1c21"

state = 0; //light, 1 is dark
darkModeButton = document.getElementById("darkModeBtn")

darkModeButton.addEventListener("click", ()=>{
    if(state) state = 0
    else state = 1

    if(state) {
        document.body.setAttribute("style", "color:#eaeaea; background-color: #1e1c21");
        darkModeButton.innerText = "Light Mode";
    } else {
        document.body.removeAttribute("style");
        darkModeButton.innerText = "Dark Mode";
    }

});
