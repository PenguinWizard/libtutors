const params = new URLSearchParams(window.location.search);

if (window.location.pathname.includes("index.html")) {
    if (params.get("submitted") === "true") {
        var myModal = document.getElementById('submitModal');
        var modal = new bootstrap.Modal(myModal);

        modal.show();

        window.history.replaceState({}, document.title, window.location.pathname);
    }
}

const navbar = document.querySelector(".menu");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.getElementById("closebutton").addEventListener("click", () => {
    window.location.href = "https://cambriantutors.org/book.html"
})