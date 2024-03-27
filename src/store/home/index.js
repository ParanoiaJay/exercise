import { reCategoryList } from "@/api"
//home模块
const state = {
    //sate中数据默认初始值别乱写
    categoryList:[]
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
}
const actions = {
    //调用接口函数
    async categoryList(){
        let result = await reCategoryList()
        if(result.code == 200){
            commit("CATEGORYLIST",result.data)
        }
        console.log(result,'123')
    }  
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters,
}