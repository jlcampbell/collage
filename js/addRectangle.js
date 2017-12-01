let add = document.getElementById("add");
let addCanvas = document.getElementById("crop");
let rectangleCount = 0;
let rect = undefined;
<<<<<<< HEAD

function addRectangle(rectType) {
=======
function addRectangle(rectType, location) {
>>>>>>> ba3cb955a7b97367c4449a4970869693642b4e00
  if (rectType == "div"){
    rect = document.getElementById("rectangleTemplate");
} else {
    rect = document.getElementById("canvasTemplate");
}
  rectangleCount += 1;
  let clone = document.importNode(rect.content, true);
  let id = rectangleCount.toString();
  clone.querySelector(".dragable").id = id;
  document.getElementById(location).appendChild(clone);
  dragElement(document.getElementById(id));
}
add.onclick = function(){
  addRectangle("div", "area");
}
addCanvas.onclick = function(){
  addRectangle("canvas", "modal-content");
}
