// al click del bottone per il menu, fare apparire il menu

const element = document.querySelector('.fa-bars');

const menuOpen = document.querySelector('.hamburger-menu');

const menuClose = document.querySelector('.close');

// al click del bottone del menu, appare il menu

element.addEventListener('click',

  function() {

    menuOpen.style.display = "block";

  }

);


// al click del pulsante per chiudere il menu, il menu si chiude
menuClose.addEventListener('click',
    
    function() {
        menuOpen.style.display = "none";
    }
    
    
    
    )