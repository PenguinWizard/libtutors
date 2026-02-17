// const title = "In person tutoring";
// const status = "open";
// const date = "March 12th, 2026";

const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSMNzdkNruqX5dbEIrNJ9zqnRIV8OZU-7FrTHsHen7AZ_qwQ5Q2YftL7PswHdGKffo-HRZqMcsArB90/pub?output=csv";

fetch(sheetUrl)
  .then(res => res.text())
  .then(data => {
    const rows = data.split("\n").map(r => r.split(","));

    const row = rows[1]; // first data row after header

    const title = (row[0] || "").replace(/^"|"$/g, "");;
    const status = (row[1] || "").toLowerCase().replace(/^"|"$/g, "");;
    const date = (row[2] || "").replace(/^"|"$/g, "");;

    console.log(title, status, date);

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
                data-tally-src="https://tally.so/embed/D4NByN?transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="1870"
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
  });

const params = new URLSearchParams(window.location.search);

if (window.location.pathname.includes("index.html")) {
    if (params.get("submitted") === "true") {
        const toastLiveExample = document.getElementById('liveToast')

        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()

        window.history.replaceState({}, document.title, window.location.pathname);
    }
}


