<template>
  <div class="container" @click="clickHandle">
    <div class="message">{{msg}}</div>
    <!-- 使用 click-counter 组件 -->
    <click-counter />
    <a href="../login/main?id=5654">跳转</a>
    <button type="button" name="button" @click="handleClick">点击我！！</button>
    <button type="button" name="button" @click='$store.dispatch("ACTION_TEST",{"a":"hahah","b":"fdsafas"})'>点击我222！！</button>

  </div>
</template>

<script>
// 导入 click-counter 组件
import ClickCounter from "@/components/count/click-counter";
import {mapState,mapMutations} from 'vuex'
import {TEST,USER_INFO,USER_CODE} from '../../store/mutation-types'
import store from '../../store'
export default {
  // 声明在当前组件下使用 counter-click 组件
  components: { ClickCounter },
  created(){
    this.$bus.on('testName', params => {
      console.log('params', params)
    })
  },
  data() {
    return {
      msg: "Hello"
    };
  },
  onLoad(e){
    console.log("event",e);
    //WxNotificationCenter.addNotification("listUpdate", this.testWxNotificationCenter, this)
  },
  computed:{
    //挂載到vue
    ...mapState([
      'test'
    ])
  },
  methods: {
    clickHandle() {
      this.msg = "Clicked!!!!!!";
    },
    testWxNotificationCenter(){
      console.log("successWxNotificationCenter");
    },
    ...mapMutations([
      TEST,USER_INFO,USER_CODE
    ]),
    handleClick(){
      wx.navigateTo({
        url:'../login/main?id=7777'
      })
      //console.log(TEST);
      // console.log("thisthisStore",this.$store)
      // this[USER_INFO]({"a":"hahah","b":"fdsafas"})
      //this[USER_INFO](Math.random())
    }
  },
  beforeDestroy () {
    bus.$off('testName', params => {
      console.log('params', params)
    })
  }

};
</script>

<style scoped>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
</style>
