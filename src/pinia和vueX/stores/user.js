import {defineStore } from 'pinia'
 const useUserStore = defineStore('userInfo', {
    state: () => ({//相当于vue中的data
        username:'张三',
        age:18,
        like:'girl',
        obj:{money:100,friend:10},
        hobby:[
            {id:1,name:'抽烟',level:1},
             {id:2,name:'喝酒',level:10}
        ]
    }),
     actions: {//相当于vue中的methods
          addAge(e){
              console.log('接受的数据',e)
              this.age=this.age+e
          },
         asynchronous(){
              return new Promise((resolve,reject)=>{
                  setTimeout(()=>{
                      resolve('模拟异步返回值')
                  },2000);
              })
         },
         async getList(){
              const res=await this.asynchronous()
             console.log(res)
         }
     },
     getters:{//相当于computed计算属性
        //类似计算属性,参数state指向defineStore的state
        doubleAge(state){
            return state.age*2
        },
         //在getter中使用另一个getter this指向当前存储库
         addOption(){
             return this.doubleAge+1
         },
         //返回一个函数
         returnFunction(state){
             return function(id){
                 return state.hobby.find(item=>item.id===id)
             }
         }
     },
     //persist:true//打开persist
     persist:{
        key:'piniaStore',//储存名称
         storage:sessionStorage,//储存方式
         paths:['username','age']//储存state中的哪些需要持久化.[]表示不持久化任何状态,undefined 或 null 表示持久化整个 state
     }

})

export default useUserStore