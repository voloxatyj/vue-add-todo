<template>
  <div>
   <v-toolbar
   flat
   dense
   dark
   color="green"
   >
   <v-toolbar-title>
    {{title}}
   </v-toolbar-title>
   </v-toolbar>
   <div>
    <slot>No slot content defined</slot> 
   </div>
  </div>
</template>

<script>
export default {
 props:{
  title:String,
 },
};
</script>

<style>

</style>