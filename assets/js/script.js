/* cambio de color de barra de navegación */
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#navbar').addClass('scrolled');
    } else {
      $('#navbar').removeClass('scrolled');
    }
  });

/* Tooltips */

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$('#enviar').click(function () {
    alert("El mensaje fue enviado correctamente!!")
});