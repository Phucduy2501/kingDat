console.clear("");

let minusEle = document.getElementById("minus");

minusEle.onclick = function () {
  let tangSo = document.getElementById("tangso");

  let currentValue = parseInt(tangSo.textContent);

  if (currentValue > 0) {
    tangSo.textContent = currentValue - 1;
  }

  console.log("hello");
};

let plusEle = document.getElementById("plus");

plusEle.addEventListener("click", function () {
  let tangSo = document.getElementById("tangso");

  tangSo.textContent = parseInt(tangSo.textContent) + 1;
  console.log("world");
});
