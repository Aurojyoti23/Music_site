const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');

const s1 = document.getElementById('s1')
const s2 = document.getElementById('s2')
const s7 = document.getElementById('s7')
let songs = [s1, s2, s7]

// randsong = Math.floor(Math.random[songs])


function playclick() {
    if(songs[0].paused){
        if(songs[1].played || songs[2].played){
            songs[0].pause();
            songs[2].pause();
            songs[1].pause();
            play.src = 'images/play.png'
        }
        else{
            songs[0].play();
            songs[2].pause();
            songs[1].pause();
            play.src = 'images/pause.png'
        }
    }
    else{
        songs[0].play();
        play.src = 'images/pause.png'
    }
}

play.addEventListener('click', playclick)

prev.onclick = function() {
    songs[2].play()
    songs[0].pause();
    songs[1].pause();
    play.src = 'images/pause.png'
}

next.onclick = function() {
    songs[1].play()
    songs[0].pause();
    songs[2].pause()
    play.src = 'images/pause.png'
}