<template>
  <div class="wrap">
         <div class="memberItem">
             <div class="top">
                 <div class="left"><div class="headImg"></div><span slyle="font-weight:bold"></span>小悦阅</span></div>
                 <div class="contact">
                   联系家长
                 </div>
             </div>
             <div class="content">
                    <div class="c1">
                        <div class="">
                           书包:{{}}
                        </div>
                        <div class="">
                          书包编号:{{}}
                        </div>
                    </div>
                    <div class="contentCen">
                        借阅时间：{{}}
                    </div>
                    <div class="contentFot">
                        <view class="sendBag" @click="sendBag">分发书包</view>
                    </div>
             </div>
         </div>
  </div>

</template>

<script>


export default {
  // 声明在当前组件下使用 counter-click 组件
  data() {
    return {
      msg: "Hello"
    };
  },
  onLoad() {
  // 解决页面返回后，数据没重置的问题
    Object.assign(this, this.$options.data());
    this.$fly.request({
         method:"get", //post/get 请求方式
         url:"/distributeBag",
         body:{"bag":"5b6997a489645a3d521ee9dc"}
       }).then(res =>{
         console.log(res)
    })
  },
  created(){

  },
  methods: {


    sendBag() {
      var url ="../selectBag/main";
      wx.navigateTo({url});
    }
  }
};
</script>

<style scoped>
div{
  display: flex;
}
.c1{
  flex-direction: row;
  justify-content: space-between;
}
.contentCen{
  padding: 20rpx 0;
}
.wrap{
  font-size: 28rpx;
  color: gray;
  padding: 10rpx 20rpx;
}
.memberItem{
  flex-direction: column;
  flex: 1;
  border:1rpx solid #f2f2f2;
  border-radius: 10rpx;
  margin-top: 20rpx;
}
.top{
  display: flex;
  justify-content:space-between;
  flex-direction: row;
  padding: 10rpx 20rpx;
}
.headImg{
  width: 50rpx;
  height: 50rpx;
  border-radius: 100%;
  overflow: hidden;
  border:1rpx solid gray;
}
.contact{
  border:1rpx solid gray;
  border-radius: 10rpx;
  padding: 2rpx 10rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.content{
  border-top: 1rpx solid #f2f2f2;
  padding: 10rpx 35rpx;
  font-size: 28rpx;
  flex-direction: column;
}
.contentFot{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.sendBag{
  width: 130rpx;
  font-size: 28rpx;
  padding: 5rpx 10rpx;
  border: 1px solid gray;
  text-align: center;
  border-radius: 10rpx;
}
</style>
