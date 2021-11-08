const buttonButton = document.querySelector('button.btn');
const divButton = document.querySelector('div.btn');
const output = document.querySelector('.output');

function logClick() {
    output.textContent = 'I heard a click! Resetting in 1 second...';
    setTimeout(function() {
        output.textContent = 'Waiting for a click...';
    }, 1000);
}

buttonButton.addEventListener('click', logClick);
divButton.addEventListener('click', logClick);