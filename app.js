const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"]
const BLACK_KEYS = ["s", "d", "g", "h", "j"]
// use keys on keyboard to play like a actual piano!


const keys = document.querySelectorAll(".key")
const whiteKeys = document.querySelectorAll(".key.white")
const blackKeys = document.querySelectorAll(".key.black")

const music = document.getElementById("dearlyBeloved")
let playAudio = () => {
    music.play()
}

const otherMusic = document.getElementById("traverseTown")
let playSong = () => {
    otherMusic.play()
}

let pauseAudio = () => {
    music.pause()
    otherMusic.pause();
}

let pauseSong = () => {
}
// Audio functions


keys.forEach(key => {
    key.addEventListener("click", () => playNote(key))
   //allows sound to display once key is clicked
})

document.addEventListener("keydown", e => {
    if(e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})


let playNote = (key) => {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    //.currentTime = 0 allows me the ability to press a note over & over
    noteAudio.play()
    key.classList.add("active")
    noteAudio.addEventListener("ended", () => {
        key.classList.remove("active")
        //once key is press color will be removed
    })
}

// const playSong = () => {
//     const dearlyBeloved = document.getElementById(dearlyBeloved)
//     dearlyBeloved.play()
//     console.log("ifberuif")
// }




