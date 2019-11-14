<template>
  <Panel title="Projects">
   <div v-for="project in projects" :key="project.id" class="text-field">
    <EditableRecord 
      :isEditMode="project.isEditMode"
      :title="project.title"
      @onClick="projectClicked(project)"
      @onSave="saveProject(project)"
      @onInput="setProjectTitle({project,title:$event,})"
      @onEdit="setEditMode(project)"
      @onDelete="deleteProject(project)"
    />
    </div>
     <CreateRecord 
      placeholder="My project name..."
      :value="newProjectName"
      @onInput="setNewProjectName"
      @create="createProject"
     />
  </Panel>
</template>

<script>
import { mapState, mapMutations , mapActions } from 'vuex';
import CreateRecord from '@/components/CreateRecord';
import EditableRecord from '@/components/EditableRecord';

export default {
mounted(){
  this.fetchProjects()
},
components:{
  CreateRecord,
  EditableRecord,
},
computed:{
 ...mapState('projects',['newProjectName','projects',]),
},
methods:{
  projectClicked(project){
    this.setCurrentProject(project);
    this.fetchTasks(project);
  },
 ...mapMutations('projects',['setNewProjectName','setProjects','setEditMode','setProjectTitle','createProjectId','setCurrentProject',]),
 ...mapActions('projects',['createProject','fetchProjects','saveProject','deleteProject',]),
 ...mapActions('tasks',['fetchTasks',]),
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