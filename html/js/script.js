'use strict';

const switcher = document.querySelector('.btn');
//esse metodo eo metodo toggle 
switcher.addEventListener('click', function()
{
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Escuro";
    }else{
        this.textContent = "Claro";
    }
});

   