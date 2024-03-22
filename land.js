var t1 = gsap.timeline();

t1.from("#nav img ,#nav h3,#nav h4 , #nav button", {
  y: -100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
});
t1.from("#main h1", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
});
t1.from("#main>img", {
  opacity: 0,
  scale: 0,
  stagger: 0.3,
});
t1.from("#main>h5", {
  opacity: 0,
  scale: 0,
});
t1.to("#main>h5", {
  y: 30,
  repeat: -1,
  duration: 1,
  yoyo: true,
});
