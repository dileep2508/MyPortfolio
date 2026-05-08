const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

/* MOBILE MENU */

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

/* CLOSE MENU AFTER CLICK */

document.querySelectorAll(".nav-links a")
.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

  });

});

/* SUCCESS MESSAGE */

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", () => {

  alert("Message Sent Successfully!");

});