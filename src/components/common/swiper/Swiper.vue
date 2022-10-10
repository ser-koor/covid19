<template>
  <div class="swiper">
    <div class="wrap"><div class="title">全国疫情数据</div></div>
    <el-carousel indicator-position="none">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <!-- <h3>{{ item }}</h3> -->
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      imgList: [
        {id: '1', img: require('@/assets/img/s1.png')},
        {id: '2', img: require('@/assets/img/s2.png')},
        {id: '3', img: require('@/assets/img/s3.png')},
        {id: '4', img: require('@/assets/img/s4.png')},
        {id: '5', img: require('@/assets/img/s5.png')}
      ]
    }
  }
};
</script>

<style lang="less" scoped>
.el-carousel__item {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

img {
  width: 100%;
  height: inherit;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>