import { carregaTarefa } from './carregaTarefa.js';
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'

export const handleNovoItem = (event) => {
    event.preventDefault();

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []  ;

    const input = document.querySelector("[data-form-input]") ;
    const valorInput = input.value; 

    const calendario = document.querySelector("[data-calendario]");
    const data = moment(calendario.value);
    const horario = data.format('HH:mm')

    const dataFormatada = (data.format('DD/MM/YYYY'))
    const concluida = false;

    const dados = {
        valorInput ,
        dataFormatada,
        horario,
        concluida
    }

    const tarefasArray = [...tarefas , dados]

    localStorage.setItem("tarefas" , JSON.stringify(tarefasArray));

    input.value = " ";
    carregaTarefa()
}

export const Tarefa = ({ valorInput , horario , concluida } , id) => {
    
    const criaLi = document.createElement("li");
    const conteudo = `<p class="content">${horario} * ${valorInput}</p>`; // template string 
    
    if(concluida) {
        criaLi.classList.add('done');
    }

    criaLi.classList.add('task');
    criaLi.innerHTML = conteudo;

    

    criaLi.appendChild(BotaoConclui(carregaTarefa, id));
    criaLi.appendChild(BotaoDeleta(carregaTarefa , id));
   
    return criaLi
}