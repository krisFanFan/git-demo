<template>
  <div>
    <!-- 向父组件传值 -->
    <button>返回上一页</button>
    <slot1>
      <div slot="lessdemo">修改页面</div>
      <div slot="lessdemo1">hellow</div>
      <div slot="lessdemo2">返回</div>
    </slot1>
    <!-- 方式一：直接获取state的值 -->
    <div>当前count值为{{ $store.state.count }}</div>
    <!-- 方式一获取getter的值 -->
    <div>{{ $store.getters.showNum }}</div>

    <button @click="btnadd">+1</button>
    <button @click="btnaddAsyn1">异步加1</button>

    <!-- 方式二 使用计算属性获取state的值 -->
    <div>当前count值为{{ count3 }}</div>
    <!-- 方式二获取getter的值 -->
    <div>{{ showNum }}</div>

    <button @click="btnaddfive">+5</button>
    <button @click="btnaddAsynN">异步加N</button>

    <div>当前count值为{{ count1 }}</div>
    <button @click="jian">-1</button>
    <button @click="jianN(3)">-N</button>
    <button @click="jianAsync">异步减1</button>
    <button @click="jianAsyncN(5)">异步减N</button>

    <hr />
    <less3 />
    <less></less>

    <!-- 多层嵌套+变量计算； -->
    <div class="box1">
      <div class="box2">
        <div class="box3"></div>
      </div>
    </div>
    <!-- 混合 = 函数 -->
    <div class="box4">我是box4</div>
    <div class="box5">我是box5</div>
    <!--  可以对高度、宽度、角度进行计算； -->
    <!-- <ul>
      <li v-for="item in 4">{{ item }}</li>
    </ul> -->
  </div>
</template>
<script>
import less from '../common/lessdemo2'
import less3 from '../common/lessdemo3'
import slot1 from '../components/slot1.vue'
import bus from '../utils/bus.js'
// 用计算属性获取state的值先导入state
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  name: 'lessdemo',
  components: {
    less,
    less3,
    slot1
  },
  // 接收Helloword传过来的值
  mounted() {
    //需要传值用 mounted
    bus.$on('message', res => {
      console.log(res)
      this.title = res //经过子组件A的传值，此时显示的数据为子组件A的title 而不是子组件B的title
    })
  },
  computed: {
    ...mapState(['count1', 'count3']),
    // 调用getter的第二种方式
    ...mapGetters(['showNum'])
  },
  methods: {
    //调用mutation的第二种方式
    ...mapMutations(['jian', 'jianN']),
    // 减N
    // jianthree() {
    //   this.jianN(4)
    // },
    // 调用action的第二种方式
    ...mapActions(['jianAsync', 'jianAsyncN']),
    // 异步减N
    // AsynjianN() {
    //   this.jianAsyncN(5)
    // },
    btnadd() {
      // 触发mutations的第一种方式this.$store.commit()
      //commit的作用就是调用某个mutations里面的函数
      this.$store.commit('add')
    },
    btnaddfive() {
      this.$store.commit('addN', 5)
    },
    //触发action的第一种方式 dispatch函数专门用来触发axtion
    btnaddAsyn1() {
      // 通过action异步加一
      this.$store.dispatch('addAsync')
    },
    //异步加N
    btnaddAsynN() {
      this.$store.dispatch('addAsyncN', 5)
    }
    // 使用getters的第一种方式
  }
}
</script>

<style lang="less" scoped>
@k: 100px;
.box1 {
  width: @k;
  height: @k;
  background: red;
  .box2 {
    width: @k / 2;
    height: @k / 2;
    background: green;
    .box3 {
      width: @k / 3;
      height: @k / 3;
      background: blue;
    }
  }
}
.test(@color:red,@size:14px) {
  background: @color;
  font-size: @size;
}
.box4 {
  //  不传参，使用默认的；
  .test();
}
.box5 {
  //  给函数传参；
  .test(@color:green, @size:30px);
}
ul {
  list-style: none;
  li {
    border: 1px solid;
    margin: 10px 0;
  }
  li:nth-child(1) {
    width: @k + @k;
    height: @k;
  }
  li:nth-child(2) {
    width: @k -5px;
    height: @k;
  }
  li:nth-child(3) {
    width: @k * @k;
    height: @k;
  }
  li:nth-child(4) {
    width: @k / 2;
    height: @k;
  }
}
</style>
