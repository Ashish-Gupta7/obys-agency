function locomotive() {
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
}
locomotive();

function gsapLoaderAnim() {
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

  tl.from(" #loader .wait-msg", {
    duration: 0.4,
    opacity: 0,
  });

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
              opacity: 0.7,
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
          tl.to(
            "#loader .wait-msg",
            {
              duration: 0.4,
              opacity: 0,
            },
            "back"
          );
          tl.to(
            "#loader",
            {
              delay: 0.2,
              opacity: 0,
            },
            "back"
          );
          tl.to("#loader", {
            display: "none",
          });
          tl.to(".loader-effect", {
            y: "-100%",
            duration: 0.4,
            display: "none",
            ease: "power1.in",
          });
          tl.from(
            ".page1 .after-nav .center-content .intro-content .hero-anim",
            {
              duration: 0.6,
              y: 100,
              stagger: 0.4,
              opacity: 0,
            }
          );
          tl.to("#crsr", {
            display: "block",
          });
        }
      }, 20);
    },
  });
}
gsapLoaderAnim();

function cursorAnim() {
  const cursor = document.querySelector("#crsr");

  document.addEventListener("mousemove", updateCursorPosition);
  document.addEventListener("scroll", updateCursorPosition);

  function updateCursorPosition(dets) {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
  }

  const magnetElements = document.querySelectorAll(
    ".page1 nav .nav-left img, .page1 nav .nav-right a"
  );

  magnetElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to("#crsr", {
        width: "4vw",
        height: "4vw",
        duration: 0.5,
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to("#crsr", {
        width: "2.5vw",
        height: "2.5vw",
        duration: 0.5,
      });
    });
  });

  Shery.makeMagnet(".page1 nav .nav-left img, .page1 nav .nav-right a", {});
}
cursorAnim();

function flagAnim() {
  let flag = document.querySelector(".page1 #flag");

  let wdText = document.querySelectorAll(".wd-text");
  wdText.forEach((elm) => {
    elm.addEventListener("mousemove", updateCursorPosition);

    function updateCursorPosition(dets) {
      let flagWidth = flag.offsetWidth / 2;
      let flagHeight = flag.offsetHeight / 2;
      gsap.to(flag, {
        x: dets.x - flagWidth,
        y: dets.y - flagHeight,
        opacity: 1,
      });
    }
    elm.addEventListener("mouseleave", function () {
      gsap.to(flag, {
        opacity: 0,
      });
    });
  });
}
flagAnim();

function videoAnim() {
  let video = document.querySelector(".page2 .video-container video");
  let image = document.querySelector(".page2 .video-container img");
  let videoContainer = document.querySelector(".page2 .video-container");

  videoContainer.addEventListener("click", function () {
    if (image.classList.contains("anim")) {
      video.play();
      gsap.to(image, {
        scale: 0,
        opacity: 0,
      });
      image.classList.remove("anim");
    } else {
      video.pause();
      gsap.to(image, {
        opacity: 1,
        scale: 1,
      });
      image.classList.add("anim");
    }
  });
}
videoAnim();

// function videoCursorAnim() {
//   let crsr = document.querySelector("#crsr");
//   let videoContainer = document.querySelector(".video-container");
//   let playBtn = document.querySelector(".play-btn");

//   videoContainer.addEventListener("mousemove", updateCursorPosition);
//   videoContainer.addEventListener("scroll", updateCursorPosition);

//   function updateCursorPosition(dets) {
//     gsap.to(playBtn, {
//       duration: 0,
//       left: dets.x - 560,
//       top: dets.y - 280,
//     });
//   }
// }
// videoCursorAnim();

function circleBtn() {
  let page4Btn = document.querySelector(".page4 .btn");
  page4Btn.addEventListener("mouseenter", function () {
    gsap.to(page4Btn, {
      width: "21vw",
      height: "21vw",
    });
  });
  page4Btn.addEventListener("mouseleave", function () {
    gsap.to(page4Btn, {
      width: "23vw",
      height: "23vw",
    });
  });
}
circleBtn();

function circleHoverAnim() {
  let circleHover = document.querySelectorAll(
    ".page3 .image-effect-container .content .container .c1-circle-container .c1-circle"
  );

  circleHover.forEach((circle, index) => {
    let animatedCircle = circle.querySelector(".c1-circle-after-hover");
    let circleTextAnim = circle.querySelector(".c1-circle-after-hover .text");
    let svgNone = circle.querySelector("svg");

    circle.addEventListener("mouseenter", function () {
      gsap.to(animatedCircle, {
        height: "100%",
        width: "100%",
        display: "block",
        backgroundColor: "white",
        duration: 0.3,
        display: "flex",
      });
      gsap.to(circleTextAnim, {
        display: "block",
        delay: 0.3,
        scale: 1,
      });
      gsap.to(svgNone, {
        delay: -0.3,
        display: "none",
      });
    });

    circle.addEventListener("mouseleave", function () {
      gsap.to(animatedCircle, {
        height: "0%",
        width: "0%",
        duration: 0.3,
        display: "none",
      });
      gsap.to(circleTextAnim, {
        scale: 0,
      });
      gsap.to(svgNone, {
        display: "block",
      });
    });
  });
}
circleHoverAnim();

// function sheryImageEffect() {
//   Shery.imageEffect(".image-effect1", {
//     style: 4,
//     gooey: true,
//   });
//   Shery.imageEffect(".image-effect2", {
//     style: 4,
//     gooey: true,
//   });
// }
// sheryImageEffect();
