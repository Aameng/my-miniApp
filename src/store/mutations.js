import{
  TEST,
  USER_INFO,
  USER_TOKEN,
  USER_CODE
} from './mutation-types.js'
export default{
  [TEST](state,v){
    state.test=v
  },
  [USER_INFO](state,v){
    console.log("vvvvv",v);
    let obj=v;
    state.test222=obj.a;
    state.toekn=obj.b
  },
  [USER_TOKEN](state,v){
    state.token=v
  },
  [USER_CODE](state,v){
    state.code=v
  },
}
