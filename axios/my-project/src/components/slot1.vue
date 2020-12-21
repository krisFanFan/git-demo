<template>
  <div>
    <div class="div">
      <span>{{ data1 }}</span>
      <slot name="lessdemo"> <span>首页</span></slot>
      <slot name="lessdemo1"> <span>首页</span></slot>
      <slot name="lessdemo2"> <span>首页</span></slot>
      <button @click="clickEvent">点击按钮</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slot1',
  data() {
    return {
      data1: '',
      value1: '这是要传给父组件的值',
      value2: '可以传多个值',
      value3: false
    }
  },
  methods: {
    clickEvent() {
      this.$emit('sendValueToParent', this.value1, this.value2, this.value3)
    }
  },
  // 接收父组件传过来的值
  props: ['futoson'],
  created() {
    this.data1 = this.futoson
    console.log(this.data1)
  }
}
</script>

<style lang="less" scoped>
.div {
  background-color: pink;
  height: 100px;
  width: 100%;
  h1 {
    color: red;
  }
}
</style>
