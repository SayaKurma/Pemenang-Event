const winners = [
    { name: "Nama Pemenang 1", score: 95 },
    { name: "Nama Pemenang 2", score: 90 },
    { name: "Nama Pemenang 3", score: 85 }
];

document.querySelector("#first-place .name").textContent = winners[0].name;
document.querySelector("#first-place .score").textContent = `Skor: ${winners[0].score}`;

document.querySelector("#second-place .name").textContent = winners[1].name;
document.querySelector("#second-place .score").textContent = `Skor: ${winners[1].score}`;

document.querySelector("#third-place .name").textContent = winners[2].name;
document.querySelector("#third-place .score").textContent = `Skor: ${winners[2].score}`;
