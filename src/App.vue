<template>
  <v-app>
    <Header/>
    <Error/>
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

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Error
  },
  data () {
    return {
      
    }
  }
}
</script>
