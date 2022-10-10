import echarts from "echarts";
import country from '@/utils/country'

const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get() {
        return {
          chinaMap(id,data) {
            let myEcharts = echarts.init(document.getElementById(id))
            let option = {
              //提示信息
              tooltip: {
                triggerOn: 'click',
                enterable: true,
                formatter(data) {
                  return "<a href='/#/city/" + data.name + "' style='color: #fff'><div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></div></a>"
                }
              },
              visualMap: [{
                orient: 'vertical',//分段方向：horizontal水平
                type: 'piecewise',//分段
                pieces: [
                  {min: 0, max: 0, color: "FFFFFF"},
                  {min: 1, max: 9, color: "rgb(255, 242, 207)"},
                  {min: 10, max: 99, color: "rgb(253, 210, 160)"},
                  {min: 100, max: 999, color: "rgb(255, 140, 113)"},
                  {min: 1000, max: 9999, color: "rgb(230, 75, 69)"},
                  {min: 10000, max: 99999, color: "rgb(189, 19, 22)"},
                  {min: 100000, color: "rgb(127, 17, 0)"},
                ]
              }],
              series: [
                {
                  name: '',
                  type: 'map',//配置图表类型
                  map: 'china',//中国地图
                  roam: false,//是否允许自动缩放
                  zoom: 1.2,//地图缩放比例
                  aspectScale: 0.75,
                  label: {//配置字体
                    normal: {
                      show: true,//控制地图显示名字
                      textStyle: {
                        fontSize: 8
                      }
                    }
                  },
                  itemStyle: {
                    normal: {
                      areaColor: 'rgba(0,255,236,0)',
                      borderColor: 'rgba(0,0,0,.3)',
                    },
                    emphasis: {
                      areaColor: 'rgba(255,180,0,0.8)',
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowBlur: 20,
                      borderWidth: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  },
                  data: data
                }
              ]
            }
            myEcharts.setOption(option)
          },
          worldMap(id,data) {
            let myEcharts = echarts.init(document.getElementById(id))
            let option = {
              //提示信息
              tooltip: {
                formatter(data) {
                  return "<div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></div>"
                }
              },
              visualMap: [{
                orient: 'vertical',//分段方向：horizontal水平
                type: 'piecewise',//分段
                pieces: [
                  {min: 0, max: 0, color: "FFFFFF"},
                  {min: 1, max: 9, color: "rgb(255, 242, 207)"},
                  {min: 10, max: 999, color: "rgb(253, 210, 160)"},
                  {min: 1000, max: 9999, color: "rgb(255, 140, 113)"},
                  {min: 10000, max: 99999, color: "rgb(230, 75, 69)"},
                  {min: 100000, max: 999999, color: "rgb(189, 19, 22)"},
                  {min: 1000000, color: "rgb(127, 17, 0)"},
                ]
              }],
              series: [
                {
                  name: '',
                  type: 'map',//配置图表类型
                  map: 'world',//中国地图
                  roam: true,//是否允许自动缩放
                  zoom: 1.2,//地图缩放比例
                  aspectScale: 0.75,
                  label: {//配置字体
                    normal: {
                      show: false,//控制地图显示名字
                      textStyle: {
                        fontSize: 8
                      }
                    }
                  },
                  nameMap: country,
                  itemStyle: {
                    normal: {
                      areaColor: 'rgba(0,255,236,0)',
                      borderColor: 'rgba(0,0,0,.3)',
                    },
                    emphasis: {
                      areaColor: 'rgba(255,180,0,0.8)',
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowBlur: 20,
                      borderWidth: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  },
                  data: data
                }
              ]
            }
            myEcharts.setOption(option)
          },
          cityMap(id,city,data) {
            let myEcharts = echarts.init(document.getElementById(id))
            let option = {
              //提示信息
              tooltip: {
                formatter(data) {
                  return "<div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></div>"
                }
              },
              visualMap: [{
                orient: 'vertical',//分段方向：horizontal水平
                type: 'piecewise',//分段
                pieces: [
                  {min: 0, max: 0, color: "FFFFFF"},
                  {min: 1, max: 9, color: "rgb(255, 242, 207)"},
                  {min: 10, max: 99, color: "rgb(253, 210, 160)"},
                  {min: 100, max: 499, color: "rgb(255, 140, 113)"},
                  {min: 500, max: 999, color: "rgb(230, 75, 69)"},
                  {min: 1000, max: 9999, color: "rgb(189, 19, 22)"},
                  {min: 10000, color: "rgb(127, 17, 0)"},
                ]
              }],
              series: [
                {
                  name: '市',
                  type: 'map',//配置图表类型
                  map: city,//市级地图
                  roam: false,//是否允许自动缩放
                  zoom: 1.2,//地图缩放比例
                  aspectScale: 0.75,
                  label: {//配置字体
                    normal: {
                      show: true,//控制地图显示名字
                      textStyle: {
                        fontSize: 8
                      }
                    }
                  },
                  itemStyle: {
                    normal: {
                      areaColor: 'rgba(0,255,236,0)',
                      borderColor: 'rgba(0,0,0,.3)',
                    },
                    emphasis: {
                      areaColor: 'rgba(255,180,0,0.8)',
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowBlur: 20,
                      borderWidth: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  },
                  data: data
                }
              ]
            }
            myEcharts.setOption(option)
          }
        }
      }
    }
  })
}

export default install