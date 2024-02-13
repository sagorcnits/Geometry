function getElement(id) {
  const baseInput = document.getElementById(id);
  const baseInputValue = baseInput.value;
  const mainValue = parseFloat(baseInputValue);
  console.log(mainValue);
  return mainValue;
}
// triangle
function triangle() {
  const triangleBaseInput = getElement("triangle-base");
  const triangleHeightInput = getElement("triangle-height");
  const result = 0.5 * triangleBaseInput * triangleHeightInput;
  console.log(result);
}
// parallelogram
function parral() {
  const triangleBaseInput = getElement("parallelogram-base");
  const triangleHeightInput = getElement("parallelogram-height");
  const result = triangleBaseInput * triangleHeightInput;
  console.log(result);
}

// rectangle

function rectAngle() {
  const rectAngleWidth = getElement("rectangle-width");
  const rectAngleLength = getElement("rectangle-height");
  const result = rectAngleWidth * rectAngleLength;
  console.log(result);
}

// rhombos

function rhombos() {
  const rombosDrio = getElement("rombos-drio");
  const rombosDriogonal = getElement("rombos-driogonal");
  const result = 0.5 * rombosDrio * rombosDriogonal;
  console.log(result);
}

// pentagonal

function pentagon() {
  const pentagonPenta = getElement("pentagon-penta");
  const pentagonBenta = getElement("pentagon-benta");
  const result = 0.5 * pentagonPenta * pentagonBenta;
  console.log(result);
}

// ellipse
function ellipse() {
  const majorRadious = getElement("ellipse-axis");
  const minorRadious = getElement("ellipse-baxis");
  const result = 3.15 * majorRadious * minorRadious;
  console.log(result);
}
