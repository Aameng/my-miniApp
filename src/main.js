import Vue from 'vue'
import App from './App'
import store from './store'
import * as Data from './actions/gloable'
//import fly from './utils/fly'
import VueBus from 'vue-bus'
Vue.config.productionTip = false
App.mpType = 'app'
//这里挂载请求函数
//Vue.prototype.$post = post
//这里用prototype来绑定store 直接用 new Vue(store)不行
Vue.prototype.$store=store;
Vue.prototype.GLOBAL = Data;
//Vue.prototype.$fly=fly;
Vue.use(VueBus);
const app = new Vue(App);
app.$mount()

export default {
  config: {
    pages: ['pages/login/main','pages/index/main','^pages/memberList/main','pages/selectBag/main','pages/test/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '第一个小程序',
      navigationBarTextStyle: 'black'
    }
  }
}
