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

const controls = document.querySelectorAll('.control')
let currentItem = 0
const items = document.querySelectorAll('.item')
const maxItems = items.length

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = 
        control.classList.contains("arrow-left")

        if (isLeft) {
            currentItem -= 1
        } else {
            currentItem += 1
        }

        if (currentItem >= maxItems) {
            currentItem = 0
        }

        if (currentItem < 0){
            currentItem = maxItems - 1
        }

        items.forEach((item) => item.classList.remove('current-item'))

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        })

        items[currentItem].classList.add("current-item")
    })
})
