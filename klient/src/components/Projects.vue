<template>
  <Panel title="Projects">
   <div v-for="project in projects" :key="project.id" class="text-field">
    <v-layout row wrap>
     <v-flex xs9 >
      <span v-if="!project.isEditMode">{{project.title}}</span>
     </v-flex>
     <v-text-field autofocus v-if="project.isEditMode" :value="project.title" @keyup.enter="saveProject(project)" @input="setProjectTitle({project,title:$event,})"></v-text-field>
       <v-flex xs3>
        <v-icon class="icon" @click="setEditMode(project)" v-if="!project.isEditMode">edit</v-icon>
        <v-icon class="icon" v-if="project.isEditMode" @click="saveProject(project)">check</v-icon>
        <v-icon class="icon" @click="deleteProject(project)">delete</v-icon>
       </v-flex>
     </v-layout>
    </div>
   <v-layout row wrap class="text-input">
    <v-flex xs8>
     <v-text-field
     placeholder="My project name...."
     :value="newProjectName"
     @input="setNewProjectName"
     @keyup.enter="createProject"
   ></v-text-field>
    </v-flex>
    <v-flex xs4>
     <v-btn @click="createProject" class="btn"><v-icon class="icon">add_circle</v-icon> Create</v-btn>

    </v-flex>
   </v-layout>
   
  </Panel>
</template>

<script>
import { mapState, mapMutations , mapActions } from 'vuex';

export default {
mounted(){
  this.fetchProjects()
},
computed:{
 ...mapState('projects',['newProjectName','projects',]),
},
methods:{
 ...mapMutations('projects',['setNewProjectName','setProjects','setEditMode','setProjectTitle',]),
 ...mapActions('projects',['createProject','fetchProjects','saveProject','deleteProject',]),
},
}
</script>

<style>
.text-field{
 margin-left:.7rem;
 text-align: left;
 font-size:24px;
 margin-top:.5rem;
}
.text-input{
 margin-left:.1rem;
}
.btn{
 margin-top:0.8rem;
 margin-left:15px;
}
.icon{
 margin-right: 5px;
 cursor:pointer;
}
.icon:hover{
 color:black;
}
</style>