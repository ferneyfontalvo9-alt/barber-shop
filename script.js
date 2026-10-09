const button = document.querySelector('#confirmButton');

button.addEventListener('click', function () {
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const service = document.querySelector('#service').value;
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    alert(
        `¡Hola ${firstName} ${lastName}! Tu cita para ${service} está solicitada para el ${date} a las ${time}.`
    );
});
