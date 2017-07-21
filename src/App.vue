<template>
  <div id="app">
    <hamaheader></hamaheader>
    <hamabanner></hamabanner>
    <hamastep></hamastep>
  </div>
</template>

<script>
  import hamaheader from './components/header/hamaheader'
  import hamabanner from './components/banner/hamabanner'
  import hamastep from './components/step/hamastep'
  export default {
    components: {
      hamaheader,
      hamabanner,
      hamastep
    }
  }
</script>

<style>

</style>
