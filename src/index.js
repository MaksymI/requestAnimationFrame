const zone = document.querySelector(".zone");
const dropTemplate = document.createElement("div");
dropTemplate.classList.add("drop");

const maxSize = 400;

let counter = 1;

function makeDrop(x, y) {
  const newDrop = dropTemplate.cloneNode();
  newDrop.style.left = `${x}px`;
  newDrop.style.top = `${y}px`;
  newDrop.textContent = counter;
  counter += 1;
  zone.appendChild(newDrop);
}

zone.addEventListener("click", (e) => {
  console.log("click - ", e);
  makeDrop(e.offsetX, e.offsetY);
});

function tick() {
  Array.from(zone.querySelectorAll(".drop")).forEach((drop) => {
    const currentSize = parseInt(getComputedStyle(drop).width, 10);
    const newSize = currentSize + 1 + Math.random() * 6;
    drop.style.width = `${newSize}px`;
    drop.style.height = `${newSize}px`;
    drop.style.opacity = (maxSize - newSize) / maxSize;
    if (newSize > maxSize) {
      drop.remove();
    }
  });
}

function loop() {
  window.requestAnimationFrame(() => {
    tick();
    loop();
  });
}

loop();
