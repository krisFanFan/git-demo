<template>
    <div>
 <div ref="chart1" style="width:100%;height:376px"></div>
    </div>
</template>

<script>
export default {
    name:'chart1',
  data() {
    return {
      option: {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    };
  },
  mounted() {
    this.getEchartData1();
  },
  methods: {
    getEchartData1() {
      console.log(123);
      var myChart = this.$echarts.init(this.$refs.chart1);
      // 绘制图表
      myChart.setOption(this.option);
    }
  }
};
</script>

<style scoped>

</style>