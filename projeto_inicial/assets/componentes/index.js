import {handleNovoItem} from './criaTarefa.js'
import {carregaTarefa} from './carregaTarefa.js'

const botao = document.querySelector("[data-form-button]");
botao.addEventListener("click" , handleNovoItem) ;
carregaTarefa();



