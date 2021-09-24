<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button id=getTodos v-on:click="greet"></button>
    <a id="testvalue"></a>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from "axios"
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    greet: function() {
      console.log("hi");
      var result = axios.get('http://localhost:8050/SpringServer/board.do').catch(err => {
        console.log(err)
      })
      return result;
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
  margin-top: 60px;
}
</style>
