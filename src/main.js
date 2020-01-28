import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld';
import App from './App.vue'

Vue.config.productionTip = false
Vue.component(HelloWorld);
new Vue({
  render: h => h(App),
}).$mount('#app')
