const meuVideo = document.getElementById("video1")

function playPause() {
    if (meuVideo.paused) {
        meuVideo.play();
    }
    else
        meuVideo.pause()
}