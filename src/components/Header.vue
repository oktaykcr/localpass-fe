<template>
  <v-toolbar>
      <v-toolbar-title>LocalPass</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
         <v-btn v-if="auth" flat key="username" disabled><v-icon dark left>person</v-icon>{{username}}</v-btn>
         <v-btn flat key="home" to="/" exact><v-icon dark left>home</v-icon>Home</v-btn>
         <v-btn v-if="!auth" flat key="login" to="/login" exact>Login</v-btn>
         <v-btn v-if="!auth" flat key="register" to="/register" exact>Register</v-btn>
         <v-btn v-if="!auth" flat key="password" to="/password" exact>Password</v-btn>
         <v-btn v-if="auth" flat key="logout" @click="onClickLogout" exact><v-icon dark left>exit_to_app</v-icon>Logout</v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile key="home" to="/">
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-if="!auth" key="login" to="/login">
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-if="!auth" key="register" to="/register">
            <v-list-tile-title>Register</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-if="!auth" key="password" to="/password">
            <v-list-tile-title>Password</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-if="auth" key="logout" @click="onClickLogout">
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
      </v-list>
      </v-menu>
    </v-toolbar>
</template>

<script>
  export default {
    computed: {
      auth() {
        return this.$store.getters.isAuthenticated
      },
      username() {
        return this.$store.getters.username
      }
    }, 
    methods: {
      onClickLogout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style>

</style>
