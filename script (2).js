// ==============================
// Mobile Menu
// ==============================

const menuIcon = document.getElementById("menuIcon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// ==============================
// Close Menu When Clicking Link
// ==============================

const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// ==============================
// Contact Form
// ==============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});

// ==============================
// Scroll Animation
// ==============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});    
   
    
    
    
 
 