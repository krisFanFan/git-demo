<template>
  <div id="userLayout">
    <div class="container" >
      <header>
        <h1>凡凡商场</h1>
      </header>
      <div class="width">
        <h2>深圳龙光</h2>
      </div>
    </div>
       <div class="div">div</div>
       <div class="div1">div1</div>
       <div class="div2">div2</div>
    <hr/>
  </div>
</template>

<script>
export default {
  name: "less3"
};
</script>

<style lang="less" scoped>

//加上括号之后不带输出的混合
.font-hn() {
  color: red;
  font-family: micrsoft yahel, "黑体";
}
h1 {
  font-size: 20px;
  .font-hn
}
h2 {
  font-size: 16px;
  .font-hn
}
//带选择器的混合
.my-hover-mixin(){
    &:hover{
        background-color: pink;
    }

}
//&:hover=.my-hover-mixin:hover
button{
    .my-hover-mixin
}
h1{
   .my-hover-mixin 
}
//带参数的混合
.border(@color){
    border:1px solid @color
}
h1{
    &:hover{
        .border(green);
    }
}
h2{
    &:hover{
        .border(black);
    }
}
//带参数并且有默认值的混合
.border_you(@color:yellow){
    border:1px solid @color
}
h1{
    &:hover{
        .border_you;
    }
}
h2{
    &:hover{
        .border_you(blue);
    }
}

//带多个参数的混合  如果传参的括号里面全部都是以括号分割
//会依次传给各个参数值

//如果传参的括号里面既有","又有";"那么会把';'看做一个整体，传给一个参数

.mixin(@color:pink;@padding:20px;@margin:20px){
    color-3:@color;
    padding-3:@padding;
    margin:@margin @margin @margin @margin;
}

.userLayout{
    background-color: pink;
    .div{
        .mixin(blue;)
    }
}

</style>
