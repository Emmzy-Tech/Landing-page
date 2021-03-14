var ham = document.getElementById('hamburger2');
let menu = document.getElementById('menu2');

function myFunction(){
    if (menu.style.width === "0px") {
    menu.style.width = "30%";
    ham.style.zIndex = "20";
    } else {
        menu.style.width = "0";
    }
    
}