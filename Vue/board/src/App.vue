<template>
  <div id="app">
    <!-- 추가된 헤더 컴포넌트 사용 -->
    <Header />

    <router-view />

    <!-- 추가된 풋터 컴포넌트 사용 -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'

export default {
  name: 'App',
  components: {
    Header, 
    Footer,
    methods:{
      button() {
        this.axios.get('/example', { params: { tEst: this.b1 } }).then(result => {
          console.log(result.data)
          this.a = result.data
        })
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:0;
}
</style>
