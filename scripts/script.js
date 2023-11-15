window.addEventListener("DOMContentLoaded", () =>{
    sideBar = document.querySelector("#mySideBar");
    openBtn = document.querySelector("#openSbBtn");
    closeBtn = document.querySelector("#closeSbBtn");
    openBtn.addEventListener("click", () =>{
        sideBar.classList.add("openedSideBar")
        sideBar.classList.remove("closedSideBar")
        document.querySelector("#chowac").style.marginLeft = "250px"
    })
    closeBtn.addEventListener("click", () =>{
        sideBar.classList.add("closedSideBar")
        sideBar.classList.remove("openedSideBar")
        document.querySelector("#chowac").style.marginLeft = "74px"
    })
})