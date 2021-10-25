// al click del bottone per il menu, fare apparire il menu

const openMenu = document.querySelector(".header-right > a");

const hamburgerMenu = document.querySelector(".hamburger-menu");

const closeMenu = document.querySelector(".close");

// al click del bottone del menu, appare il menu
// aggiungo la classe active presente nel css alla classe hamburger menu

openMenu.addEventListener('click',

  function() {

    hamburgerMenu.classList.add("active");

  }

);


// al click del pulsante per chiudere il menu, il menu si chiude
closeMenu.addEventListener('click',
    
    function() {
        hamburgerMenu.classList.remove("active");

    }
    
    
    
    )