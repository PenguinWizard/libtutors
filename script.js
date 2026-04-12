const params = new URLSearchParams(window.location.search);

if (window.location.pathname.includes("index.html")) {
    if (params.get("submitted") === "true") {
        var myModal = document.getElementById('submitModal');
        var modal = new bootstrap.Modal(myModal);

        modal.show();

        window.history.replaceState({}, document.title, window.location.pathname);
    }
}


