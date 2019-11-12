<template>
  <Panel title="Projects">
   <div v-for="project in projects" :key="project.id">{{project.title}}</div>
   <v-layout row wrap>
    <v-flex xs8>
     <v-text-field
     placeholder="My project name...."
     :value="newProjectName"
     @input="setNewProjectName"
   ></v-text-field>
    </v-flex>
    <v-flex xs4>
     <v-btn @click="createProject"><v-icon>add_circle</v-icon> Create</v-btn>

    </v-flex>
   </v-layout>
   
  </Panel>
</template>

<script>
import { mapState, mapMutations , mapActions } from 'vuex';

export default {
computed:{
 ...mapState('projects',['newProjectName','projects',]),
},
methods:{
 ...mapMutations('projects',['setNewProjectName',]),
 ...mapActions('projects',['createProject'],),
},
}
</script>

<style>

</style>