<template>
  <div>
   <slot1 >
   <div slot="lessdemo">修改页面</div>
   <div slot="lessdemo1">hellow</div>
   <div slot="lessdemo2">返回</div>
 </slot1>
  <less3/>
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
import less from "../common/lessdemo2"
import less3 from '../common/lessdemo3'
import slot1 from "../components/slot1.vue";

export default {
  name: "lessdemo",
   components: {
            less,
            less3,
            slot1
        },
};
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
