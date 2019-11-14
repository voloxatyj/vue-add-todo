<template>
  <Panel title="Tasks">
   <div v-for="task in tasks" :key="task.id" class="text-field">
    <EditableRecord 
      :isEditMode="task.isEditMode"
      :title="task.description"
      @onSave="saveTask(task)"
      @onInput="setTaskDescription({task,description:$event,})"
      @onEdit="setEditMode(task)"
      @onDelete="deleteTask(task)"
    >
    <v-icon @click="checkClicked(task)">{{task.completed?'check_box':'check_box_outline_blank'}}</v-icon>
    </EditableRecord>
    </div>
     <CreateRecord 
      placeholder="I need to..."
      :value="newTaskName"
      @onInput="setNewTaskName"
      @create="createTask"
     />
  </Panel>
</template>

<script>
import { mapState, mapMutations , mapActions } from 'vuex';
import CreateRecord from '@/components/CreateRecord';
import EditableRecord from '@/components/EditableRecord';

export default {
  components:{
    CreateRecord,
    EditableRecord,
},
  computed:{
    ...mapState('tasks',['tasks','newTaskName',])
},
  methods:{
    ...mapActions('tasks',['createTask','deleteTask',   'saveTask',]),
    ...mapMutations('tasks',['setNewTaskName',  'setEditMode','setNewTaskName','setTaskDescription','toggleCompleted',]),
  checkClicked(task) {
      this.toggleCompleted(task);
      this.saveTask(task);
    },
},
}
</script>

<style>

</style>