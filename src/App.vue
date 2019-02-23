<template>
  <div id="app">
    {{showing}}
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="sw()">Load Service Worker</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "apper",
  data:function(){
    return{
      showing:'fucker'
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    sw() {
      if (!'serviceWorker' in navigator){
        this.showing='No service worker Bitch!'
      }
      else{
        this.showing = 'Service worker works bitch!'
      }
   
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
