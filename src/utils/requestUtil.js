import { debugRequest } from '../utils/urls.js'
import { reLogin } from '../actions/userAct.js';
//import regeneratorRuntime from './regenerator-runtime/runtime-module'
/**
 * wx.request封装
 * @params payload 参数
 *    url: api
 *    method: 请求方法，默认GET
 *    body: post参数
 *    silent: 是否静默加载
 *    message: 非静默加载时提示文字，非必须
 *    isMustToken: 是否必须带有token，否则重新登录后请求
 *    isAfterToken: 是否登录返回token后执行
 * @func success 成功回调
 * @func fail 失败回调
 */
export const resource = async (payload,success,fail) => {
  const { url, method = 'GET', body = {}, silent = true, message = '',  isMustToken = true, isAfterToken = false } = payload;
  if (!silent) {
    wx.showLoading({
      title: message,
      mask: true
    })
  }
  const headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    ...payload.headers,
  };
  const token = getApp().globalData.token;

  if (token) {
    headers.token = token;
  } else if (isAfterToken) {
    debugRequest && console.log('isAfterToken 等待token值回调')
    await new Promise((resolve,reject) => {
      getApp().tokenReadyCallback = function () {
        headers.token = getApp().globalData.token;
        resolve(true)
      }
    })
  } else if (isMustToken) {
    debugRequest && console.log('isMustToken 重新登录');
    await reLogin().then(res =>{
      headers.token = getApp().globalData.token;
    })
  }

  return wx.request({
    url: url,
    data: body,
    method: method,
    header: headers,
    success: function(res) {
      debugRequest && console.log('Request success:',{
        url,
        method,
        headers,
        requestBody: body,
        res
      })
      if (!silent) {
        wx.hideLoading();
      }
      success(res);
    },
    fail: function(err) {
      debugRequest && console.log('Request failure:',{
        url,
        method,
        headers,
        body,
        err
      })
      if (!silent) {
        wx.hideLoading();
      }
      fail(err);
    }
  })
}
