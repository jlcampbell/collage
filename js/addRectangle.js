let add = document.getElementById("add");
let addCanvas = document.getElementById("addCanvas");
let rectangleCount = 0;
let rect = undefined;
function addRectangle(rectType, location) {
  let id = "";
  //which html template to base rectangle on
  if (rectType == "div"){
    rect = document.getElementById("rectangleTemplate");
    id = rectangleCount.toString();
} else {
    rect = document.getElementById("canvasTemplate");
    id = "croppingRectangle";
}
  //determine rectangle id based on number of rectangles in existence
  rectangleCount += 1;
  //import appropriate rectangle template
  let clone = document.importNode(rect.content, true);

  //the dragable div inside is what we want- setting id to that element
  clone.querySelector(".dragable").id = id;
  //add our rectangle to appropriate location
  document.getElementById(location).appendChild(clone);
  //make rectangle dragable
  dragElement(document.getElementById(id));
}
add.onclick = function(){
  addRectangle("div", "area");
}
addCanvas.onclick = function(){
  addRectangle("canvas", "modal-content");
}
