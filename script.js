const meuVideo = document.getElementById("video1")

function playPause() {
    if (meuVideo.paused) {
        meuVideo.play();
        meuVideo.classList.remove("fa-play")
        meuVideo.classList.add("fa-pause")
    }
    else
        meuVideo.pause()
}

