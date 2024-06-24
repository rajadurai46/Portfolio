/* TOGGLE ICON NABAR */
let menuicon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menuicon.onclick = () => {
    menuicon.classList.toggle("fa-xmark")
    navbar.classList.toggle("active")
}

/* SCROLL SECTION ACTIVE LINK */
let section = document.querySelectorAll("section")
let navlinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop-150
        let height= sec.offsetHeight
        let id = sec.getAttribute("id")

        if(top >= offset && top <offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove("active")
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active")
            })
        }
    })

/* STICKY NAV BAR */
let header = document.querySelector("header")
header.classList.toggle("sticky", window.scrollY > 100)

/* REMOVE TOGGLE ICON AND NAVBAR */
menuicon.classList.remove("fa-xmark")
navbar.classList.remove("active")
}

/* SCROLL REVEAL */
ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".home-content, heading",{origin: "top"})
ScrollReveal().reveal(".home-img, .services-container, portfolio-box, contact form", {origin: "button"});
ScrollReveal().reveal(".home-contact h1, .about-img", {origin: "left"});
ScrollReveal().reveal(".home-contact p, .about-contact", {origin: "right"});

/* TYPED JS */
const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Web Designer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})



