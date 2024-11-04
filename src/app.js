


let fotos = [
    {
        "url":"img/VA1.jpg"
    },
    {
        "url":"img/VA2.jpeg"
    },
    {
        "url":"img/VA5.jpg"
    },
    {
        "url":"img/VA6.jpg"
    },
    {
        "url":"img/VA9.jpg"
    },
    {
        "url":"img/VA10.jpg"
    },
    {
        "url":"img/VA11.jfif"
    },
    {
        "url":"img/VA12.jfif"
    },
    {
        "url":"img/VA13.jfif"
    },
    {
        "url":"img/VA18.jpg"
    },
    {
        "url":"img/VA16.jpg"
    },
    {
        "url":"img/VA17.jpg"
    },
]



let atras = document.getElementById("atras");
let avanzar = document.getElementById("avanzar");
let imagen = document.getElementById("pic");
let puntos = document.getElementById("puntos");
let actual = 0;
posicionCarrusel();

atras.addEventListener('click', function(){
    actual -=1;
    if (actual==-1){
        actual= fotos.length - 1;
    }
    imagen.innerHTML =`<img class="pic" src="${fotos[actual].url}" loading="lazy">`
    posicionCarrusel()
})

avanzar.addEventListener('click', function(){
    actual +=1;
    if (actual==fotos.length){
        actual= 0;
    }
    imagen.innerHTML =`<img class="pic" src="${fotos[actual].url}" loading="lazy">`
    posicionCarrusel()
})

function posicionCarrusel(){
    puntos.innerHTML="";
    for (let i=0; i<fotos.length;i++){
        if (i==actual){
            puntos.innerHTML += '<p class="bold">.</p>'
        }
        else{
            puntos.innerHTML += '<p>.</p>'
        }
        
    }
}