// const { axios } = require("axios");

const display = document.querySelector("#link-display");
const getLinks = document.querySelector("#link-select");

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  axios.get("http://localhost:4000/api/links").then((res) => {
    console.log(res.data);
    console.log('DOM loaded')
    res.data.forEach((link) => {
      const option = document.createElement("option");
      option.setAttribute("name", link["link"]);
      option.textContent = `${link.name}, ${link.link}`;
      getLinks.appendChild(option);
    });
  });
});

getLinks.addEventListener("change", (event) => {
  removeAllChildNodes(display);
  const paragraph = document.createElement("p");
  const state = event.target.value;
  axios.get(`http://localhost:4000/api/links/${state}`).then((res) => {
    const { link } = res.data[0];
    paragraph.textContent = link;
    display.appendChild(paragraph);
  });
});
