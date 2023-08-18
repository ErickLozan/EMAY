import axios from 'axios'

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const subject = document.getElementById('tema').value
    const text = document.getElementById('descripcion').value
    const tramite = document.getElementById('tramite').value

    document.getElementById('result').innerHTML = `
    <p>Cargando ...</p>
    `

    axios.post('http://localhost:443/', {
        subject,
        text,
        tramite
    })
    .then(response => {
        document.getElementById('result').innerHTML = `
        <p class='text-green-800'>${response.data}</p>
        `
    })
    .catch(err => console.error(err))
})