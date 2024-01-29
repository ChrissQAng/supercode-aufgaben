function changeHeadline() {
  const addCSSHeadline = document.querySelector("#headline");
  addCSSHeadline.classList.add("headlineCSS");
  // const constaddCSSList = document.querySelector("#list");
  // constaddCSSList.classList.add("listCSS");
}
function resetHeadline() {
  const addCSSHeadline = document.querySelector("#headline");
  addCSSHeadline.classList.remove("headlineCSS");
  // const constaddCSSList = document.querySelector("#list");
  // constaddCSSList.classList.add("listCSS");
}
function toggleHeadline() {
  const addCSSHeadline = document.querySelector("#headline");
  addCSSHeadline.classList.toggle("headlineCSS");
  // const constaddCSSList = document.querySelector("#list");
  // constaddCSSList.classList.add("listCSS");
}
