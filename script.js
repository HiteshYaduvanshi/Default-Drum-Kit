
window.addEventListener('keydown', playSound1);
function playSound1(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    if (!audio) return;
    
    audio.currentTime = 0; // Rewind to the start
    audio.play();
    
}

const drumElements = document.querySelectorAll('.key');
drumElements.forEach(element => {
    element.addEventListener('click', function () {
        const keyValue = this.getAttribute('data-key');
        playSound(keyValue);
    });
});

function playSound(keyValue) {
    const audio = document.querySelector(`audio[data-key="${keyValue}"]`);
    const key = document.querySelector(`.key[data-hey="${keyValue}"]`);
    
    if (!audio) return;
    
    audio.currentTime = 0; // Rewind to the start
    audio.play();
    
    key.classList.add('playing');
}