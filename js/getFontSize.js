const getFontSize = (textLength) => {
  const baseSize = 9;
  if (textLength >= baseSize) {
    textLength = baseSize - 2;
  }
  const fontSize = baseSize - textLength;
  return `${fontSize}vw`;
};

const boxes = document.querySelectorAll(".sorted-text p");

boxes.forEach((box) => {
  box.style.fontSize = getFontSize(box.textContent.length);
});
