function search(){
    var cpf = document.getElementById('cpf').value 
    var temp = new Date().getTime()
    var database = firebase.database()
    

    // validação de campo vazio
    if(cpf == 0 || cpf == '') {
        window.alert('Campo CPF esta vazio!')
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
