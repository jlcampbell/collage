//////opening modal
let openModalBtn = document.getElementById("addScrap");
let modal = document.getElementById('modal');
let modalContent = document.getElementById('modal-content');
let closeModalBtn = document.getElementById('close-btn');

openModalBtn.onclick = function(){
  modal.style.display = "block";
}
closeModalBtn.onclick = function(){
  modal.style.display = "none";
}
//if event target is outside of modal content
window.onclick = function(event){
  if (event.target == modal) {
        modal.style.display = "none";
    }
}
///////loading file inside modal



//document.getElementById("input").onchange = function() {
//  var selectedFile = document.getElementById('input').files[0];
//  console.log("input change");
//  handleFiles(selectedFile);
//}
var img = document.createElement("img");
var inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);



function handleFiles() {
  var fileList = this.files; /* now you can work with the file list */
  console.log(fileList.length);
  openFiles(fileList);
}

function openFiles(files) {
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    if (!file.type.startsWith('image/')){ continue }

    var img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    modalContent.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

    var reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);
  }
}
