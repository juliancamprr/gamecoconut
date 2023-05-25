const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')
const img = document.querySelector('.img')
const blink = document.querySelector('.blink')
const form = document.querySelector('.form')

const validateInput = () => {
    if (input.value.length > 4) {
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '')
}

const playSound = () => {
    const audio = new Audio('./sounds/perfect-fart.mp3')
    audio.play()
}

const sound = () => {
    const audio = new Audio('./sounds/cute-uwu.mp3')
    audio.play()
}

const blinksSound = () => {
    const audio = new Audio('./sounds/blink.mp3')
    audio.play()
}

const saveName = (e) => {
    e.preventDefault();
    localStorage.setItem('name', input.value)

    window.location.href = './pages/coconut.html';
}

form.addEventListener('submit', saveName)

img.addEventListener('click', playSound)

input.addEventListener('focus', sound)
input.addEventListener('input', validateInput)