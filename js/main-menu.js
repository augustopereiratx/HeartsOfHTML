window.onload = function() {
    document.getElementById("menu-music").play();
}
if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("mobile").style.display = "inline-block";
    document.getElementById("menu-background").style.display = "none";
  }
