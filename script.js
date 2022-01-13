/**** Menu ****/
((d)=>{
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click",(e)=>{
        $btnMenu.firstElementChild.classList.toggle("none");/*pone y quita el x*/
        $btnMenu.lastElementChild.classList.toggle("none");/*pine y quita el x del menu*/
        $menu.classList.toggle("activar");

    });
    /*hace que el menu se cierre una vez que se de click en portafolio o servicios o contacto e incio */
    d.addEventListener("click",(e)=>{
        if(!e.target.matches(".menu a")) return false;
        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("activar");
    });


})(document);

/* ********** ContactForm ********** */
((d) => {
    const $form = d.querySelector(".contact-form"),
      $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-respuesta");
  
    $form.addEventListener("submit", (e) => {
      e.preventDefault();
      $loader.classList.remove("none");
      fetch("https://formsubmit.co/ajax/arielbarzallo-97@hotmail.com", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);
          location.hash = "#gracias";
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          let message =
            err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
          $response.querySelector(
            "h3"
          ).innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
          $loader.classList.add("none");
          setTimeout(() => {
            location.hash = "#close";
          }, 3000);
        });
    });
  })(document);



