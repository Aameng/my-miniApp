export const env = 'pre';
export const debugRequest = true; //是否log网络请求,发布时改成false
export const enableSendFormId = true; //是否允许发送formId,模拟器下无formId,发布时改成true

let HOST;
if (env === 'pre') {
    //HOST = 'https://test.agentapplet.bbcloud.com/'
    //HOST = 'http://192.168.31.201:6007/'
    HOST = 'http://test.bbcloud.com:6007/'
} else if (env === 'prod') {
   HOST = 'https://agentapplet.bbcloud.com/'
}
//登录
export const PHONE_LOGIN = `${HOST}api/userLogin`;
//选择书包
export const MY_BAGS = `${HOST}api/myBags`;
//登录
export const GET_MEMBERLIST = `${HOST}api/userLogin`;
//登录
export const WECHAT_LOGIN_URL = `${HOST}api/wechatLogin`;
export const TEST = `https://test.reading.bbcloud.com/api/reading/homeReading?page=1&perPage=10`;
