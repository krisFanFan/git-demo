<template>
    <div>
    <div class="div">
     
      <slot name="lessdemo"> <span>首页</span></slot>
      <slot name="lessdemo1"> <span>首页</span></slot>
      <slot name="lessdemo2"> <span>首页</span></slot>
    </div>
    </div>
</template>

<script>
export default {
    name:"slot1",
   data() {
       return {
           
       }
   },
}
</script>

<style lang="less" scoped>
.div{
    background-color: pink;
    height: 100px;
    width: 100%;
   h1{
       color: red;
   } 
}
</style>