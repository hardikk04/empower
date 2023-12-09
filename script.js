var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const t1 = gsap.timeline();

t1.from(
  ".page1-hero-left",
  0.5,
  {
    opacity: 0,
    x: -50,
  },
  0
);

t1.from(
  ".page1-hero-right",
  0.5,
  {
    opacity: 0,
    x: 50,
  },
  0
);

t1.from(
  "nav",

  {
    opacity: 0,
  }
);

t1.from(".page2-elem:nth-child(1),.page2-elem:nth-child(2)", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2-elem:nth-child(1),.page2-elem:nth-child(2)",
    // markers: true,
    start: "top 80%",
    end: "top 70%",
  },
});

t1.from(".page2-elem:nth-child(3),.page2-elem:nth-child(4)", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2-elem:nth-child(3),.page2-elem:nth-child(4)",
    // markers: true,
    start: "top 80%",
    end: "top 70%",
  },
});

t1.from(".page2-elem:nth-child(5),.page2-elem:nth-child(6)", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2-elem:nth-child(5),.page2-elem:nth-child(6)",
    // markers: true,
    start: "top 80%",
    end: "top 70%",
  },
});

t1.from(".page3", {
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3",
    // markers: true,
    scrub: 1,
    start: "top 80%",
    end: "top 40%",
  },
});

t1.from(".page4-elem", {
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page4-elem",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
});

t1.from(".page4-dets-elem", {
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page4-dets-elem",
    // markers: true,
    start: "top 70%",
    end: "top 40%",
    scrub: 1,
  },
});
