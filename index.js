const menu = document.getElementsByClassName('button');

menu.addEventListener('click', opac());

function opac () {
  document.getElementById("wra").style.opacity = "0";
}
