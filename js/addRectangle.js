let add = document.getElementById("add");
let addCanvas = document.getElementById("crop");
let rectangleCount = 0;
let rect = undefined;

function addRectangle(rectType) {
  if (rectType == "div"){
    rect = document.getElementById("rectangleTemplate");
} else {
    rect = document.getElementById("canvasTemplate");
}
  rectangleCount += 1;
  let clone = document.importNode(rect.content, true);
  clone.querySelector(".dragable").id = rectangleCount.toString();
  document.getElementById("area").appendChild(clone);
  dragElement(document.getElementById(rectangleCount.toString()));
}
add.onclick = function(){
  addRectangle("div");
}
addCanvas.onclick = function(){
  addRectangle("canvas");
}
