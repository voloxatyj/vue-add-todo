<template>
  <v-container>
   <v-layout row wrap>
    <v-flex xs6 offset-xs3>
     <h1>LogIn</h1>
       <v-text-field
       label="Email"
       placeholder="Email"
       :value="loginEmail"
       @input="setLoginEmail"
       ></v-text-field>
       <v-text-field
       label="Password"
       placeholder="Password"
       type="password"
       autocomplete="new-password"
       :value="loginPassword"
       @input="setLoginPassword"
       ></v-text-field>
       <v-alert type='error' :value='loginError'>{{loginError}}</v-alert>
      <v-btn dark @click="login">
      <v-icon dense dark fixed>fingerprint</v-icon>
      LogIn</v-btn>
     </v-flex>
    </v-layout> 
  </v-container>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';

export default {
computed: {
  ...mapState('authentics',['loginEmail','loginPassword','loginError',]),
},
methods:{
  ...mapMutations('authentics',['setLoginEmail','setLoginPassword','setLoginError',]),
  ...mapActions('authentics',['login',]),
},
}
</script>

<style>

</style>