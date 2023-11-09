import { getResource } from "../services/reguests";

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  //---------method of using JSON-SERVER---------------
  btn.addEventListener("click", function () {
    // getResource("http://localhost:3000/styles")
    getResource("assets/db.json")
      .then((res) => createCards(res.styles))
      .catch((error) => console.log(error));

    this.remove();
  });

  function createCards(response) {
    response.forEach((item) => {
      let card = document.createElement("div");

      card.classList.add(
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1",
        "animated",
        "fadeInUp"
      );

      card.innerHTML = `
          <div class="styles-block">
						<img src=${item.src} alt="photo">
						<h4>${item.title}</h4>
						<a href=${item.link}>Детальніше</a>
					</div>
      `;

      document.querySelector(wrapper).appendChild(card);
    });
  }

  //---------method of using styles---------------

  // const showMoreStyles = (trigger, styles) => {
  // const cards = document.querySelectorAll(styles),
  // btn = document.querySelector(trigger);

  // cards.forEach((card) => {
  //   card.classList.add("animated", "fadeInUp");
  // });

  // btn.addEventListener("click", () => {
  //   cards.forEach((card) => {
  //     card.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
  //     card.classList.add(
  //       "col-sm-3",
  //       "col-sm-offset-0",
  //       "col-xs-10",
  //       "col-xs-offset-1"
  //     );

  //     //btn.style.display = "none";
  //     btn.remove();
  //   });
  // });
};

export default showMoreStyles;
