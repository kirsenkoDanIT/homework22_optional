"use strict";
const button = document.querySelector("button");
button.style.display = "block";
const circles = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 100; i++) {
    const circle = document.createElement("span");
    circle.style.cssText = `display: inline-block;
            width: 30px;
            height: 30px;
            margin: 5px;
            border-radius: 50%;
            background-color: rgb(${Math.floor(
              Math.random() * 256
            )},${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )});
            cursor: pointer;`;
    fragment.appendChild(circle);
  }
  return fragment;
};

document.body.addEventListener("click", event => {
  if (event.target === button) {
    document.body.appendChild(circles());
  }
  if (event.target.tagName.toLowerCase() === "span") {
    event.target.style.display = "none";
  }
});
