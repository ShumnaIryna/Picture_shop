const accordion_1_Option = (rtiggersSelector, itemsSelector) => {
  const btns = document.querySelectorAll(rtiggersSelector),
    blocks = document.querySelectorAll(itemsSelector);

  blocks.forEach((block) => {
    block.classList.add("animated", "fadeInDown");
  });

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        btns.forEach((btn) => {
          btn.classList.remove("active", "active-style");
        });
        this.classList.add("active", "active-style");
      }
    });
  });
};

export default accordion_1_Option;

// used styles in the main.css

// .often-questions p.active-style span {
//   color: #e950d7;
//   font-weight: 900;
//   text-decoration: none;
//   border: 0;
// }

// .often-questions .accordion-heading.active + .accordion-block {
//   display: block;
// }

// .often-questions .accordion-block {
//   display: none;
// }
