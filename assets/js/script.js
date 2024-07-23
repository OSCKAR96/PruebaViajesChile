document.getElementById("mensaje").onclick = function(){
    alert("La informacion fue enviada")
}


$(document).ready(
    function () {
        $(".titulo").dblclick(
            function(){
                $(this).hide("slow")
            }
        )
    }
)

$(document).ready(function () {
    $('a[href^="#"]').click(function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        $('html, body').stop().animate({ // Añadir stop() para evitar múltiples animaciones simultáneas
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000); // Duración del desplazamiento en milisegundos
    });
});