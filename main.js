
const $ = {
  openingContainer: document.querySelector(".opening-container"),
  openingH1: document.querySelector(".opening-container h1"),
  runningCheetah: document.querySelector("img.running-cheetah"),
};

const utils = {
  delay: time => {
    return new Promise(resolve => setTimeout(resolve, time))
}
}

;(
  async () => {
    document.body.addEventListener("click", function (e) {
      e.preventDefault();
      party.confetti(e);
    });
    document.body.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      party.sparkles(e);
    });
    await openingTitle()
  }
)()


async function openingTitle() {
  const { openingH1, runningCheetah, openingContainer } = $;
  const str = 'CHEETS'
  for(let i = 0; i < str.length; i++) {
    await utils.delay(150)
    openingH1.textContent += str[i]
  }
  runningCheetah.style.opacity = 1;
  runningCheetah.style.width = '200px'
    await utils.delay(2000);
  openingContainer.style.opacity = 0
}
