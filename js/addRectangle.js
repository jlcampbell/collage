let add = document.getElementById("add");
let rectangleCount = 0;
function addRectangle() {
  let rect = document.getElementById("rectangleTemplate");
  rectangleCount += 1;
  let clone = document.importNode(rect.content, true);
  clone.querySelector(".dragable").id = rectangleCount.toString();
  document.getElementById("area").appendChild(clone);
  dragElement(document.getElementById(rectangleCount.toString()));
}
add.onclick = function(){
  addRectangle();
}
