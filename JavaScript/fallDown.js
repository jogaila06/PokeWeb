let isMovedDown = false;

function leeDropDown(){
   const element = document.getElementsByClassName("title")[0];
   const navBar = document.getElementsByClassName("navBar")[0];

    if (isMovedDown) {
        navBar.classList.remove("active");
        setTimeout(() => {
        document.querySelectorAll(".lee > div").forEach(el => {el.style.display = "none";}); 
        document.querySelectorAll(".jogaila > div").forEach(el => {el.style.display = "none";});
        }, 500)
        
        
    } else {
        navBar.classList.add("active");
        document.querySelectorAll(".lee > div").forEach(el => {el.style.display = "flex";});
    }

    isMovedDown = !isMovedDown;
}

function jogailaDropDown(){
   const element = document.getElementsByClassName("title")[0];
   const navBar = document.getElementsByClassName("navBar")[0];

    if (isMovedDown) {
        navBar.classList.remove("active");
        setTimeout(() => {
        document.querySelectorAll(".jogaila > div").forEach(el => {el.style.display = "none";});
        document.querySelectorAll(".lee > div").forEach(el => {el.style.display = "none";});
        }, 500)
        
    } else {
        navBar.classList.add("active");
        document.querySelectorAll(".jogaila > div").forEach(el => {el.style.display = "flex";});
    }

    isMovedDown = !isMovedDown;
}

