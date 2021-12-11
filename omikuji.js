const result = document.querySelector(".card-text");
const omikuji = [
  "Kyou　凶",
  "Daikichi　大吉",
  "Kichi　吉",
  "Chuukichi　中吉",
  "Shoukichi 小吉",
];

const span = document.querySelector("span");
const button = document.querySelector("button");

let func = (button) => {
  button.innerHTML = "Dein Schicksal ist あなたの運勢は...";
};

let img = [
  { name: "Kyou　凶", src: "img/omikuji_kyou.png" },
  { name: "Daikichi　大吉", src: "img/omikuji_daikichi.png" },
  { name: "Kichi　吉", src: "img/omikuji_kichi.png" },
  { name: "Chukichi　中吉", src: "img/omikuji_chuukichi.png" },
  { name: "Shoukichi　小吉", src: "img/omikuji_syoukichi.png" },
];

button.addEventListener("click", () => {
  let num = Math.floor(Math.random() * omikuji.length);
  const unsei = omikuji[num];

  span.classList.add("spinner-border");
  button.classList.add("disabled");

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      span.classList.remove("spinner-border");
      result.innerHTML = unsei;
      document.getElementById("images").src = img[num].src;
      resolve();
    }, 2000);
  });

  promise.then(() => {
    setTimeout(() => {
      if (unsei === "Daikichi　大吉") {
        alert("Omedetou　おめでとう!");
      }
    }, 500);
  });
});
