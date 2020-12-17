<template>
  <div class="hello">
    <button @click="gethandle">发送get请求</button>
    <button @click="posthandle">发送poat请求</button>
    <button @click="gethandleByutils">调用封装的get请求</button>
  </div>
</template>

<script>
import axios from "axios";
import { get } from "../utils/request";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
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
        .get("https://elm.cangdu.org/shopping/restaurants", {
          params: {
            latitude: 31.22969,
            longitude: 121.22299
          },
          headers: {}
        })
        .then(res => {
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
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
          "https://elm.cangdu.org/v2/login",
          {
            user: "daming",
            pw: "1111"
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
          console.log(res);
          const { success, message } = res.data;
          console.log(message);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // ————————————————————————————————————————————————————————————
    gethandleByutils() {
      get("shopping/restaurants", {}).then(res => {
        console.log(res);
      });
    }
  }
};
</script>



<style  scoped lang="less"></style>
