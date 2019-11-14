<template>
   <v-layout row wrap class="text-input">
    <v-flex xs8>
     <v-text-field
      :placeholder="placeholder"
      :value="value"
      @input="$emit('onInput',$event)"
      @keyup.enter="$emit('create')"
      ></v-text-field>
      </v-flex>
      <v-flex xs4>
     <v-btn @click="$emit('create')" class="btn"><v-icon class="icon">add_circle</v-icon>Create</v-btn>
    </v-flex>
   </v-layout>
</template>

<script>
export default {
props:[
 'placeholder',
 'value',
 'onInput',
 'create',
],
}
</script>

<style>

</style>