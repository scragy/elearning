document.getElementById("kuisionerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  // Ganti URL di bawah dengan URL Web Apps Google Apps Script milikmu
  fetch("https://script.google.com/macros/s/AKfycbx8eJkLtWLnWn4xAwq-iXOMdK-phbhYfUqUeJ97VqS9ZNKNY8Fa_qKE_-kiSMwy9u1BkA/exec", {
    method: "POST",
    body: data
  }).then(() => {
    form.classList.add("hidden");
    document.getElementById("thankYou").classList.remove("hidden");
  }).catch(() => {
    form.classList.add("hidden");
    document.getElementById("thankYou").innerHTML = "<h2>Terima kasih telah mengisi kuisioner ini!</h2>";
    document.getElementById("thankYou").classList.remove("hidden");
  });
});