function showmenu() {
    document.getElementById('menuoverlay').style.display = "block";
}

function hidemenu() {
    document.getElementById('menuoverlay').style.display = "none";
}

window.onload = function() {
    var menuButton = document.getElementById("menu");
    var closeButton = document.getElementById("close");
    
    if (menuButton) {
        menuButton.addEventListener("click", showmenu);
    }
    
    if (closeButton) {
        closeButton.addEventListener("click", hidemenu);
    }
}