const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body")
const header = document.querySelector(".header")
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");


btnHamburger.addEventListener("click", function(){
    console.log("inside A eventlistener");
    if(header.classList.contains("open")){
        //when hamburger close
        body.classList.remove("noscroll");
        header.classList.remove("open");
        fadeElems.forEach(function(element){
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        })
    
    }else{//hamburger open
        body.classList.add("noscroll");
        header.classList.add("open");
        fadeElems.forEach(function(element){
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        })
    }
})

