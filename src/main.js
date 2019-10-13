import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import Less from 'Less'
import { Form,FormItem,Input,Button,Message,Notification,Menu,Submenu,Row,Col,
         MenuItem,MenuItemGroup } from 'element-ui'

Vue.config.productionTip = false;
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.prototype.$message = Message;
Vue.prototype.$notification = Notification;
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(Row);
Vue.use(Col);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
