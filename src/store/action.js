export default{
  ACTION_TEST(context,obj){
    console.log("context",context);
    console.log("obj",obj);
    context.commit('TEST',obj.b);
    context.commit('USER_INFO32',obj);
    console.log("context2",context);
  }
}
