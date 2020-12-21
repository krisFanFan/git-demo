export default {
  // getters用于对store的数据进行加工处理形成新的数据
  // 1.getter 可以对Store中已有的数据处理之后形成新的数据，
  // 类似vue的计算属性
  // 2.store中数据发生变化，getter的数据也会跟着变化。
  // 不会修改state里面的数据，只起到包装的作用
  showNum(state) {
    return '当前最新的数量【' + state.count + '】'
  }
}
