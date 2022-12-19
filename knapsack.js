function function1() {
    document.getElementById('sol').innerHTML="kkkkkk";
}

const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
    button.value = 'Stop machine';
    paragraph.textContent = 'The machine has started!';
}
