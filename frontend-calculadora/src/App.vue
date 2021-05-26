<template>
  <div id="app">
      <div class="calculadora">
        <div class="container">
            <div class="panel-digital">{{panel}}</div>
            <div class="operador ac" @click="reiniciarPanel()">AC </div>
            <BotonOperador @agregar-operador="agregarOperador($event)" simbolo=&#8730; operador="raizcuadrada" class="operador" />
            <BotonOperador @agregar-operador="agregarOperador($event)" simbolo="/" operador="division" class="operador" />
            <BotonOperador @agregar-operador="agregarOperador($event)" simbolo="x" operador="multiplicacion" class="operador" />
            
            
            <BotonNumero numero=7 @agregar-numero="agregarNumero($event)" />
            <BotonNumero numero=8 @agregar-numero="agregarNumero($event)" />
            <BotonNumero numero=9 @agregar-numero="agregarNumero($event)" />
            
            <BotonOperador @agregar-operador="agregarOperador($event)" simbolo="-" operador="resta" class="operador" />

            <BotonNumero numero=4 @agregar-numero="agregarNumero($event)" />
            <BotonNumero numero=5 @agregar-numero="agregarNumero($event)" />
            <BotonNumero numero=6 @agregar-numero="agregarNumero($event)" />
            
            <BotonOperador @agregar-operador="agregarOperador($event)" simbolo="+" operador="suma" class="operador" />

            <BotonNumero numero=1 @agregar-numero="agregarNumero($event)" />
            <BotonNumero numero=2 @agregar-numero="agregarNumero($event)" />
            <BotonNumero numero=3 @agregar-numero="agregarNumero($event)" />
            <BotonNumero numero=0 @agregar-numero="agregarNumero($event)" />
            <div class="numero"></div>
            <div class="numero"></div>
            <div class="numero"></div>
            <div class="operador igualdad" @click="obtenerResultado()">=</div>
        </div>
      </div>
  </div>
</template>

<script>
import calculadora from '../../src/calculadora'
import BotonNumero from '../src/components/BotonNumero'
import BotonOperador from '../src/components/BotonOperador'

export default {
  name: 'App',
  components: {
    BotonNumero,
    BotonOperador
  },
  data() {
    return {
      panel: '0',
      temporal: '0',
      operador: null
    }
  },
  mounted() {
  },
  methods: {
    agregarNumero: function(numero) {
      if(this.panel === '0'){
        this.panel = numero;
      } else {
        this.panel = this.panel + numero
      }
    },
    agregarOperador: function(operador) {
      if(operador == "suma") {
        this.temporal = this.panel;
        this.panel = "0";
        this.operador = "suma"
      } else if (operador == "resta"){
        this.temporal = this.panel;
        this.panel = "0";
        this.operador = "resta"
      } else if (operador == "multiplicacion"){
        this.temporal = this.panel;
        this.panel = "0";
        this.operador = "multiplicacion"
      } else if (operador == "division"){
        this.temporal = this.panel;
        this.panel = "0";
        this.operador = "division"
      } else if (operador == "raizcuadrada"){
        this.temporal = this.panel;
        this.operador = "raizcuadrada"
        this.obtenerResultado();
      }
    },
    reiniciarPanel: function() {
      this.panel = '0';
      this.temporal = '0';
      this.operador = null;
    },
    obtenerResultado: function(){
      if(this.operador == 'suma'){
        this.panel = calculadora.suma(parseInt(this.temporal), parseInt(this.panel));
        this.operador = null;
        this.temporal = '0'
      } else if(this.operador == 'resta'){
        this.panel = calculadora.resta(parseInt(this.temporal), parseInt(this.panel));
        this.operador = null;
        this.temporal = '0'
      } else if(this.operador == 'multiplicacion'){
        this.panel = calculadora.multiplicacion(parseInt(this.temporal), parseInt(this.panel));
        this.operador = null;
        this.temporal = '0'
      } else if(this.operador == 'division'){
        this.panel = calculadora.division(parseInt(this.temporal), parseInt(this.panel));
        this.operador = null;
        this.temporal = '0'
      } else if(this.operador == 'raizcuadrada'){
        this.panel = calculadora.raizcuadrada(parseInt(this.panel));
        this.operador = null;
        this.temporal = '0'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.calculadora {
  height: 400px;
  width: 300px;
  border: 2px solid rgb(36, 36, 36);
  padding: 10px;
  border-radius: 10px;
}
.container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(6, 1fr);

  gap: 20px;
}
.panel-digital {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 5;
  padding: 5px;
  margin: 10px 0;
  font-size: 1.2rem;
}
.numero, .operador {
  display: flex;
  justify-content: center;
  align-items: center;
}
.numero {
  background-color: rgb(54, 52, 50);
  color: white;
}
.operador {
  background-color: rgb(73, 218, 157);
}
.igualdad {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row-start: 5;
  grid-row-end: 7;
  grid-column-start: 4;
  grid-column-end: 5;
}
</style>
