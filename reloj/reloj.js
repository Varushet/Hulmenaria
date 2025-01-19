
        //Funcion para crear los contadores de tiempo
        const roseton = document.getElementById('roseton');
        const tiempo = document.getElementById('tiempo');
        let idAnadida = 0;

        roseton.addEventListener('click', function(){
            let accion = document.createElement('img');

            accion.src = '../assets/iconos/seccion.svg';
            accion.classList.add('filaVelas');
            accion.setAttribute('id', `vela${idAnadida}`);
            idAnadida++;

            tiempo.appendChild(accion);
        });

        //Funcion para mostrar los paneles del editor
        let evento = document.getElementById('evento');
        let horarioEventos = document.getElementById('horarioEventos')

        evento.addEventListener('click', function(){
            horarioEventos.style.display = 'block';
            setTimeout(function() {
                horarioEventos.style.height = '30rem';
                horarioEventos.style.backgroundSize = '100% 100%';
            }, 500);
            
        });
        
        //Funcion para crear el evento y darle contenido y lugar
        const buttEvento = document.getElementById('buttEvento');

        buttEvento.addEventListener('click', function () {
            let hora = document.getElementById('elegirHora').value;
            let texto = document.getElementById('anadirEvento').value;
            let titulo = document.getElementById('tituloDelEvento').value;

            let objeto = document.createElement('span');
            let nombre = document.createElement('h6');
            let cuerpo = document.createElement('p');
            
            objeto.classList.add(hora);
            objeto.classList.add('filaEvento');
            nombre.innerText = titulo;
            cuerpo.innerText = texto;

            tiempo.appendChild(objeto);
            objeto.appendChild(nombre);
            objeto.appendChild(cuerpo);
        })

        //Funcion para cerrar los paneles del editor
        let cualquiera = document.querySelectorAll('aside div');
        let cierre = document.getElementById('cierre');

        cierre.addEventListener('click', function cierre (){
            cualquiera.forEach(function(panel) {
                panel.style.display = 'none';
                panel.style.height = '';
                panel.style.backgroundSize = '';
            });
        });
    