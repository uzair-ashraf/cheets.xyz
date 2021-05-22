(async () => {
  const utils = {
    delay: (time) => {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
  };
  const $ = {
    openingContainer: document.querySelector(".opening-container"),
    openingH1: document.querySelector(".opening-container h1"),
    runningCheetah: document.querySelector("img.running-cheetah"),
    mainContainer: document.querySelector("main"),
    cheetsImg: document.querySelector("main .cheets"),
    mainH1: document.querySelector("main > div > h1"),
    mainH2: document.querySelector("main > div > h2"),
    mainH3: document.querySelector("main > div > h3"),
    mainDiscordIcon: document.querySelector("main > div > img.discord-icon"),
  };
  document.body.addEventListener("click", function (e) {
    e.preventDefault();
    party.confetti(e);
  });
  document.body.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    party.sparkles(e);
  });
  await openingTitle($, utils);
  await mainView($, utils);
})();

async function openingTitle($, utils) {
  const { openingH1, runningCheetah, openingContainer } = $;
  const str = "CHEETS";
  for (let i = 0; i < str.length; i++) {
    await utils.delay(150);
    openingH1.textContent += str[i];
  }
  runningCheetah.style.opacity = 1;
  runningCheetah.style.width = "200px";
  await utils.delay(2000);
  openingContainer.style.opacity = 0;
  await utils.delay(500);
  openingContainer.remove();
  await utils.delay(100);
}

async function mainView($, utils) {
  const { mainContainer, cheetsImg, mainH1, mainH2, mainH3, mainDiscordIcon } =
    $;
  mainContainer.classList.remove("hidden");
  await utils.delay(500);
  cheetsImg.style.opacity = 1;
  await utils.delay(500);
  cheetsImg.style.filter = "drop-shadow(-42px 10px 4px #6d396d7a)";
  await utils.delay(500);
  const heading1 = "Hey I'm Cheets!";
  for (let i = 0; i < heading1.length; i++) {
    await utils.delay(75);
    mainH1.textContent += heading1[i];
  }
  await utils.delay(300);

  const heading2 = "I'm a baker and I make VRChat avatars.";
  for (let i = 0; i < heading2.length; i++) {
    await utils.delay(75);
    mainH2.textContent += heading2[i];
  }
  await utils.delay(300);

  const heading3 = "Find me on discord!";
  for (let i = 0; i < heading3.length; i++) {
    await utils.delay(75);
    mainH3.textContent += heading3[i];
  }
  await utils.delay(500);
  mainDiscordIcon.style.opacity = 1;
}
