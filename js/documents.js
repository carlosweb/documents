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
            listFiles(cpfValue)
            next(cpfValue)
        } else {
            alert('cpf não cadastrado')
        }
    }).catch(function(error){
        console.log('Erro', error)
    })
}

function listFiles(cpfValue) {
    document.getElementById('list').innerHTML = `<h3>Certificado de: ${cpfValue} </h3> `
    var storage = firebase.storage()
    var files
    var fileNames = []
    var fileLinks = []
    storage.ref().child(cpfValue).listAll().then(function(todosArquivos){
        files = todosArquivos.items
        
        for(let i=0; i<files.length; i++){
            fileNames.push(files[i].name)
            storage.ref(cpfValue+'/'+fileNames[i]).getDownloadURL().then(function(url){
             
                var ul = document.getElementById('listLinks')
                var li = document.createElement('li')
                var listItem = `<li><a href='${url}' target='_blank'> ${fileNames[i]} </a></li>`
                li.innerHTML = listItem
                ul.appendChild(li)

               
            }).catch(function(error){
                console.log(error)
            })
        }
    })
}

function next(cpfValue){
    document.getElementById('busca').setAttribute('class', 'ocultar')
    document.getElementById('resultdado').removeAttribute('class', 'ocultar')
}

function back(){
    document.getElementById('busca').removeAttribute('class', 'ocultar')
    document.getElementById('resultdado').setAttribute('class', 'ocultar')
    document.getElementById('cpf').value = ''
}
