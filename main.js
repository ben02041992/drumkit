// Drum Sounds
const clap = new Audio('./Sounds/clap.wav');
const boom = new Audio('./Sounds/boom.wav');
const hihat = new Audio('./Sounds/hihat.wav');
const kick = new Audio('./Sounds/kick.wav');
const openhat = new Audio('./Sounds/openhat.wav');
const ride = new Audio('./Sounds/openhat.wav');
const snare = new Audio('./Sounds/snare.wav');
const tink = new Audio('./Sounds/tink.wav');
const tom = new Audio('./Sounds/tom.wav');

// Drum buttons
const boomBtn = document.getElementById('boomBtn');
const clapBtn = document.getElementById('clapBtn');
const hiBtn = document.getElementById('hiBtn');
const kickBtn = document.getElementById('kickBtn');
const openBtn = document.getElementById('openBtn');
const rideBtn = document.getElementById('rideBtn');
const snareBtn = document.getElementById('snareBtn');
const tinkBtn = document.getElementById('tinkBtn');
const tomBtn = document.getElementById('tomBtn');

const drumButtons = [boomBtn, clapBtn, hiBtn, kickBtn, openBtn, rideBtn, snareBtn, tinkBtn, tomBtn];
const drumSounds = [boom, clap, hihat, kick, openhat, ride, snare, tink, tom];

drumButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => playSound(index));
});

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    const keyIndex = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].indexOf(key);
    
    if (keyIndex !== -1) {
        playSound(keyIndex);
    }
});

function playSound(index) {
    const sound = drumSounds[index];
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}
