// * * * * MOON PHASES
function moonPhase() {
  gsap.set([".moon"], { scale: 0.2, y: -70, autoAlpha: 0 });

  gsap.to(
    [
      "#F1-moon-full",
      "#F1-moon-half-right",
      "#F1-moon-half-left",
      "#F1-moon-crescent-right",
      "#F1-moon-crescent-left",
    ],
    {
      autoAlpha: 1,
      duration: 5,
    }
  );

  // Half
  gsap.to(["#F1-moon-half-left"], {
    x: -60,
    delay: 1.5,
    duration: 2,
  });

  gsap.to(["#F1-moon-half-right"], {
    x: 60,
    delay: 1.5,
    duration: 2,
  });

  // Crescent
  gsap.to(["#F1-moon-crescent-left"], {
    x: -120,
    delay: 1.5,
    duration: 2,
  });

  gsap.to(["#F1-moon-crescent-right"], {
    x: 120,
    delay: 1.5,
    duration: 2,
  });
}

moonPhase();
