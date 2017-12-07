

function dragElement(elmnt) {
  var pos1 = {"x":0,"y":0}, pos2 = {"x":0,"y":0};
  console.log(elmnt);
  elmnt.onmousedown = dragMouseDown;
  return (elmnt.onmousedown);

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos1.x = e.clientX;
    pos1.y = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos2.x = pos1.x - e.clientX;
    pos2.y = pos1.y - e.clientY;
    pos1.x = e.clientX;
    pos1.y = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2.y) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos2.x) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    return (pos2);
  }
}
