document.getElementById("heart").addEventListener("click", function() {
    let music = document.getElementById("bg_music");
    let letter = document.querySelector(".letter-wrapper");

    music.play().catch(error => console.log("Autoplay blocked:", error));
    letter.style.display = "block";
});
