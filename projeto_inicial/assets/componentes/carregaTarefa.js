import { ordenaData, removeDatasRepetidas } from '../../../service/data.js';
import { criaData } from './criaData.js';

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-lista]');
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))|| [] ;

    lista.innerHTML = " "

    const datasUnicas = removeDatasRepetidas(tarefasCadastradas)

    ordenaData(datasUnicas)
    datasUnicas.forEach((dia) =>{
        lista.appendChild(criaData(dia));
        
    })
}