const   body = document.querySelector('body');
const   nav = document.querySelector('nav');
const    modeToggle = document.querySelector('.dark-light');
const    searchToggle = document.querySelector('.searchToggle');
const    silderbarClose = document.querySelector('.silderbarClose');
const    sidebarOpen = document.querySelector('.sidebarOpen');


let getMode = localStorage.getItem('mode');
if (getMode && getMode === "dark-mode") {
    body.classList.toggle("dark")
}

modeToggle.addEventListener('click', ()=>{
    modeToggle.classList.toggle('active');
    body.classList.toggle("dark")

    if(!body.classList.contains("dark")){
        localStorage.setItem("mode" , "light-mode")
    }else{
        localStorage.setItem("mode" , "dark-mode")
    }
})



searchToggle.addEventListener('click', ()=>{
    searchToggle.classList.toggle('active');
    
})


sidebarOpen.addEventListener('click', ()=>{
    nav.classList.add('active');
    
})
silderbarClose.addEventListener('click', ()=>{
    nav.classList.remove('active');
    
})