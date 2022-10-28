"use strict";
let userName = prompt("Adınız nedir?");
const labelUserName = document.querySelector("#myName");
labelUserName.textContent = userName;

const labelClock = document.querySelector(".clock");

const tick = function () {
  const now = new Date();
  labelClock.textContent = new Intl.DateTimeFormat("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(now);
};
tick();
setInterval(tick, 1000);
