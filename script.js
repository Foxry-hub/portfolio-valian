document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.nav-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    menuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('responsive');
    });
});

// dark mode

const toggleSwitch = document.getElementById('toggle-switch');
const body = document.body;

toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
});

// typing effect

var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Developer", "Coder"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

// scroll animation

const sr = scrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,

});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".socical_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });

sr.reveal(".projects-box", { interval: 200});

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin:"left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin:"left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".skill", { delay: 100 });
srLeft.reveal(".skill-box", { delay: 100 });

// active link

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
        const scrollY =window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");

        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    })
}

window.addEventListener("scroll", scrollActive);

document.querySelectorAll(".project-item img").forEach(img => {
    img.addEventListener("click", function () {
        openModal(this.src);
    });
});

function openModal(src) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImage");

    modal.style.display = "flex"; // Hanya aktif kalau ada klik
    modalImg.src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}