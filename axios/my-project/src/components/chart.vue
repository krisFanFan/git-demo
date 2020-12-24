<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import 'echarts/extension/bmap/bmap' // 引入百度地图插件
export default {
  // mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '1000px'
    },
    height: {
      type: String,
      default: '1000px'
    }
  },
  data() {
    return {
      chart: null,
      dataPoint: [{
        name: '齐齐哈尔',
        log: 123.97,
        lat: 47.33,
        remark: '2'
      },
      {
        name: '赤峰',
        log: 118.87,
        lat: 42.28,
        remark: '5'
      },
      {
        name: '成都',
        log: 104.06,
        lat: 30.67,
        remark: '3'
      }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    async initChart() {
      try {
        this.chart = echarts.init(this.$el, 'macarons')
        this.chart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: (params) => {
              return '设备数' + params.value[2]
            }
          },
          bmap: {
            center: [114.547443, 22.740894],
            zoom: 13,
            roam: true,
            mapStyle: {
              styleJson:  [ {
					'featureType' : 'water',
					'elementType' : 'all',
					'stylers' : {
						'color' : '#031628'
					}
				}, {
					'featureType' : 'land',
					'elementType' : 'geometry',
					'stylers' : {
						'color' : '#000102'
					}
				}, {
					'featureType' : 'highway',
					'elementType' : 'all',
					'stylers' : {
						'visibility' : 'off'
					}
				}, {
					'featureType' : 'arterial',
					'elementType' : 'geometry.fill',
					'stylers' : {
						'color' : '#000000'
					}
				}, {
					'featureType' : 'arterial',
					'elementType' : 'geometry.stroke',
					'stylers' : {
						'color' : '#0b3d51'
					}
				}, {
					'featureType' : 'local',
					'elementType' : 'geometry',
					'stylers' : {
						'color' : '#000000'
					}
				}, {
					'featureType' : 'railway',
					'elementType' : 'geometry.fill',
					'stylers' : {
						'color' : '#000000'
					}
				}, {
					'featureType' : 'railway',
					'elementType' : 'geometry.stroke',
					'stylers' : {
						'color' : '#08304b'
					}
				}, {
					'featureType' : 'subway',
					'elementType' : 'geometry',
					'stylers' : {
						'lightness' : -70
					}
				}, {
					'featureType' : 'building',
					'elementType' : 'geometry.fill',
					'stylers' : {
						'color' : '#000000'
					}
				}, {
					'featureType' : 'all',
					'elementType' : 'labels.text.fill',
					'stylers' : {
						'color' : '#857f7f'
					}
				}, {
					'featureType' : 'all',
					'elementType' : 'labels.text.stroke',
					'stylers' : {
						'color' : '#000000'
					}
				}, {
					'featureType' : 'building',
					'elementType' : 'geometry',
					'stylers' : {
						'color' : '#022338'
					}
				}, {
					'featureType' : 'green',
					'elementType' : 'geometry',
					'stylers' : {
						'color' : '#062032'
					}
				}, {
					'featureType' : 'boundary',
					'elementType' : 'all',
					'stylers' : {
						'color' : '#465b6c'
					}
				}, {
					'featureType' : 'manmade',
					'elementType' : 'all',
					'stylers' : {
						'color' : '#022338'
					}
				}, {
					'featureType' : 'point',
					'elementType' : 'all',
					'stylers' : {
						'visibility' : 'off'
					}

				}, {
					"featureType" : "poi",
					"elementType" : "all",
					"stylers" : {
						"color" : "#93c47d",
						"visibility" : "off"
					}
				} ]
            }
          },
          series: [
            // 点数据
            {
              name: '设备数',
              type: 'scatter', // 类型，表示点数据
              coordinateSystem: 'bmap',
              data: this.convertPointData(this.dataPoint), // 数据源
              symbolSize: 8, // 标记点大小
              // 标记样式：可使用svg图标
              symbol: 'path://M512 64C306.4 64 140 230.4 140 436c0 101.6 40.8 194.4 107.2 261.6L512 960l264-263.2c66.4-67.2 107.2-159.2 107.2-261.6C884 230.4 717.6 64 512 64z m128 331.2c-4.8 62.4-54.4 112-116.8 116.8-75.2 6.4-138.4-53.6-138.4-127.2 0-70.4 57.6-128 128-128 73.6 0 133.6 63.2 127.2 138.4z',
              // 角度信息
              symbolRotate: 0,
              // 鼠标选中说明
              label: {
                normal: {
                  formatter: '{b}', // tooltip显示，自定义参考上方例子
                  position: 'left', // 对齐
                  show: false // 是否一直显示
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: 'red' // 颜色信息
                }
              }
            }
          ]
        })
        // const bmap = this.chart.getModel().getComponent('bmap').getBMap()
        // bmap.addControl(new BMap.MapTypeControl())
      } catch (err) {
        console.log(err)
      }
    },
    convertPointData(data) {
      var res = []
      for (const item in data) {
        res.push({
          name: data[item].name,
          value: [data[item].log, data[item].lat, data[item].remark]

        })
      }
      return res
    }
  }
}
</script>

