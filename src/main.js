import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


if ("serviceWorker" in navigator) {
  console.log("service worker is in navigator");
window.addEventListener("load", () => {
 navigator.serviceWorker
   .register("swag.js")
   .then(reg => console.log(`Service worker registered!`))
   .catch(e => console.log(e));
});
} else {
console.log("No service worker");
}