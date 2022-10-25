// Show Menu

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Menu Show (Validate if constant exits)
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu Hidden (Validate if constant exits)

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove menu Mobile
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  // const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Swiper Projects */

let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerview: 2,
      spaceBetween: -56,
    },
  },
});

/*  Swiper Testimonial  */

let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* EmailJs.com Links */

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("cotact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the field had a value

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");

    // Show message
    contactMessage.textContent = "Write all the input fields";
  } else {
    //  ServiceID / templateID / #form / publickey
    emailjs
      .sendForm(
        "service_6bym423",
        "template_l7812zb",
        "contact-form",
        "XwKR0IzvVA-XOckyO"
      )

      .then(
        () => {
          // Show message and add color

          contactMessage.classList.add("clor-blue");
          contactMessage.textContent = "Message sent Successfully!";

          // Remove message after five second

          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPS! Something Has Failed...", error);
        }
      );

    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);

// Scroll section active link

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*  Show Scroll up */

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //  when the scroll is higher than 350 viewport height, add the show-scroll class to

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/* Dark light Theme */

const themeButton = document.getElementById("theme-button");

const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected )
const selectedTheme = localStorage.getItem("selected-theme");

const selectedIcon = localStorage.getItem("selected-icon");

// we obtain the current theme that the interface ha by balidating the darki-theme class

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic

if (selectedTheme) {
  // if the validation is fulfilled,we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );

  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Active / deactive the theme manually with the button

themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon themee

  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // We save the theme and the current icon that the user chose

  localStorage.setItem("selected-theme", getCurrentTheme());

  localStorage.setItem("selected-theme", getCurrentIcon());
});

/* Change background header */

const scrollHeader = () => {
  const header = document.getElementById("header");
  // when the scroll is greater than 50 rem view poing height,
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

/* Scroll Reveal Animation */

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(
  `.home__data, .projects__container, .testimonial__container, .footer__container`
);
sr.reveal(`.home__info div`, { delay: 600, origin: "bottom", interval: 100 });

sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {
  origin: "left",
});

sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {
  origin: "right",
});

sr.reveal(`.qualification__content, .services__card)`, { interval: 100 });
