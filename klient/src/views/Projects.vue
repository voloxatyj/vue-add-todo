<template>
  <v-container>
   <v-layout>
    <v-flex xs4>
     <Projects></Projects>
    </v-flex>
    
    <v-flex xs8 class="tasks">
     <Panel title="Tasks"></Panel>
    </v-flex>
   </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import Projects from '../components/Projects';
import router from '../router/';

export default {
 components:{
  Projects,
 },
 mounted(){
  if(!this.isLoggedIn){
   return router.push('/login')
  }
 },
 computed:{
  ...mapGetters('authentication',['isLoggedIn',]),
 },
}
</script>

<style>
.tasks{
 margin-left:5rem;
}
</style>