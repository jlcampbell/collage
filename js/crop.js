//called after placing and sizing cropping rectangle
//call by pressing crop button in modal-content

//set full image variable
let cropBtn = document.getElementById("save");
cropBtn.addEventListener("click", function (){
  //these preparatory variables can't be defined until the corresponding canvas square is defined
  //the following needs work:
  //need to set width equal to scrollwidth
  let fullImage = document.getElementById("full-image");
  //set cropped image variable
  let croppedImageOnCanvas = document.getElementById("1");
  let context = croppedImageOnCanvas.getContext('2d');
  //call crop function
  var sourceX = 150;
  var sourceY = 0;
  var sourceWidth = 100;
  var sourceHeight = 50;
  var destWidth = 400;
  var destHeight = 200;
  var destX = 0;
  var destY = 0;
  //document.getElementById("placeForimg").appendChild(imageObj);
  //context.drawImage(fullImage, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
  context.drawImage(fullImage, destX, destY);

}, false);
//sourc
