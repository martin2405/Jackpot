const addBtn = document.querySelector(".settings__rate-buttons-button");
const subBtn = document.querySelector(
  ".settings__rate-buttons-button + button"
);
const infoBtn = document.querySelector(".settings__info");
const playBtn = document.querySelector(".settings__play");
const closeWindo = document.querySelector(".info-button");

const infoDiv = document.querySelector(".info");
const jackpot = document.querySelector(".jackpot");
const depositValue = document.querySelector(".settings__deposit-span");
const winInfo = document.querySelector(".settings__win-span");

const rateValue = document.querySelector(".settings__rate-span");

const sources = [
  "./images/cherries.png",
  "./images/cherries.png",
  "./images/cherries.png",
  "./images/cherries.png",
  "./images/cherries.png",
  "./images/citrin.png",
  "./images/citrin.png",
  "./images/citrin.png",
  "./images/citrin.png",
  "./images/orange.png",
  "./images/orange.png",
  "./images/orange.png",
  "./images/strawberry.png",
  "./images/strawberry.png",
  "./images/watermelon.png",
];
const multipliers = [2, 3, 5, 10, 25];

const add = () => {
  if (rateValue.textContent === "0.50") {
    rateValue.textContent = "1.00";
    subBtn.classList.remove("disabled");
  } else if (rateValue.textContent === "1.00") {
    rateValue.textContent = "2.50";
  } else if (rateValue.textContent === "2.50") {
    rateValue.textContent = "5.00";
  } else if (rateValue.textContent === "5.00") {
    rateValue.textContent = "10.00";
  } else if (rateValue.textContent === "10.00") {
    rateValue.textContent = "25.00";
    addBtn.classList.add("disabled");
  }
};

const subtract = () => {
  if (rateValue.textContent === "1.00") {
    rateValue.textContent = "0.50";
    subBtn.classList.add("disabled");
  } else if (rateValue.textContent === "2.50") {
    rateValue.textContent = "1.00";
  } else if (rateValue.textContent === "5.00") {
    rateValue.textContent = "2.50";
  } else if (rateValue.textContent === "10.00") {
    rateValue.textContent = "5.00";
  } else if (rateValue.textContent === "25.00") {
    rateValue.textContent = "10.00";
    addBtn.classList.remove("disabled");
  }
};

const play = () => {
  winInfo.textContent = "0.00";
  const imgs = [...document.querySelectorAll(".window-img")];
  let deposit = Number(depositValue.textContent);
  const rate = Number(rateValue.textContent);
  let index = "";
  let source = "";

  if (deposit < rate) return;
  depositValue.textContent = deposit - rate;

  imgs.forEach((img) => {
    index = Math.floor(Math.random() * sources.length);
    source = sources[index];
    img.setAttribute("src", source);
  });

  const chceckWin = imgs.filter((img) => img.getAttribute("src") === source);

  if (chceckWin.length === 3) {
    if (
      index === 0 ||
      index === 1 ||
      index === 2 ||
      index === 3 ||
      index === 4
    ) {
      index = 0;
    } else if (index === 5 || index === 6 || index === 7 || index === 8) {
      index = 1;
    } else if (index === 9 || index === 10 || index === 11) {
      index = 2;
    } else if (index === 12 || index === 13) {
      index = 3;
    } else if (index === 14) {
      index = 4;
    }

    const prizeValue = rate * multipliers[index];
    winInfo.textContent = prizeValue;
    depositValue.textContent = deposit + prizeValue;
  }
};

const showInfo = () => {
  infoDiv.style.display = "block";
  jackpot.style.filter = "blur(5px)";
};

const closeWindow = () => {
  infoDiv.style.display = "none";
  jackpot.style.filter = "blur(0)";
};

addBtn.addEventListener("click", add);
subBtn.addEventListener("click", subtract);
infoBtn.addEventListener("click", showInfo);
playBtn.addEventListener("click", play);
closeWindo.addEventListener("click", closeWindow);
