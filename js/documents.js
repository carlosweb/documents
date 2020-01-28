function search(){
    var cpf = document.getElementById('cpf').value
    var alert = document.getElementById('alert') 
    var temp = new Date().getTime()
    var database = firebase.database()
    

    // validação de campo vazio
    if(cpf == 0 || cpf == '') {
        alert.innerHTML = 'Campo CPF esta vazio!'
        alert.style.display = "block"
        alert.classList.add('alert-danger')
        
    }else {
        database.ref(temp).set({
            cpf: cpf
        })
        validation(cpf)
    }
}
// campo vazio para receber CPF
function validation(cpfValue) {
    document.getElementById('busca').setAttribute('class', 'ocultar')
    document.getElementById('resultdado').removeAttribute('class', 'ocultar')
    document.getElementById('list').innerHTML = `<h3>Certificado de: ${cpfValue} </h3> `
}

function back(){
    document.getElementById('busca').removeAttribute('class', 'ocultar')
    document.getElementById('resultdado').setAttribute('class', 'ocultar')
    document.getElementById('cpf').value = ''
}
