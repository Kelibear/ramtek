const bg_music = document.getElementById('bg_music');

function start() {
  let icon = document.getElementById("bulet");
  icon.addEventListener("transitionend", () => {
    bg_music.play();
});
  bg_music.addEventListener('ended', () => {
    bg_music.play();
});
}
