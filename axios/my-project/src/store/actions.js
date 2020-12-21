import axios from 'axios'

let actions = {
  //3.Action 类似于mutations
  //如果通过异步操作变更数据，必须通过Axtion ,而不能直接使用Mutation
  //  但是在Action中还是要通过触发mutation的方式间接变更数据
  //context：指代store对象
  addAsync(context) {
    setTimeout(() => {
      //在action中，不能直接修改state中的数据；
      //必须通过context.commit来去触发某个mutation
      context.commit('add')
    }, 1000)
  },
  //触发actions时候携带参数,外界传过来的参数通过step接收
  addAsyncN(context, step) {
    setTimeout(() => {
      context.commit('addN', step)
    }, 1500)
  },
  //   异步减1
  jianAsync(context) {
    setTimeout(() => {
      context.commit('jian')
    }, 1500)
  },
  //   异步减n
  jianAsyncN(context, step) {
    setTimeout(() => {
      context.commit('jianN', step)
    }, 1500)
  },

  allData(context) {
    axios.get('../static/list.json').then(res => {
      context.commit('allData', res)
    })
  }
}
let a = 9
export { actions, a }
