const scrolling = (upSelector) => {
  const upElem = document.querySelector(upSelector);

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add("animated", "fadeIn");
      upElem.classList.remove("fadeOut");
    } else {
      upElem.classList.add("fadeOut");
      upElem.classList.remove("fadeIn");
    }
  });

  // -----------------------------------SCROLLING with requestAnimationFrame()----

  //we turn to atibut [], and we are looking for all links(href) starting( ^ - attribute value must be first) with #
  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.3;

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        // toBlock - the upper border of the element to which you need to scroll, .top()-upper coordinates
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start == null) {
          start = time;
        }

        let progress = time - start,
          //r - is responsible for the number of pixels that must be scrolled during this animation
          r =
            toBlock < 0
              ? Math.max(widthTop - progress / speed, widthTop + toBlock)
              : Math.min(widthTop + progress / speed, widthTop + toBlock);

        // let's scroll the page to specific coordinates - scrollTo
        document.documentElement.scrollTo(0, r);

        // (r != widthTop + toBlock) - it means that you have already scrolled to the desired element
        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });

  // ---------------------------------------PURE JS SCROLLING-----------------
  // const element = document.documentElement,
  //   body = document.body;

  // const calcScroll = () => {
  //   upElem.addEventListener("click", function (event) {
  //     let scrollTop = Math.round(body.scrollTop || element.scrollTop);

  //     //we check if our # is not an empty element, in our case it is a link
  //     if (this.hash !== "") {
  //       event.preventDefault();

  //       //we find the element to which we will scroll
  //       //it will be ours id = "up"
  //       let hashElement = document.querySelector(this.hash),
  //         hashElementTop = 0;

  //       while (hashElement.offsetParent) {
  //         hashElementTop += hashElement.offsetTop;
  //         hashElement = hashElement.offsetParent;
  //       }

  //       hashElementTop = Math.round(hashElementTop);
  //       smoothScroll(scrollTop, hashElementTop, this.hash);
  //     }
  //   });
  // };

  // const smoothScroll = (from, to, hash) => {
  //   let timeInterval = 1,
  //     prevScrollTop,
  //     speed;

  //   if (to > from) {
  //     speed = 30;
  //   } else {
  //     speed = -30;
  //   }

  //   let move = setInterval(function () {
  //     let scrollTop = Math.round(body.scrollTop || element.scrollTop);

  //     if (
  //       prevScrollTop === scrollTop ||
  //       (to > from && scrollTop >= to) ||
  //       (to < from && scrollTop <= to)
  //     ) {
  //       clearInterval(move);
  //       history.replaceState(
  //         history.state,
  //         document.title,
  //         location.href.replace(/#.*$/g, "") + hash
  //       );
  //     } else {
  //       body.scrollTop += speed;
  //       element.scrollTop += speed;
  //       prevScrollTop = scrollTop;
  //     }
  //   }, timeInterval);
  // };

  // calcScroll();
};

export default scrolling;
