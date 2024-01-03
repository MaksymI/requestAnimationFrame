const zone = document.querySelector(".zone");
const dropTemplate = document.createElement("div");

let counter = 1;

function makeDrop(x, y) {
  const newDrop = dropTemplate.cloneNode();
  newDrop.style.left = `${x}px`;
  newDrop.style.top = `${y}px`;
  newDrop.textContent = counter;
  counter += 1;
  zone.appendChild(newDrop);
}
