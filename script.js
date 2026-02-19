const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSMNzdkNruqX5dbEIrNJ9zqnRIV8OZU-7FrTHsHen7AZ_qwQ5Q2YftL7PswHdGKffo-HRZqMcsArB90/pub?output=csv";

Papa.parse(sheetUrl, {
  download: true,    
  header: true,      
  skipEmptyLines: true,
  downloadRequestHeaders: {
    "Cache-Control": "no-cache"
  },

  complete: function(results) {

    const rows = results.data.filter(r =>
        r &&
        r.Status &&
        r.Status.toString().trim() !== ""
    );

    if (window.location.pathname.includes("signup.html")) {
        rows.forEach((row, i) => {

            const title = row.Title || "";
            const status = (row.Status || "").trim().toLowerCase();
            const date = row.Date || "";

            const card = document.createElement("div");
            card.className = "card w-50 mx-auto";
            card.style.marginBottom = "1rem";

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
        });
    }
        

    if (window.location.pathname.includes("form.html")) {

        const card = document.createElement("div"); // Create container
        card.className = "tally-form w-100 mx-auto";

        const firstRow = rows[0] || {};
        const status = (firstRow.Status || "").trim().toLowerCase();

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
    },

    error: function(err) {
        console.error("CSV parse error:", err);
    }

    });

const params = new URLSearchParams(window.location.search);

if (window.location.pathname.includes("index.html")) {
    if (params.get("submitted") === "true") {
        var myModal = document.getElementById('submitModal');
        var modal = new bootstrap.Modal(myModal);

        modal.show();

        window.history.replaceState({}, document.title, window.location.pathname);
    }
}


