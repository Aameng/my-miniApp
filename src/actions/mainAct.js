import { resource } from '../utils/requestUtil.js';
import * as Urls from '../utils/urls.js';
// import store from '../store'
export function test2(){
  console.log("22222");
}
//测试
export function test() {
  let url = Urls.TEST;
  return new Promise((resolve, reject) => {
    resource({
      url: url,
      method: 'GET',
      isMustToken:false
    },
      function (res) {
        resolve(res.data || {});
        if (res.data.code !== 200) {
            console.log("error",res)
        }
      },
      function (err) {
        reject(err);
      })
  })
}

export function phoneLogin(phone,iv,code) {
  //console.log("fffff", getApp().globalData.code);
  //phone = ' + phone + ' & iv=' + iv + ' & code=' + getApp().globalData.code;
  let url = Urls.WECHAT_LOGIN_URL;
  return new Promise((resolve, reject) => {
    resource({
      url: url,
      method: 'POST',
      body:{
        'phone': phone,
        'iv': iv,
        'code': code
      }
    },
      function (res) {
        resolve(res.data || {});
        if (res.data.code !== 200) {
          wx.showModal({
            title: '温馨提示',
            content: '登录失败，请重新登录',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {

              }
            }
          })
        }
      },
      function (err) {
        reject(err);
        wx.showModal({
          title: '温馨提示',
          content: '登录失败，请重新登录',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
            }
          }
        })
      })
  })
}
//选择书包
export function myBags() {
  let url = Urls.MY_BAGS;
  return new Promise((resolve, reject) => {
    resource({
      url: url,
      method: 'GET'
    },
      function (res) {
        console.log("resfff",res);
        resolve(res.data || {});
        // if (res.data.code !== 200) {
        //
        // }
      },
      function (err) {
        reject(err);
      })
  })
}
