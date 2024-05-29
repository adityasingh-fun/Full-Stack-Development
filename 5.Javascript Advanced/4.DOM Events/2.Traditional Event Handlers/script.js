// Mouse Event
document.getElementById("clickButton").onclick = function onClickHandler() {
  console.log("onClickHandler is called");
};

document.getElementById("doubleClickButton").ondblclick =
  function ondblclickHandler() {
    console.log("ondblclickHandler is called");
  };

document.getElementById("hoverDiv").onmouseover =
  function onmouseoverHandler() {
    console.log("onmouseoverHandler is called");
  };

document.getElementById("hoverDiv").onmouseout = function onmouseoutHandler() {
  console.log("onmouseoutHandler is called");
};

//----- Keyboard Events
document.getElementById("keyInput").onkeydown = function onkeydownHandler() {
  console.log("onkeydownHandler event is called");
};
document.getElementById("keyInput").onkeyup = function onkeyupHandler() {
  //console.log("onkeyupHandler event is called");
};


// Form Events
document.getElementById("myForm").onsubmit = function onsubmitHandler() {
  console.log("onsubmitHandler event is called");
};

document.getElementById("formInput").onfocus = function onfocusHandler() {
  console.log("onfocusHandler event is called");
};

document.getElementById("formInput").onblur = function onblurHandler() {
  console.log("onblurHandler event is called");
};
