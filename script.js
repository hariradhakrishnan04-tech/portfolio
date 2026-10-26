// ===============================
// Sticky Navbar
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// ===============================
// Typing Effect
// ===============================

const text = [
    "Python Full Stack Developer",
    "Frontend Developer",
    "UI Designer",
    "Web Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".hero-left h2").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;
            count++;

        }, 1800);

    } else {

        setTimeout(type, 100);

    }

}

type();

// ===============================
// Counter Animation
// ===============================

const counter = document.querySelector(".experience-card h1");

let value = 0;

const updateCounter = () => {

    if (value < 2) {

        value++;

        counter.innerHTML = value + "+";

        setTimeout(updateCounter, 150);

    }

};

updateCounter();

// ===============================
// Skill Card Animation
// ===============================

const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

skillCards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = ".8s";

    skillObserver.observe(card);

});

// ===============================
// Project Card Animation
// ===============================

const projects = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "scale(1)";

        }

    });

});

projects.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "scale(.8)";
    card.style.transition = ".7s";

    projectObserver.observe(card);

});

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});