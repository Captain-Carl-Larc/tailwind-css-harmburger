
//grabbing DOM elements

let navUl=document.getElementById("nav-ul")
let closeMenuBtn=document.getElementById("close-menu")
let openMenuBtn=document.getElementById("open-menu")
let menuTogglerDiv=document.getElementById("toggler-menu-cont")
let navEl=document.getElementById("nav-el")


function showMenu(){
    navUl.classList.remove("hidden")
    navUl.classList.add("flex","gap-y-2","w-screen","justify-center")
    navEl.classList.add("bg-gray-600","flex","flex-col","items-start","pl-2","pt-2","fixed","right-0","top-0","h-64")
    closeMenuBtn.classList.remove("hidden")
    openMenuBtn.classList.add("hidden")
    //menuTogglerDiv.classList.remove("justify-end")
    
}
function hideMenu(){
    navUl.classList.add("hidden")
    navEl.classList.remove("bg-red-600","bg-gray-600")
    closeMenuBtn.classList.add("hidden")
    openMenuBtn.classList.remove("hidden")
    openMenuBtn.classList.add("fixed","top-2","right-1")
    navEl.classList.remove("flex","flex-col","items-start","pl-2","pt-2","fixed","right-0","top-0","h-64")
    //menuTogglerDiv.classList.add("flex","justify-end")

    //restorePosition()
}

function restorePosition(){
   
}