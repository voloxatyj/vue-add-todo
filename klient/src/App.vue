<template>
  <div id="app">
        <Toolbar />
     
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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
