const locomotive = () => {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
};
locomotive();

const gsapLoaderAnim = () => {
  const styleTag = document.getElementById("scrollbarStyle");
  var tl = gsap.timeline();

  tl.from(
    ".line h1",
    {
      y: 150,
      stagger: 0.25,
      duration: 0.6,
      delay: 0.5,
    },
    "start"
  );

  tl.from(
    "#loader .line3 h2",
    {
      y: 150,
      opacity: 0,
      duration: 0.6,
      delay: 1,
    },
    "start"
  );

  tl.from("#loader #line1-part1", {
    opacity: 0,
    delay: 0.5,
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
              opacity: 0.3,
              delay: 0.9,
            },
            "same"
          );
          tl.to(
            "#loader .line",
            {
              width: "100vw",
              overflow: "visible",
            },
            "same"
          );
          tl.to("#loader .line3 h2", {
            delay: -0.7,
            opacity: 0,
            ease: "power1.in",
            duration: 1.5,
            x: 400,
            rotate: "360deg",
          });
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
        }
      }, 20);
    },
  });
};
gsapLoaderAnim();
