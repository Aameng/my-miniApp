<template>
  <div class="wrap">
         <div class="memberItem">
              <div class="left">

              </div>
              <div class="right">
                  <div class="rtop">
                      <div class="">
                        书包:{{}}
                      </div>
                      <div class="">
                        库存:{{}}
                      </div>
                  </div>
                  <div class="">
                      书包编号：{{}}
                  </div>
                  <div class="bottom">
                      <div class="selectBag">
                          选择书包
                      </div>
                  </div>
              </div>
         </div>
  </div>

</template>

<script>

import { myBags } from '../../actions/mainAct.js';
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
  },
  created () {
    // setTimeout(function(){
    //   myBags().then(res => {
    //       console.log("aaasdf",res);
    //   }).catch(res=>{
    //     console.log("error",res);
    //   });
    // },1000);

  },
  methods:  {
    // sendBag() {
    //   var url ="../selectBag/main";
    //   wx.navigateTo({url});
    // }
  }
};
</script>

<style scoped>
div{
  display: flex;
}
.bottom{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.rtop{
  flex-direction: row;
  justify-content: space-between;
}
.wrap{
  font-size: 28rpx;
  color: gray;
  padding: 10rpx 20rpx;
}
.memberItem{
  display: flex;
  flex-direction: row;
  flex: 1;
  border:1rpx solid #f2f2f2;
  border-radius: 10rpx;
  margin-top: 20rpx;
  padding: 20rpx;
  align-items: center;
}
.left{
  display: flex;
  width: 130rpx;
  height: 130rpx;
  margin-right: 20rpx;
  border:1px solid gray;
}
.right{
  display: flex;
  flex-direction: column;
  height: 160rpx;
  justify-content: space-around;
  flex:1;
}
.selectBag{
  font-size: 28rpx;
  padding: 5rpx 15rpx;
  border: 1px solid gray;
  text-align: center;
  border-radius: 10rpx;
}
</style>
