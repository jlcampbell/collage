let add = document.getElementById("add");
let rectangleCount = 0;
add.onclick = function(){
  console.log("addClick");
  let rect = document.getElementById("rectangleTemplate");
  rectangleCount += 1;
  rect.content.id = rectangleCount.toString();
  let clone = document.importNode(rect.content, true);

  document.getElementById("area").appendChild(clone);
}
