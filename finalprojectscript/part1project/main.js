function toggleLamp() {
    const lampOff = document.getElementById('lampOff');
    const lampOn = document.getElementById('lampOn');
    const lampButtonOff = document.getElementById('lampButtonOff');
    const lampButtonOn = document.getElementById('lampButtonOn');
    const lampSound = document.getElementById('lampSound');

    if (lampOff.style.display === 'none') {
        lampOff.style.display = 'inline-block';
        lampOn.style.display = 'none';
        lampButtonOff.style.display = 'inline-block';
        lampButtonOn.style.display = 'none';
    } else {
        lampOff.style.display = 'none';
        lampOn.style.display = 'inline-block';
        lampButtonOff.style.display = 'none';
        lampButtonOn.style.display = 'inline-block';
    }
    playSound(lampSound);
}

function playSound(sound) {
    sound.currentTime = 0; 
    sound.play();
}

