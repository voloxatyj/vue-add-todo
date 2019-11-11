<template>
  <v-toolbar dense dark fixed>
          <v-toolbar-title>VUE TODO</v-toolbar-title>
           <v-btn text v-if='isLoggedIn'>
            <v-icon>playlist_add_check</v-icon>
            Projects</v-btn>
          <v-spacer></v-spacer>
         <v-toolbar-items>
          <v-btn text to='/register' v-if='!isLoggedIn'>
            <v-icon>account_box</v-icon>
          Register</v-btn>
            
            <v-btn text v-if='!isLoggedIn'><v-icon>fingerprint</v-icon>
          Login</v-btn>

          <v-btn text v-if='isLoggedIn'>
            <v-icon @click="logout">exit_to_app</v-icon>
          Logout</v-btn>

          <v-btn text>
            <v-icon>ondemand_video</v-icon>
          How this was Made</v-btn>
         </v-toolbar-items>
        </v-toolbar>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex';
export default {
  computed:{
    ...mapGetters('authentics',['isLoggedIn',],),
  },
  methods:{
    ...mapMutations('authentics',['setToken','logout'],),
  },
}
</script>

<style>

</style>