<template>
  <v-layout row wrap>
     <v-flex xs9 >
      <span v-if="!isEditMode">{{title}}</span>
     </v-flex>
     <v-text-field autofocus v-if="isEditMode" :value="title" @keyup.enter="$emit('onSave')" @input="$emit('onSet',$event)"></v-text-field>
       <v-flex xs3>
        <v-icon class="icon" @click="$emit('onEdit')" v-if="!isEditMode">edit</v-icon>
        <v-icon class="icon" v-if="isEditMode" @click="$emit('onSave')">check</v-icon>
        <v-icon class="icon" @click="$emit('onDelete')">delete</v-icon>
       </v-flex>
     </v-layout>
</template>

<script>
export default {
 props:[
  'isEditMode',
  'title',
  'onSave',
  'onSet', 
  'onEdit',
  'onDelete',
 ],
}
</script>

<style>

</style>