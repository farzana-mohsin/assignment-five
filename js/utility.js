function getParsedInnerTextById(elementId) {
  const element = document.getElementById(elementId);
  return parseInt(element.innerText);
}

function setInnerTextById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function setBackgroundColorByElement(element, color) {
  element.classList.add(color);
}
