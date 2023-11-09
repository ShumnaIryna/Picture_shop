const accordion_2_Option = (rtiggersSelector) => {
  const btns = document.querySelectorAll(rtiggersSelector);

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active-style");
      this.nextElementSibling.classList.toggle("active-content");

      if (this.classList.contains("active-style")) {
        this.nextElementSibling.style.maxHeight =
          this.nextElementSibling.scrollHeight + 80 + "px";
      } else {
        this.nextElementSibling.style.maxHeight = "0px";
      }
    });
  });
};

export default accordion_2_Option;
