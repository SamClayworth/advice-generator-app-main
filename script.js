const advice = document.getElementById("advice");
const generate = document.getElementById("generate-advice");

generate.addEventListener("click", () => {
  const adviceHTML = "";
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      advice.innerHTML = `
        <h1 class="title">ADVICE #${data.slip.id}</h1>
        <p class="quote">${data.slip.advice}</p>
        `;
    });
});
