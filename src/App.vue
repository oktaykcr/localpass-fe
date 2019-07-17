<template>
  <v-app dark>
    <Header/>
    <Error/>
    <SuccessMessage/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import SuccessMessage from "./components/SuccessMessage"

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Error,
    SuccessMessage
  }
}
</script>
