/**
 * 重新登录
 */
export function reLogin() {
  return new Promise((resolve, reject) => {
    wx.login({
      success: function (res) {
        login(res.code).then((res) => {
          getApp().globalData.token = res.data;
          //获取用户信息
          getUserInfo(res.data).then((res) => {
            resolve(true);
          });
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  })
}
