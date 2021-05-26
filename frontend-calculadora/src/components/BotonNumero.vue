<template>
  <div @click="$emit('agregar-numero', numero)" class="numero">
    {{numero}}
  </div>
</template>

<script>
export default {
  name: 'BotonNumero',
  props: ['numero']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.numero {
  background-color: rgb(54, 52, 50);
  color: white;
}
</style>
