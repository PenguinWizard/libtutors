const title = "In person tutoring";
const status = "open";
const date = "March 12th, 2026"

if (window.location.pathname.includes("signup.html")) {

    const card = document.createElement("div");
    card.className = "card w-50 mx-auto";

    if (status == "open") {
        card.innerHTML = `
        <div class="card-header">EVENT - ${date}</div> 
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">Status: OPEN</p>
            <a href="form.html" class="btn btn-primary">Attend</a>
        </div>
        `;
    } else {
        card.innerHTML = `
        <div class="card-header">EVENT - ${date}</div>
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

if (window.location.pathname.includes("form.html")) {

    const card = document.createElement("div"); // Create container
    card.className = "tally-form w-100 mx-auto";

    if (status == "open") {
         card.innerHTML = `
        <iframe 
            data-tally-src="https://tally.so/embed/D4NByN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%" 
            height="686" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0"
            title="Library Tutoring Attendance">
        </iframe>
        `;

        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.onload = function() {
            if (typeof Tally !== "undefined") {
                Tally.loadEmbeds();
            }
        };
        document.body.appendChild(script);
    } else {
        card.innerHTML = '<p>Sorry, you have been stopped because the event registration has closed. Please check again later.</p>'
    }
   
    const footer = document.querySelector("footer");

    footer.parentNode.insertBefore(card, footer);
}
