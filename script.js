const button = document.querySelector('#confirmButton');

button.addEventListener('click', function () {
    alert('¡Tu cita está lista para confirmar!');
});
const firstName = document.querySelector('#firstName').value;
const lastName = document.querySelector('#lastName').value;
const service = document.querySelector('#service').value;
const date = document.querySelector('#date').value;
const time = document.querySelector('#time').value;
const button = document.querySelector('#confirmButton');

button.addEventListener('click', function () {
    alert(
        `¡Hola ${firstName} ${lastName}! Tu cita para ${service} está solicitada para el ${date} a las ${time}.`
    );
});
