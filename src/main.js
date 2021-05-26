import {suma} from './calculadora';

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    mounted(){
        let res = suma(1, 3)
        window.console.log(res);
    }
  })

// console.log(calculadora.raizcuadrada(100));