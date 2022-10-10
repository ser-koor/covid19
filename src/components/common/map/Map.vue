<template>
  <div class="map" ref="map">
    <div class="wrap"><p class="title"><i></i>疫情地图</p></div>
    <tab>
      <tab-item @click.native="cutChina" :class="changeColor(1)"><span>中国地图</span></tab-item>
      <tab-item @click.native="cutWorld" :class="changeColor(2)"><span>世界地图</span></tab-item>
    </tab>
    <div v-show="!isShow" id="china"></div>
    <div v-show="isShow" id="world"></div>
  </div>
</template>

<script>
import Tab from '../tab/Tab.vue'
import TabItem from '../tab/TabItem.vue'

import { getCity, getWorld } from '@/api/api.js'

export default {
  name: 'Map',
  components: {
    Tab,
    TabItem
  },
  data() {
    return {
      isShow: false,
      index: 1
    }
  },
  mounted() {
    getCity().then(res => {
      let data = res.data.data.list
      // console.log('2',data);
      let allCity = []
      data.forEach(v => {
        let temp = {
          name: v.name,
          value: v.value,
          // itemStyle: {
          //   normal: {
          //     areaColor: this.setColor(v.value)
          //   }
          // }
        }
        allCity.push(temp)
      })
      this.$chart.chinaMap('china',allCity)
    }).catch(err => {
      console.log(err);
    })
    getWorld({key:'812521f11a321be362568d546f3ca471'}).then(res => {
      // console.log(res.data.newslist);
      let data = res.data.newslist;
      let worldNum = []

        data.forEach(v => {
          let temp = {
            name: v.provinceName,
            value: v.currentConfirmedCount
          }
          worldNum.push(temp)
        })
      this.$chart.worldMap('world',worldNum)
    })
  },
  methods: {
    cutChina() {
      this.index = 1;
      this.isShow = false
    },
    cutWorld() {
      this.index = 2
      this.isShow = true
    },
    changeColor(i) {
      return this.index === i ? 'tabColor' : ''
    }
    // setColor(value) {
    //   let currentColor = '';
    //   switch(true) {
    //     case value === 0:
    //       currentColor = '#fff';
    //       break;
    //     case value > 0 && value < 10:
    //       currentColor = 'rgb(255, 242, 207)';
    //       break;
    //     case value >=10 && value < 1000:
    //       currentColor = 'rgb(253, 210, 160)';
    //       break;
    //     case value >= 1000 && value < 5000:
    //       currentColor = 'rgb(255, 140, 113)';
    //       break;
    //     case value >= 5000 && value < 10000:
    //       currentColor = 'rgb(230, 75, 69)';
    //       break;
    //     case value >= 10000 && value < 100000:
    //     currentColor = 'rgb(189, 19, 22)';
    //     break;
    //     case value >= 100000:
    //       currentColor = 'rgb(127, 17, 0)';
    //     break;
    //   }
    //   return currentColor
    // }
  }
}
</script>

<style scoped>
#china, #world{
  margin: 0 auto;
  width: 100vw;
  height: 500px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
}
.tabColor {
  /* color: rgb(45, 193, 238); */
  background-color: rgb(214, 226, 250);
  border-radius: 10px 10px 0 0;
}
</style>