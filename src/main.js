import Vue from 'vue'
import App from './App.vue'
import SectionBar from './components/section-bar.vue'
import "boxicons"

Vue.config.productionTip = false
Vue.component('section-bar', SectionBar);
new Vue({
  render: h => h(App),
}).$mount('#app')
