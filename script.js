const rightbtn = document.querySelector(".adelante");
const leftbtn = document.querySelector(".atras");
const content = document.querySelector(".slider");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    if (content) {
      content.scrollLeft = 1633;
    }
  }, 600);

  // Manejar el clic en los íconos para mostrar/ocultar divs
  document.querySelectorAll(".icon-toggle i").forEach((icon) => {
    icon.addEventListener("click", () => {
      const target = icon.getAttribute("data-target");
      const targetDiv = document.getElementById(target);

      // Ocultar todos los divs primero
      document.querySelectorAll(".Location, .Date, .Guest").forEach((div) => {
        div.classList.add("hidden");
        div.classList.remove("fullscreen");
      });

      // Mostrar el div correspondiente si existe
      if (targetDiv) {
        targetDiv.classList.toggle("fullscreen");
        targetDiv.classList.toggle("hidden");
      }
    });
  });

  // Manejar el botón de cerrar para Location
  const closeBtn = document.querySelector(".close-btn");
  const locationDiv = document.querySelector(".Location");
  if (closeBtn && locationDiv) {
    closeBtn.addEventListener("click", () => {
      locationDiv.classList.add("hidden");
      locationDiv.classList.remove("fullscreen");
    });
  }
});

if (rightbtn && content) {
  rightbtn.addEventListener("click", () => {
    content.scrollLeft += 326;
  });
}
if (leftbtn && content) {
  leftbtn.addEventListener("click", () => {
    content.scrollLeft -= 326;
  });
}

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
  "Tony",
];

let indiceActual = 5;
function cambiarTestimonio(direccion) {
  let nuevoIndice = indiceActual + direccion;

  if (nuevoIndice >= 0 && nuevoIndice < testimonios.length) {
    indiceActual = nuevoIndice;

    let nameElement = document.getElementById("name");
    if (nameElement) {
      nameElement.style.opacity = 0;
      setTimeout(() => {
        nameElement.textContent = testimonios[indiceActual];
        nameElement.style.opacity = 1;
      }, 400);
    }
  }

  if (leftbtn) leftbtn.disabled = indiceActual === 0;
  if (rightbtn) rightbtn.disabled = indiceActual === testimonios.length - 1;
}

document.querySelectorAll(".dropdown-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const targetMenu = document.getElementById(
      button.getAttribute("data-target")
    );
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      if (menu !== targetMenu) menu.parentElement.classList.remove("open");
    });
    button.parentElement.classList.toggle("open");
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      dropdown.classList.remove("open");
    });
  }
});

const checkbox = document.getElementById("check");
const menu = document.getElementById("menu");

if (checkbox && menu) {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      menu.classList.add("active");
    } else {
      menu.classList.remove("active");
    }
  });
}

// Opcional: cerrar el menú al hacer clic en un enlace
const items = document.querySelectorAll(".menu .item .X");
items.forEach((item) => {
  item.addEventListener("click", () => {
    if (checkbox && menu) {
      checkbox.checked = false;
      menu.classList.remove("active");
    }
  });
});

document.querySelectorAll(".icon-toggle").forEach((icon) => {
  icon.addEventListener("click", () => {
    const iconElement = icon.querySelector("i");
    if (iconElement) {
      iconElement.classList.toggle("icon-rotate");
    }
  });
});
