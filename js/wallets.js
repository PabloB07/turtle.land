var show_apple = function() {
  document.getElementById("apple").style.display = "block";
  document.getElementById("win").style.display = "none";
  document.getElementById("linux").style.display = "none";
};

var show_win = function() {
  document.getElementById("apple").style.display = "none";
  document.getElementById("win").style.display = "block";
  document.getElementById("linux").style.display = "none";
};

var show_linux = function() {
  document.getElementById("apple").style.display = "none";
  document.getElementById("win").style.display = "none";
  document.getElementById("linux").style.display = "block";
};
