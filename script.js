document.addEventListener("DOMContentLoaded", () => {
  const current = localStorage.getItem("attendance");

  if (current === "True") {
    document.getElementById("signup_button").textContent = "Unmark as coming";
  } else {
    document.getElementById("signup_button").textContent = "Mark as coming";
  }
});

function markAttendance() {
  const current = localStorage.getItem("attendance");

  if (current === "True") {
    localStorage.setItem("attendance", "False");
    document.getElementById("signup_button").textContent = "Mark as coming";
    decreaseAttendance();
  } else {
    localStorage.setItem("attendance", "True");
    document.getElementById("signup_button").textContent = "Unmark as coming";
    increaseAttendance();
  }
}

async function increaseAttendance() {
  try {
    const response = await fetch("https://cors-anywhere.herokuapp.com/"+"https://script.google.com/macros/s/AKfycbztzl7tuBZDQDlSsfsHbfzwyZoP4Owb1bC-Q7zH-Knu8n8Q6i7xhf-yff8WhfnAOv4MoA/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ change: 1 })
    });

    const result = await response.json();

    if (result.success) {
      alert("Attendance sucesfully recorded!");
    } else {
      alert("Sorry, a problem has occured. Please check back in a few minutes.");
    }

  } catch (error) {
    console.error("Increase error:", error);
    alert("Network or script error");
  }
}

async function decreaseAttendance() {
  try {
    const response = await fetch("https://cors-anywhere.herokuapp.com/"+"https://script.google.com/macros/s/AKfycbztzl7tuBZDQDlSsfsHbfzwyZoP4Owb1bC-Q7zH-Knu8n8Q6i7xhf-yff8WhfnAOv4MoA/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ change: -1 })
    });

    const result = await response.json();

    if (result.success) {
      alert("Attendance sucesfully recorded!");
    } else {
      alert("Sorry, a problem has occured. Please check back in a few minutes.");
    }

  } catch (error) {
    console.error("Decrease error:", error);
    alert("Network or script error");
  }
}