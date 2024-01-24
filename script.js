//Eventos
    //Adicionando evento de clique nas div com classe "item"
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart); //Evento "dragstart" é ativado quando eu clico e arrasto
    item.addEventListener('dragend', dragEnd);  //Evento "dragstart" é ativado quando eu clico, arrasto e solto.
})

    //Adicionando evento pra "salvar" na área que foi colocada o item arrastado. 
document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver); //Vai ser ativado quando eu estiver arrastando e cruzar por cima da div "area"  
    area.addEventListener('dragleave', dragLeave); //Vai ser ativada quando eu sair de uma área "dropável"
    area.addEventListener('drop', drop) //Área que posso soltar.
})

    //Criando eventos para retornar para a área inicial
document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral)
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral)
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral)


//Functions

    //Functions Item

function dragStart(e){
    e.currentTarget.classList.add('dragging') //Adiciona a classe que põe opacidade quando clico e arrasta
}

function dragEnd(e){
    e.currentTarget.classList.remove('dragging') //Remove a classe que põe a opacidade 
}

    //Functions Area

function dragOver(e){
    if (e.currentTarget.querySelector('.item') === null){
    e.preventDefault() //Essa função nega o comportamento padrão do "dragover" que é de não deixar que seja "dropado"
    e.currentTarget.classList.add('hover')
    }
}

function dragLeave(e){
    e.currentTarget.classList.remove('hover')
}

function drop (e){
    e.currentTarget.classList.remove('hover')


    //Verificando se na área desejada já possui alguma coisa ou não
        //Pegando o elemento que tem a classe "dragging"
        let dragItem = document.querySelector('.item.dragging')
    if (e.currentTarget.querySelector('.item') === null){
        e.currentTarget.appendChild(dragItem) //"Transportando" a classe que possui a classe "item" à área destinada atráves do appendChild. (Ele leva consigo os eventos)
    }
}


function dragOverNeutral(e){
    e.preventDefault()
    e.currentTarget.classList.add('hover')
}

function dragLeaveNeutral(e){
    e.currentTarget.classList.remove('hover')
}

function dropNeutral(e){

    //Obs: Aqui não precisa da condicional. Se tiver vazio ou não, ele pode receber qualquer uma das divs.
    let dragItem = document.querySelector('.item.dragging')
    e.currentTarget.classList.remove('hover')
    e.currentTarget.appendChild(dragItem)
}