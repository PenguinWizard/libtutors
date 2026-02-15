const supabaseClient = supabase.createClient(
    "null",
    "null"
  );

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
    decreaseAttendance(1);
  } else {
    localStorage.setItem("attendance", "True");
    document.getElementById("signup_button").textContent = "Unmark as coming";
    increaseAttendance(1);
  }
}

async function increaseAttendance(id) {
  const { data, error } = await supabaseClient
    .from('attendance')
    .update({ attendance_num: supabaseClient.increment(1) })
    .eq('id', id)
    .select();

  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Updated:", data);
  }
}

async function decreaseAttendance(id) {
  const { data, error } = await supabaseClient
    .from('attendance')
    .update({ attendance_num: supabaseClient.increment(-1) })
    .eq('id', id)
    .select();

  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Updated:", data);
  }
}