<template>
  <div class="wrap">
    <div class="headImg">
       <img src="../../img/boy.png" alt="" style="display:block;width:100%;height:100%;background-size:cover;">
       <!-- <image src='https://bbcloud-applets.oss-cn-shenzhen.aliyuncs.com/readingapplet/assets/18-8-30-7.png'  mode='aspectFit'></image> -->
    </div>
    <div class="loginContent" v-if="!phoneLog">
       <!-- <button class='quickLog' @click="goList">快速登录</button> -->
       <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class='quickLog'>快速登录</button>
       <div @click="phoneLogFun">手机验证登录</div>
    </div>
    <div wx:else class="loginContent">
           <input class='input' placeholder='手机号'  v-bind:value='userPhone'></input>
           <input class='input'  placeholder='验证码'  v-bind:value='userCode'></input>
           <button>登录</button>
    </div>
    <div class="footer">无法登陆？添加客服"bbcloud2017"了解详情</div>
  </div>
</template>

<script>
// 导入 click-counter 组件
//import ClickCounter from "@/components/count/click-counter";
import Vue from 'vue';
import {test} from '../../actions/mainAct.js';
import store from '../../store';
import {httpFly} from '../../utils/fly.js'
export default {
  // 声明在当前组件下使用 counter-click 组件
  data() {
    return {
      phoneLog:false,
      userPhone:'',
      userCode:""
    };
  },
  onLoad(e) {
  // 解决页面返回后，数据没重置的问题
    Object.assign(this, this.$options.data());
    console.log("输出看一下",this.$root.$mp.query);
    Vue.prototype.GLOBAL.func1();
    console.log("options", e);
    test();
    //test2();
  },
  created(){
    console.log("httpFly",this.GLOBAL);
   // httpFly({
   //    url: "https://test.reading.bbcloud.com/api/reading/homeReading?page=1&perPage=10",
   //    method: 'GET',
   //    silent: false,
   //    isNeedToken: true
   //  },"11","22");
    // this.$fly.request({
    //      method:"get", //post/get 请求方式
    //      url:"/myBags",
    //      body:{}
    //    }).then(res =>{
    //      console.log(res)
    // })
  },
  methods: {
    phoneLogFun(){
       // this.phoneLog = true
       this.$bus.emit('testName', {
       test: 'test'
       })
    },
    goList(){
      wx.navigateTo({
        url: `../memberList/main`
      });
    },
    getPhoneNumber(e) {
  		console.log(e.mp.detail);
      if (e.mp.detail.errMsg =="getPhoneNumber:ok"){
            wx.showLoading({
              title: '正在登录',
            })
            let that = this;
            phoneLogin(e.mp.detail.encryptedData, e.mp.detail.iv,store.state.code).then(res => {
              wx.hideLoading();
              if(res.code!=200){
                wx.showToast({
                  title: '登录失败',
                  icon: 'none'
                })
                return;
              }
              console.log("登录成功",res);
              store.state.token=res.data;
            }).catch(res => {
              console.log("error", res);
              wx.hideLoading();
              wx.showToast({
                title: '登录失败',
                icon: 'none'
              })
            });
          }
          else{
            console.log("shouquanshibai", e.detail.errMsg);
            wx.showModal({
              title: '温馨提示',
              content: '授权失败',
              showCancel: false
            });
          }
  	}
  }
};
</script>

<style scoped>
.wrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size: 28rpx;
}
.headImg{
  width: 150rpx;
  height: 150rpx;
  border-radius:100%;
  overflow: hidden;
  border:1px solid #f2f2f2;
  margin: 20% 0 10%;
}
.quickLog{
  width: 80%;
  margin-bottom: 5%;
}
.loginContent{
  width: 80%;
  height: 300rpx;
  border:1px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
}
.footer{
  position: fixed;
  bottom:5%;
  text-align: center;
}
.input{
  border:1px solid #f2f2f2;
  padding: 10rpx 20rpx;
  margin-bottom: 10rpx;
  border-radius: 10rpx;
  width: 70%;
}
</style>
