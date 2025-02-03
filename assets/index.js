//Funcion para mover el Roadmap a vista principal
let roadmap = document.getElementById('roadmap');
const titulo = document.querySelector('#roadmap h3');

titulo.addEventListener('click', function expandir() {
    let pestanasIzq = document.querySelectorAll('nav .menu-izq');
    let pestanasDch = document.querySelectorAll('nav .menu-dch');

    if (roadmap.style.height === '' || roadmap.style.height === '17.3rem') {
        roadmap.style.height = '45rem';
        roadmap.style.top = '8rem';
        roadmap.style.overflow = 'scroll'
        pestanasIzq.forEach(pestana =>{
            pestana.style.left = '-15rem';
        });
        pestanasDch.forEach(item =>{
            item.style.right = '-15rem';
        });
    } else {
        roadmap.style.height = '17.3rem';
        roadmap.style.top = '';
        roadmap.style.overflow = ''
        pestanasIzq.forEach(pestana =>{
            pestana.style.left = '';
        });
        pestanasDch.forEach(pestana =>{
            pestana.style.right = '';
        });  
    }
});

//Funcion para el progreso de las barras del roadmap
const stsRoad = document.querySelectorAll('.sts');

stsRoad.forEach(contenedor => {
    const barra = contenedor.querySelector('.bar');
    const check = contenedor.querySelectorAll('input[type="checkbox"]');
    const aumento = 100 / check.length;
    
    let checkCuenta = contenedor.querySelectorAll('input[type="checkbox"]:checked').length;

        barra.value =  checkCuenta * aumento;
    
})