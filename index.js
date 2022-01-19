window.addEventListener('load',()=>{
    var boton = document.querySelector(".language-button button");
    var line = document.querySelector(".division");
    var divButton = document.querySelector(".language-button");
    var hrMiddle = document.querySelector(".hrMiddle");
    var desplegable = document.querySelector(".desplegable");

    boton.addEventListener('click',()=>{
        if(boton.classList.contains("active")){
            boton.classList.remove('active');
            line.classList.remove('line-active');
            divButton.classList.remove('div-button-active');
            hrMiddle.classList.remove('LanguageButtonActive');
            desplegable.classList.remove('LanguageButtonActive');

        }else{
            boton.classList.add("active");
            line.classList.add('line-active');
            divButton.classList.add('div-button-active');
            hrMiddle.classList.add('LanguageButtonActive');
            desplegable.classList.add('LanguageButtonActive');
        }
    });
});