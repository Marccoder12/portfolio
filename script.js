/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});


document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }

        });
    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================
   SKILL ROTATION
========================= */

const skills = {
    "HTML": "Building semantic and accessible structures for the web.",

    "CSS": "Creating responsive layouts, animations and visual interfaces.",

    "JavaScript": "Adding interaction, functionality and dynamic behavior.",

    "TypeScript": "Writing safer and more maintainable JavaScript applications.",

    "React": "Building reusable component-based web interfaces.",

    "Tailwind CSS": "Rapidly creating responsive interfaces with utility classes.",

    "Supabase": "Working with backend services, databases and authentication."
};


const skillName = document.querySelector("#skill-name");
const skillDescription = document.querySelector("#skill-description");
const skillItems = document.querySelectorAll(".skill-item");

let currentSkill = 0;


function changeSkill(index) {

    const name = skillItems[index].textContent;

    skillName.style.opacity = "0";
    skillDescription.style.opacity = "0";

    setTimeout(() => {

        skillName.textContent = name;
        skillDescription.textContent = skills[name];

        skillName.style.opacity = "1";
        skillDescription.style.opacity = "1";

    }, 180);


    skillItems.forEach(item => {
        item.classList.remove("active");
    });

    skillItems[index].classList.add("active");
}


/*
    Automatically change the highlighted technology.
*/

setInterval(() => {

    currentSkill++;

    if (currentSkill >= skillItems.length) {
        currentSkill = 0;
    }

    changeSkill(currentSkill);

}, 2500);


/*
    Allow visitors to click a technology.
*/

skillItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        currentSkill = index;

        changeSkill(index);

    });

});


/* =========================
   SKILL TEXT TRANSITION
========================= */

skillName.style.transition = "opacity 0.18s ease";
skillDescription.style.transition = "opacity 0.18s ease";