import Vue from 'vue'
import App from './App.vue'
import { DatePicker } from 'ant-design-vue'
import { Button ,ConfigProvider} from 'ant-design-vue';

Vue.config.productionTip = false

Vue.use(Button);
Vue.use(ConfigProvider);
Vue.use(DatePicker);
new Vue({
  render: h => h(App),
}).$mount('#app')
