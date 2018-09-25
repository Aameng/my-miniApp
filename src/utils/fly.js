import Fly from 'flyio/dist/npm/wx'
import store from '../store'



export const httpFly =(payload,success,fail) => {
  const { url, method = 'GET', body = {}, silent = true, message = '', isNeedToken = true } = payload;
  if (!silent) {
    wx.showLoading({
      title: message,
      mask: true
    })
  }
  const fly = new Fly()
  const newFly = new Fly()
  const host = "https://test.reading.bbcloud.com/api/";
  let token=store.state.token;
  fly.interceptors.request.use((request) => {
    console.log("值为request: " , request);
    if(token==""&&isNeedToken){
      fly.lock();
      return newFly.get("https://test.reading.bbcloud.com/api/reading/homeReading?page=1&perPage=10").then((d) => {
        request.headers["token"] = d.data.count;
        store.state.token=d.data.count;
        // d.data.data;
        console.log("token请求成功，值为store: " , store);
        fly.unlock();
        return request; //只有最终返回request对象时，原来的请求才会继续
      }).catch((res)=>{
        //请求token失败
        fly.unlock();
        console.log("ErrorRes",res);
      });
    }

    request.headers = {
      'content-type': 'application/json ',
    };
    console.log("request",request);
    // request.body && Object.keys(request.body).forEach((val) => {
    //   if(request.body[val] === ""){
    //     delete request.body[val]
    //   };
    // });
    request.body = {
      ...body,
      ...request.body
    }
    return request;
  });
  fly.interceptors.response.use(
    (response) => {
      wx.hideLoading();
      console.log("请求成功",response);
      return response.data;//请求成功之后将返回值返回
    },
    (err) => {
      //请求出错，根据返回状态码判断出错原因
      console.log(err);
      wx.hideLoading();
      if(err){
        return "请求失败";
      };
    }
  );
  return fly.request({
       method:method, //post/get 请求方式
       url:url,
       //body:{},
       //header: request.headers
     }).then(res =>{
       console.log(res)
  })

}









//let isNeedToken=true;
//console.log("TestToken",store.state.token);
//添加请求拦截器


//添加响应拦截器


//  fly.config.baseURL = host;
//
// export default fly;
