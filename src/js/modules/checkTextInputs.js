const checkTextInputs = (selector) => {
  const txtInput = document.querySelectorAll(selector);

  txtInput.forEach((input) => {
    input.addEventListener("keypress", function (e) {
      if (e.key.match(/[^а-я 0-9]/gi)) {
        e.preventDefault();
      }
    });
    //e.key - the value of the key pressed by the user
    // ^ - means the beginning of a line
    //ig - the text can be in lower or upper case
  });
};
export default checkTextInputs;
