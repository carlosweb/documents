function search(){
    var cpf = document.getElementById('cpf').value
    var alert = document.getElementById('alert') 

    // validação de campo vazio
    if(cpf == 0 || cpf == '') {
        alert.innerHTML = 'Campo CPF esta vazio!'
        alert.style.display = "block"
        alert.classList.add('alert-danger')
        
    } else {
        validation(cpf)
    }
}

// campo vazio para receber CPF
function validation(cpfValue) {

    var storage = firebase.storage()
    // retorna uma promise que sera processada.
    storage.ref()
    .child(cpfValue)
    .listAll()
    .then(function(todosArquivos){
       
        if(todosArquivos.items.length >= 1){
            next(cpfValue)
        } else {
            alert('cpf não cadastrado')
        }
    }).catch(function(error){
        console.log('Erro', error)
    })
}

function next(cpfValue){
    document.getElementById('busca').setAttribute('class', 'ocultar')
    document.getElementById('resultdado').removeAttribute('class', 'ocultar')
    document.getElementById('list').innerHTML = `<h3>Certificado de: ${cpfValue} </h3> `
}

function back(){
    document.getElementById('busca').removeAttribute('class', 'ocultar')
    document.getElementById('resultdado').setAttribute('class', 'ocultar')
    document.getElementById('cpf').value = ''
}
