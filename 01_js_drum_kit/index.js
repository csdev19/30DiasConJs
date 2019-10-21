var document = document.getElementById('main-container');

var audio_list = [
    { letter: 'a', audio:'boom.wav'},
    { letter: 's', audio:'clap.wav'},
    { letter: 'd', audio:'hihat.wav'},
    { letter: 'f', audio:'kick.wav'},
    { letter: 'g', audio:'openhat.wav'},
    { letter: 'h', audio:'ride.wav'},
    { letter: 'j', audio:'snare.wav'},
    { letter: 'k', audio:'tink.wav'},
    { letter: 'l', audio:'tom.wav'},
]

document.addEventListener('keyup', function(event) {
    let keyPressed = event.key;
    let button = document.getElementById(`key-${keyPressed}`);
    if(!button) return;
    button.classList.add('pressed')
    let audio = document.createElement("audio");
    let source= document.createElement("source");
    let audio_name = getAudioNameByLetter(keyPressed);
    if(!audio_name) return;
    source.src = `./assets/audio/${audio_name}`;
    audio.appendChild(source);
    audio.play();
    setTimeout(() => {
        button.classList.remove('pressed')
    }, 200);
})

function getAudioNameByLetter(letter) {
    for(let i of audio_list) {
        if(i.letter == letter) return i.audio;
    }
}