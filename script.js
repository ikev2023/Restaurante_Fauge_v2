
function mostrar()
{
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
      menu.style.display = "none"; // Oculta el menú si está visible
    } else {
      menu.style.display = "block"; // Muestra el menú si está oculto
    }
}
