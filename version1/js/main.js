//header
const headerTag = document.querySelector("header");
headerTag.classList.add("headerTagStyle", "flexStyle");

//main
const mainTag = document.querySelector("main");
mainTag.classList.add("mainTagStyle", "flexStyle");

//h2
const h2Tag = document.querySelectorAll("h2");
h2Tag.forEach((eachH2) => {
  eachH2.classList.add("h2TagStyle");
});

//Form ----------------------------------------
const forms = document.querySelectorAll("form");
forms.forEach((eachForm) => {
  eachForm.style.margin = "10px";
});

//Input tag style
const inputs = document.querySelectorAll("input");
inputs.forEach((eachInput) => {
  eachInput.classList.add("inputTagStyle");
});

//Span tag style
const spans = document.querySelectorAll("span");
spans.forEach((eachSpan) => {
  eachSpan.classList.add("spansStyle", "d-inline-block");
});

//Basic Arithmatic & Special Operations

forms.forEach((eachForm) => {
  eachForm.addEventListener("keyup", (numOne = 0, numTwo = 0) => {
    numOne = Number(eachForm.children[0].value);
    numTwo = Number(eachForm.children[2].value);
    let result;

    eachForm.className === "addition"
      ? (result = numOne + numTwo)
      : eachForm.className === "subtraction"
      ? (result = numOne - numTwo)
      : eachForm.className === "multiplication"
      ? (result = numOne * numTwo)
      : eachForm.className === "division"
      ? (result = (numOne / numTwo).toFixed(1))
      : (result = numOne % numTwo);

    eachForm.lastElementChild.value = result;
  });
});

//Rest button

const resetDiv = document.querySelector("div");
resetDiv.classList.add("resetDivStyle", "flexStyle");

const resetBtn = document.querySelector("#reset");
resetBtn.classList.add("resetBtnStyle");
let resetBtnBgColour = "yellow";
let resetBtnColor = "black";
let reestBtnMouseover = "darkblue";
resetBtn.style.backgroundColor = resetBtnBgColour;

resetBtn.addEventListener("mouseover", () => {
  resetBtn.style.backgroundColor = reestBtnMouseover;
  resetBtn.style.color = "white";
});

resetBtn.addEventListener("mouseout", () => {
  resetBtn.style.backgroundColor = resetBtnBgColour;
  resetBtn.style.color = resetBtnColor;
});

resetBtn.addEventListener("click", () => {
  forms.forEach((eachForm) => {
    eachForm.children[0].value = "";
    eachForm.children[2].value = "";
    eachForm.lastElementChild.value = "";
  });
});
