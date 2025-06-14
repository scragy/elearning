document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Kunci jawaban
  const answerKey = {
    q1: "a",
    q2: "b",
    q3: "d",
    q4: "b",
    q5: "b"
  };

  let benar = 0;
  for (let key in answerKey) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answerKey[key]) {
      benar++;
    }
  }

  const score = benar * 20; // 1 soal = 20 poin

  document.getElementById("quizForm").classList.add("hidden");
  const resultDiv = document.getElementById("quizResult");
  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = `
    <h2>Terima kasih telah mengerjakan quiz!</h2>
    <p>Skor Anda: <strong>${score}</strong> dari 100</p>
    <p>Silakan lanjut ke <a href="kuisioner.html">Kuisioner UX</a>.</p>
  `;
});