<template>
  <v-toolbar dense dark fixed>
          <v-toolbar-title>VUE TODO</v-toolbar-title>
           <v-btn text v-if='isLoggedIn' to='/projects'>
            <v-icon class="icon">playlist_add_check</v-icon>
            Projects</v-btn>
          <v-spacer></v-spacer>
         <v-toolbar-items>
          <v-btn text to='/register' v-if='!isLoggedIn'>
            <v-icon class="icon">account_box</v-icon>
          Register</v-btn>
            
            <v-btn text to='/login' v-if='!isLoggedIn'><v-icon class="icon">fingerprint</v-icon>
          Login</v-btn>

          <v-btn text v-if='isLoggedIn' @click="logout">
            <v-icon class="icon">exit_to_app</v-icon>
          Logout</v-btn>

          <v-btn text>
            <v-icon class="icon">ondemand_video</v-icon>
          How this was Made</v-btn>
         </v-toolbar-items>
        </v-toolbar>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  computed:{
    ...mapGetters('authentication',['isLoggedIn',],),
  },
  methods:{
    ...mapActions('authentication',['setToken','logout'],),
  },
}
</script>

<style>

</style>