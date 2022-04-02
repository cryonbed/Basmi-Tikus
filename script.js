const lubang = document.querySelectorAll(".lubang");
const tikus = document.querySelectorAll(".tikus");
const skor = document.querySelector(".skor");

let tanahKosong;
let selesai;
let jmlSkor;

function randomlubang(lubang) {
  const tRandom = Math.floor(Math.random() * lubang.length);
  const rndm = lubang[tRandom];
  if (rndm == tanahKosong) {
    randomlubang(lubang);
  }
  tanahKosong = rndm;
  return rndm;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
  let rndm = randomlubang(lubang);
  let wRandom = randomWaktu(300, 800);
  rndm.classList.add("muncul");

  setTimeout(() => {
    rndm.classList.remove("muncul");
    if (!selesai) {
      munculkanTikus();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  jmlSkor = 0;
  skor.textContent = 0;
  munculkanTikus();

  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukul() {
  jmlSkor++;
  skor.textContent = jmlSkor;
  this.parentNode.classList.remove("muncul");
}

tikus.forEach((t) => {
  t.addEventListener("click", pukul);
});
