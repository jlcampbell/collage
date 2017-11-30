let add = document.getElementById("add");
let addCanvas = document.getElementById("addCanvas");
let rectangleCount = 0;
let rect = undefined;
function addRectangle(rectType, location) {
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
