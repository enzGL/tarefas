let tarefas = new Array()
let datas = new Array()

function fnSalvarTarefa(){
    let novaTarefa = document.getElementById("tarefa").value
    let dataTarefa = document.getElementById("data").value

    datas.push(dataTarefa)
    tarefas.push(novaTarefa)
    document.getElementById("tarefa").value = ""
}



function fnExibirTarefa(){
    
    document.getElementById("lista-tarefas").innerHTML = ''

    for(let i = 0; i < tarefas.length; i++){
        document.getElementById("lista-tarefas").innerHTML += '<li>'+ tarefas[i] +' - '+ datas[i] +'</li>'
    }
}