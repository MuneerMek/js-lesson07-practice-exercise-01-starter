var box1 = document.querySelector(".box-1");
var box2 = document.querySelector(".box-2");
var box3 = document.querySelector(".box-3");
var clearButton = document.querySelector("button");

document.addEventListener("keydown", function (e) {
  var key = e.key;
  console.log(key);
  if (key === "1") {
    box1.innerText = "😸";
  } else if (key === "2") {
    box2.innerText = "🎃";
  } else if (key === "3") {
    box3.innerText = "😊";
  } else if (key === " ") {
    removeEmoji();
  }
});

clearButton.addEventListener("click", function () {
  removeEmoji();
});

var removeEmoji = function () {
  box1.innerText = "1";
  box2.innerText = "2";
  box3.innerText = "3";
};

// Change button color
clearButton.addEventListener("pointerover", function () {
  clearButton.style.backgroundColor = "#333";
});

clearButton.addEventListener("pointerout", function () {
  clearButton.style.backgroundColor = "#000";
});
