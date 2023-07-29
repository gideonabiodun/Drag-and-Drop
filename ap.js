const lists = document.getElementsByClassName("list");
const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");

// function for draging each
for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;
    // drag to right
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected);
      selected = null;
    });

    // drag to left
    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}
