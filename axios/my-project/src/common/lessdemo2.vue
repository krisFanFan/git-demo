<template>
  <div>
    <header><h3>凡凡商場</h3></header>
    <footer class="width"><h3>深圳龙光</h3></footer>
    <hr>
  </div>
  
</template>

<script>
export default {
  name: "less"
};
</script>

<style lang="less" scoped>
@green: rgb(82, 112, 180);
@baise: white;
header,
footer {
  background-color: @green;
  h3 {
    color: @baise;
  }
}
//作为选择器和属性名的变量
@kuandu: width;
.@{kuandu} {
  @{kuandu}: 150px;
}
//作为url的变量
@imgurl: "https://box.bdimg.com/static/fisp_static/common/img/";
header {
  background: url("@{imgurl}searchbox/logo_news_276_88_1f9876a.png");
  height: 200px;
}

//定义多个相同名称变量时
@var: 0;
.class {
  @var: 1;
  .brass {
    @var: 2;
    three: @var; //这里的值是3
    @var: 3;
  }
  one: @var; //这里的值是1
}
</style>
