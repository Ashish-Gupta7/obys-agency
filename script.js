const styleTag = document.getElementById("scrollbarStyle");
var tl = gsap.timeline();
gsap.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});
tl.from("#loader #line1-part1, #loader .line3 h2", {
  opacity: 0,
  delay: 1,
  onStart: function () {
    let h5timer = document.querySelector("#loader #line1-part1 h5");
    let grow = 0;
    let timer = setInterval(function () {
      if (grow < 100) {
        h5timer.innerHTML = grow;
        grow++;
      } else {
        h5timer.innerHTML = grow;
        clearInterval(timer);
        tl.to(
          "#loader .line2 h1",
          {
            opacity: 0.5,
          },
          "same"
        );
        tl.to(
          "#loader .line1 h1",
          {
            opacity: 0.6,
            delay: 0.3,
          },
          "same"
        );
        tl.to(
          "#loader .line3 span:nth-child(2)",
          {
            opacity: 0.5,
            delay: 0.6,
          },
          "same"
        );
        tl.to(
          "#loader .line3 .line3-same-anim",
          {
            opacity: 0.7,
            delay: 0.9,
          },
          "same"
        );
        tl.to("#loader", {
          opacity: 0,
        });
        tl.to("#loader", {
          display: "none",
        });
        tl.from(".page1", {
          y: "100%",
          opacity: 0,
        });
        gsap.to(
          {},
          {
            duration: 0.5,
            onComplete: function () {
              styleTag.remove();
            },
          }
        );
      }
    }, 20);
  },
});
