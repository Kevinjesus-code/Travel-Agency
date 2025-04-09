const rightbtn = document.querySelector(".adelante");
const leftbtn = document.querySelector(".atras");

const content = document.querySelector(".slider");



document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const content = document.querySelector(".slider");

        if (content) {
            content.scrollLeft = 1633; 
        }
    }, 600);
});
rightbtn.addEventListener("click", ()=>{
    content.scrollLeft+=326 ;
})
leftbtn.addEventListener("click", ()=>{
    content.scrollLeft-=326;
})
const testimonios = [
    "Arigbi",  
    "Vanya",   
    "Ksenya",  
    "Chan",    
    "Dmitry",  
    "Alex",    
    "Alena",   
    "Victoria",
    "Pavel",   
    "Angel",   
    "Tony"     
];

let indiceActual = 5; 
function cambiarTestimonio(direccion) {
    let nuevoIndice = indiceActual + direccion;

    if (nuevoIndice >= 0 && nuevoIndice < testimonios.length) {
        indiceActual = nuevoIndice;

        let nameElement = document.getElementById("name");

       
        nameElement.style.opacity = -1;


        setTimeout(() => {
            nameElement.textContent = testimonios[indiceActual];

           
            nameElement.style.opacity = 1;
        }, 400);
    }


    document.querySelector(".atras").disabled = (indiceActual === 0);
    document.querySelector(".adelante").disabled = (indiceActual === testimonios.length - 1);
}
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetMenu = document.getElementById(button.getAttribute('data-target'));
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== targetMenu) menu.parentElement.classList.remove('open');
        });
        button.parentElement.classList.toggle('open');
    });
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('open');
        });
    }
});


  const checkbox = document.getElementById('check');
  const menu = document.getElementById('menu');

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      menu.classList.add('active');
    } else {
      menu.classList.remove('active');
    }
  });

  // Opcional: cerrar el menú al hacer clic en un enlace
  const items = document.querySelectorAll('.menu .item .X');
  items.forEach(item => {
    item.addEventListener('click', () => {
      checkbox.checked = false;
      menu.classList.remove('active');
    });
  });


  document.querySelectorAll('.icon-toggle').forEach(icon => {
    icon.addEventListener('click', () => {
      const targetId = icon.getAttribute('data-target');
      const targetDiv = document.getElementById(targetId);
      const iconElement = icon.querySelector('i');

      // Toggle de rotación
      iconElement.classList.toggle('icon-rotate');
      
    });
  });




  document.addEventListener("DOMContentLoaded", () => {
    const icon = document.querySelector('.icon-toggle i[data-target="Location"]');
    const locationDiv = document.querySelector('.Location');
    const closeBtn = document.querySelector('.close-btn');

    // Ocultar al inicio
    locationDiv.classList.add('hidden');

    // Mostrar y ocultar al hacer clic en el icono
    icon.addEventListener("click", () => {
      locationDiv.classList.toggle('fullscreen');
      locationDiv.classList.toggle('hidden');
    });

    // Cerrar al hacer clic en el botón de cierre
    closeBtn.addEventListener("click", () => {
      locationDiv.classList.add('hidden');
      locationDiv.classList.remove('fullscreen');
    });
  });



  document.addEventListener("DOMContentLoaded", () => {
    // Función para manejar el clic en los íconos
    document.querySelectorAll('.icon-toggle i').forEach(icon => {
      icon.addEventListener("click", () => {
        const target = icon.getAttribute('data-target');
        const targetDiv = document.getElementById(target);

        // Ocultar todos los divs primero
        document.querySelectorAll('.Location, .Date, .Guest').forEach(div => {
          div.classList.add('hidden');
          div.classList.remove('fullscreen');
        });

        // Mostrar el div correspondiente
        targetDiv.classList.toggle('fullscreen');
        targetDiv.classList.toggle('hidden');
      });
    });
  });







