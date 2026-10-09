const button = document.querySelector('#confirmButton');

button.addEventListener('click', function () {
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const service = document.querySelector('#service').value;
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    if (!firstName || !lastName || !service || !date || !time) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    alert(
        `¡Hola ${firstName} ${lastName}! Tu solicitud para ${service} es el ${date} a las ${time}.`
    );
});
