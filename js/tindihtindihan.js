const bg_music = document.getElementById('bg_music');

function start() {
  let bulet = document.getElementById("bulet");
  bulet.addEventListener("transitionend", () => {
    bg_music.play();
});
  bg_music.addEventListener('ended', () => {
    bg_music.play();
});
}
