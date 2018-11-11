setTimeout(function() {document.body.children[0].style.visibility = "visible"}, 1000);

document.getElementsByClassName("close").onclick = function() {
  document.body.children[0].style.visibility = "hidden"
}