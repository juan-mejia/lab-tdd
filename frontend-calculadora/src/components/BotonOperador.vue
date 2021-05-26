<template>
  <div class="operador" @click="$emit('agregar-operador', operador)" v-html="simbolo">

  </div>
</template>

<script>
export default {
    name: 'BotonOperador',
    props: ['operador', 'simbolo']
}
</script>

<style>

</style>