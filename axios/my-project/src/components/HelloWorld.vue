<template>
  <div class="hello">
    <!-- 把父组件的值传给子组件 -->
    <slot1 :futoson="value" @sendValueToParent="getValueFromChild">
      <div slot="lessdemo">首页</div>
      <div slot="lessdemo1">hellow</div>
      <div slot="lessdemo2">退出登录</div>
    </slot1>
    <button @click="gethandle">发送get请求</button>
    <button @click="posthandle">发送poat请求</button>
    <button @click="gethandleByutils">调用封装的get请求</button>
    <button @click="jump" slot="lessdemo">lessdemo</button>
    <button>lessdemo1</button>
    <button>lessdemo2</button>
    <span>{{ value1 }}</span>
  </div>
</template>

<script>
import axios from 'axios'
import { get } from '../utils/request'
import slot1 from '../components/slot1.vue'
import less from '../common/lessdemo2'
import bus from '../utils/bus.js'
export default {
  name: 'HelloWorld',
  data() {
    return {
      list: [],
      areaData: [],
      value: '父组件的值100',
      value1: '',
      title: 'helloword组件'
    }
  },
  created() {
    this.hand()
    // 在调用的页面激活mutations中的方法
    this.$store.dispatch('allData')
  },
  computed: {
    //在需要引用的页面，通过 $store.state.data 共享过来数据就可以使用了
    data() {
      return this.$store.state.data
      console.log(this.$store.state.data)
    }
  },
  components: {
    slot1,
    less
  },
  methods: {
    //接收子组件的值
    getValueFromChild(value1, value2, value3) {
      this.value1 = value1
      console.log(value1)
      // value2: 可以传多个值
      // value3: false
      // value4: true
    },

    jump() {
      // 向兄弟组件传值
      bus.$emit('message', this.title)

      this.$router.push({
        name: 'lessdemo'
      })
    },
    //  取出自定义json的值
    hand() {
      axios.get('/static/list.json').then(res => {
        this.areaData = res.data //res.data可根据你的数据格式来，看需求
        console.log(this.areaData) //打印看看数据吧
      })
    },
    gethandle() {
      /*  axios.get 发起get请求
       参数一 表示请求地址
       参数二 表示配置信息
       params  表示传递到服务器端的数据，以url参数的形式拼接在请求地址后面
       {page:1,per:3}
       例如：https://api.cat-shop.penkuoer.com/api/vi/products
       最终生成的URL为
       例如：https://api.cat-shop.penkuoer.com/api/vi/products?page=1&per=3
        */
      axios
        .get('https://elm.cangdu.org/shopping/restaurants', {
          params: {
            latitude: 31.22969,
            longitude: 121.22299
          },
          headers: {}
        })
        .then(res => {
          console.log(res)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    // ————————————————————————————————————————————————
    posthandle() {
      /*  post请求传递3个参数
      参数一 表示请求地址
       参数二 传递的数据，在请求体中传递
       axios默认发送的数据是json格式的
       参数三：配置信息
       */

      axios
        .post(
          'https://elm.cangdu.org/v2/login',
          {
            user: 'daming',
            pw: '1111'
          },
          {
            // params可不写
            params: {
              a: 1,
              b: 2
            }
          }
        )
        .then(res => {
          console.log(res)
          const { success, message } = res.data
          console.log(message)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // ————————————————————————————————————————————————————————————
    gethandleByutils() {
      get('shopping/restaurants', {}).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang="less"></style>
