function showmenu() {
    document.getElementById('menuoverlay').style.display = "block";
    document.getElementById('close').style.display = "block"; 
}

function hidemenu() {
    document.getElementById('menuoverlay').style.display = "none";
    document.getElementById('close').style.display = "none"; 
}


window.onload = function() {
    document.getElementById("menu").addEventListener("click", showmenu);
    document.getElementById("close").addEventListener("click", hidemenu);
}