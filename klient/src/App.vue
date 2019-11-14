<template>
  <div id="app">
        <Toolbar />
    <router-view/>
  </div>
</template>  

<script>
import Toolbar from './components/Toolbar';
export default {
  components:{
    Toolbar,
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'McLaren', cursive;
  text-align: center;
}
</style>
