function setButton(buttonText) {
  document.querySelector('body').innerHTML = `<button>${buttonText}</button>`;
  // document.querySelector("body").textContent = `<button>${buttonText}</button>`;
}
setButton('buttonText');
