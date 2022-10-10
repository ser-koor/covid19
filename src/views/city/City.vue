<template>
  <div class="city">
    <h3>{{city}}</h3>
    <div id="city"></div>
  </div>
</template>

<script>
import { getCity } from "@/api/api.js";

export default {
  name: "City",
  props: {
    city: {
      type: String,
      default: ""
    }
  },
  mounted() {
    let cityP = [];
    getCity().then(res => {
      console.log(res.data.data.list);
      let data = res.data.data.list;
      for(let i = 0; i < data.length; i++) {
        if (data[i].name === this.city) {
          for(let j = 1; j < data[i].city.length; j++) {
            let temp = {
              name: data[i].city[j].name + '市',
              value: data[i].city[j].conNum
            }
            cityP.push(temp)
          }
        }
      }
    this.$chart.cityMap("city", this.city, cityP);
    })
  }
};
</script>

<style scoped>
#city {
  width: 100vw;
  height: 80vh;
}
</style>