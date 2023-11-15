window.addEventListener("DOMContentLoaded",()=>{
    let losLiczba = Math.round(Math.random())%2;
    let grid = document.querySelector("#gridOne");
    switch (losLiczba) {
        case 0 :
        grid.classList.add("gridParrentFirst")
        grid.classList.remove("gridParrentSecond")
        break
        default :
        grid.classList.add("gridParrentSecond")
        grid.classList.remove("gridParrentFirst") 
    }
})