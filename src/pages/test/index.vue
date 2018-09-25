<template>
  <div class="container" @click="clickHandle">
    <div class="message">{{msg}}</div>
    <!-- 使用 click-counter 组件 -->
    <click-counter />
    <a href="../memberList/main">跳55转</a>
  </div>
</template>

<script>
// 导入 click-counter 组件
import ClickCounter from "@/components/count/click-counter";
import Vue from 'vue'
// import { backFun } from '../../actions/mainAct.js';
export default {
  // 声明在当前组件下使用 counter-click 组件
  components: { ClickCounter },

  data() {
    return {
      msg: "Hello231"
    };
  },
  created(){
    // backFun=function(){console.log("测试")}
    // console.log("输出看一下",Vue.prototype.GLOBAL.func1);
    // let hb=this;
    // Vue.prototype.GLOBAL.func1=function(hb){
    //   let kk=hb.data.msg
    //   console.log("触发啦",kk);
    // }
  },
  methods: {
    clickHandle() {
      this.msg = "Clicked!!!!!!";
    }
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
