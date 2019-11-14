<template>
  <v-container>
   <v-layout>
    <v-flex xs4>
     <Projects></Projects>
    </v-flex>
    
    <v-flex xs8 class="tasks" v-if="currentProject">
     <Tasks />
    </v-flex>
   </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Projects from '../components/Projects';
import Tasks from '../components/Tasks';
import router from '../router/';

export default {
 components:{
  Projects,
  Tasks,
 },
 mounted(){
  if(!this.isLoggedIn){
   return router.push('/login')
  }
 },
 computed:{
  ...mapState('projects',['currentProject',]), 
  ...mapGetters('authentication',['isLoggedIn',]),
 },
}
</script>

<style>
.tasks{
 margin-left:5rem;
}
</style>