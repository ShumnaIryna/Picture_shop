const mask = (selector) => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();

      range.collapse(true); //connects the extreme points of the range
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };

  function createMask(event) {
    let matrix = "+38 (___) __ __ ___",
      i = 0,
      def = matrix.replace(/\D/g, ""), //def-static
      val = this.value.replace(/\D/g, ""); //val-dynamic, what the user entered

    if (def.length >= val.length) {
      val = def;
    } //if the user deletes +38, we won't allow it

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++) //this is the next symbol
        : i >= val.length
        ? ""
        : a;
    });
    // a - every symbol that is in matrix
    // /[_\d]/.test(a) - we will get the result of true or false

    if (event.type === "blur") {
      if (this.value.length == 3) {
        this.value = "";
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
    //(event.type === 'blur') - the user has stopped typing
  }

  let inputs = document.querySelectorAll(selector);

  inputs.forEach((input) => {
    input.addEventListener("input", createMask);
    input.addEventListener("focus", createMask);
    input.addEventListener("blur", createMask);
  });
};
export default mask;
