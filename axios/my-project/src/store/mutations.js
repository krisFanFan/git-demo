let obj = {
  // 2.mutations（改变state值）修改状态值的方法,相对于自定义组件的methods  mutations 处理同步操作
  //   只能通过mutation变更Store里面的数据，不可以直接操作Store中的数据
  //   不能写异步代码，不能直接写延时器
  add(state) {
    // 或者 mutations中方法的第一个参数用来接收state状态对象,第二个参数开始才是接收传递的参数
    state.count++
  },

  addN(state, step) {
    state.count3 += step //step表示外界传过来的参数 每次加step
  },
  //1.可以通过this找到store对象
  // this.state.count = 8;
  jian(state) {
    state.count1--
  },
  jianN(state, step) {
    state.count1 -= step
  },
  //
  allData(state, res) {
    state.data = res
    console.log(state.data)
  }
}
export default obj
