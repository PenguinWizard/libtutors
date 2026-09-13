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

const closeBtn1 = document.getElementById("closebutton1");
    if (closeBtn1) {
        document.getElementById("closebutton1").addEventListener("click", () => {
            window.location.href = "https://cambriantutors.org/book.html"
        })
}

const closeBtn2 = document.getElementById("closebutton2");
    if (closeBtn2) {
        document.getElementById("closebutton2").addEventListener("click", () => {
            window.location.href = "https://cambriantutors.org/book.html"
        })
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("room-select").addEventListener("change", function() {
        console.log("Selected:", this.value);
        if (this.value == 1) {
            document.getElementById("book-iframe").src = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0O968oYxWudUFfR8VQwj8JkXswU-6aP6G9OYIquIectBmVetj2bVsFogsDUx2ncyMsxcREz0-f?gv=true";
        } else {
            document.getElementById("book-iframe").src = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1F-feqIpVPjy7GzK7Yeuz4ZTZcF5bC8PGWoSgFltXBeqRK7_NUl0Bl-SXSWpYtoGQKb5upUsqV?gv=true";
        }
    });
});