function search(){
    var cpf = document.getElementById('cpf').value 
    console.log(cpf)
    validation(cpf)
}

function validation(cpfValue) {
    document.getElementById('list').innerHTML = '<h3>Certificado de: </h3>'+cpfValue
}
