import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import {BootstrapVue} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


library.add(faUserSecret)
library.add(faFontAwesome)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
