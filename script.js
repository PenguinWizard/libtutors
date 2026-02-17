if (window.location.pathname.includes("signup.html")) {

    const title = "In person tutoring";
    const status = "open";

    const card = document.createElement("div");
    card.className = "card w-50 mx-auto";

    if (status == "open") {
        card.innerHTML = `
        <div class="card-header">EVENT</div>
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">Status: OPEN</p>
            <a href="form.html" class="btn btn-primary">Attend</a>
        </div>
        `;
    } else {
        card.innerHTML = `
        <div class="card-header">EVENT</div>
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">Status: CLOSED</p>
            <p>Sorry, registration for this event has closed. Please check back again later.</p>
        </div>
        `;
    }
    

    const footer = document.querySelector("footer");

    footer.parentNode.insertBefore(card, footer);
}
