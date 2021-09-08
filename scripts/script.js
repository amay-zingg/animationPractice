// * * * * ROTATING TRIANGLES
function Triangle(id, x_1, y_1, x_2, y_2, x_3, y_3, fill) {
  this.id = id;
  this.x_1 = x_1;
  this.y_1 = y_1;
  this.x_2 = x_2;
  this.y_2 = y_2;
  this.x_3 = x_3;
  this.y_3 = y_3;
  this.fill = fill;

  this.draw = function () {
    triangleContainer.innerHTML +=
      `<polygon id="${this.id}" class="trg" points="` +
      this.x_1 +
      " " +
      this.y_1 +
      " " +
      this.x_2 +
      " " +
      this.y_2 +
      " " +
      this.x_3 +
      " " +
      this.y_3 +
      " " +
      this.x_1 +
      " " +
      this.y_1 +
      `" fill="${this.fill}"/>`;
  };
}

function assemblingTriangles() {
  let y1 = 60.6,
    y2 = 70.7,
    y3 = 70.7;
  let quantRow = 15,
    quantColumn = 27;
  let stepX = 30,
    stepY = 30;
  let i = 0;
  for (let j = 0; j < quantRow; j++) {
    let x1 = 77.9,
      x2 = 61.7,
      x3 = 94;
    let angle = -90;
    for (let k = 0; k < quantColumn; k++) {
      i++;
      new Triangle("trg" + i, x1, y1, x2, y2, x3, y3, "moccasin").draw();
      gsap.set("#trg" + i, {
        transformOrigin: "-50% -50%",
        rotate: angle,
      });
      angle += 13.3;
      x1 += stepX;
      x2 += stepX;
      x3 += stepX;
    }
    y1 += stepY;
    y2 += stepY;
    y3 += stepY;
  }
}

assemblingTriangles();

document.addEventListener("click", function (e) {
  gsap.to(".trg", {
    duration: 5000,
    rotate: 360000,
    repeat: -1,
    ease: "linear",
    stagger: -0.005,
  });
});

 
// * * * * MOON PHASES
function moonPhase() {
  gsap.set([".moon"], { scale: 0.2, y: -70, autoAlpha: 0 });

  gsap.set(["#GL-fg"], {
    scale: 1.2,
    y: -30,
    x: 50
  });


  gsap.to(["#GL-fg"], {
    scale: 1.5,
    duration: 4,
    y: -80,
    x: 50
  });

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
