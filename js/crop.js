//called after placing and sizing cropping rectangle
//call by pressing crop button in modal-content

//set full image variable
let cropBtn = document.getElementById("save");
cropBtn.addEventListener("click", function (){
  console.log("listener listening")

  //need to set width equal to scrollwidth
  let fullImage = document.getElementById("full-image");
  let fullImagePos = fullImage.getBoundingClientRect();

  //set cropped image variable
  //consider making the cropping property removable
  let croppedImageOnCanvas = document.getElementById("croppingRectangle");
  let cIOCPos = croppedImageOnCanvas.getBoundingClientRect();

  let cIOCPosRelative = {};
  cIOCPosRelative.X = cIOCPos.left - fullImagePos.left;

  cIOCPosRelative.Y = cIOCPos.top-fullImagePos.top;

  let context = croppedImageOnCanvas.getContext('2d');
  //set actual width of canvas to the css width
  croppedImageOnCanvas.width=croppedImageOnCanvas.scrollWidth;
  //set actual height to css height
  croppedImageOnCanvas.height=croppedImageOnCanvas.scrollHeight;
  //sourceX and sourceY need to be the relative location of the rectangle
  //(distance from fullImageX 0 and fullImageY 0)
  var sourceX = cIOCPosRelative.X;
  var sourceY = cIOCPosRelative.Y;
  var sourceWidth = croppedImageOnCanvas.width;
  var sourceHeight = croppedImageOnCanvas.height;
  var destWidth = croppedImageOnCanvas.width;
  var destHeight = croppedImageOnCanvas.height;
  var destX = 0;
  var destY = 0;

  context.drawImage(fullImage, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
  console.log(sourceX+" , "+sourceY)

}, false);
//sourc
