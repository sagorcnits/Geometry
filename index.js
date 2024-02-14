function getElement(id) {
  const baseInput = document.getElementById(id);
  const baseInputValue = baseInput.value;
  const mainValue = parseFloat(baseInputValue);
  baseInput.value = "";
  return mainValue;
}
// triangle
function triangle() {
  const triangleBaseInput = getElement("triangle-base");
  const triangleHeightInput = getElement("triangle-height");
  const result = 0.5 * triangleBaseInput * triangleHeightInput;
  return addItem("Triangle", result);
}

// rectangle

function rectAngle() {
  const rectAngleWidth = getElement("rectangle-width");
  const rectAngleLength = getElement("rectangle-height");
  const result = rectAngleWidth * rectAngleLength;
  return addItem("Rectangle", result);
}

// parallelogram
function parral() {
  const triangleBaseInput = getElement("parallelogram-base");
  const triangleHeightInput = getElement("parallelogram-height");
  const result = triangleBaseInput * triangleHeightInput;
  return addItem("Parallelogram", result);
}

// rhombos

function rhombos() {
  const rombosDrio = getElement("rombos-drio");
  const rombosDriogonal = getElement("rombos-driogonal");
  const result = 0.5 * rombosDrio * rombosDriogonal;
  return addItem("Rhombus", result);
}

// pentagonal

function pentagon() {
  const pentagonPenta = getElement("pentagon-penta");
  const pentagonBenta = getElement("pentagon-benta");
  const result = 0.5 * pentagonPenta * pentagonBenta;
  return addItem("Pentagon", result);
}

// ellipse
function ellipse() {
  const majorRadious = getElement("ellipse-axis");
  const minorRadious = getElement("ellipse-baxis");
  const result = 3.15 * majorRadious * minorRadious;
  return addItem("Ellipse", result);
}

// add item

function addItem(name, value) {
  const addList = document.getElementById("addList");
  const ul = document.createElement("ul");
  ul.classList.add("mt-4");
  const li = ` <li class="flex justify-between items-center">
  <span>${name}</span>
  <span>${value}cm<sup>2</sup></span>
  <button class="btn btn-primary text-white">
    Covert to m<sup>2</sup>
  </button>
</li>`;
  ul.innerHTML = li;
  addList.appendChild(ul);
}

// hover js
const card = document.querySelectorAll(".card");

for (let cardItem of card) {
  cardItem.addEventListener("mouseover", function () {
    const redColor = Math.floor(Math.random() * 255);
    const greenColor = Math.floor(Math.random() * 255);
    const blueColor = Math.floor(Math.random() * 255);

    cardItem.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
  });
  cardItem.addEventListener("mouseout", function () {
    cardItem.style.backgroundColor = "white";
  });
}
