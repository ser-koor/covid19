<template>
  <div class="info-item">
    <p class="first">较昨日+<span>{{covnum.news}}</span></p>
    <p class="num">{{covnum.num}}</p>
    <p class="text">{{covnum.text}}</p>
  </div>
</template>

<script>
export default {
  name: 'CaseNumItem',
  data() {
    return {
      caseNumData: null
    }
  },
  props: {
    covnum: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
    // this.$bus.$on('caseNumData', value => {
    //   this.caseNumData = value;
    //   console.log(value);
    // })
    // console.log(this.caseNumData);
  }
}
</script>

<style lang="less" scoped>
@color1: rgb(247, 76, 49);
@color2: rgb(40, 183, 163);
@color3: rgb(66, 66, 66);
.info-item {
  width: 33%;
  text-align: center;
  padding: 0.4rem 0;
  .first {
    color: @color3;
     span {
      color: @color2;
    }
  }
  .first, .text{
    font-size: 12px;
  }
  .num {
    font-size: 20px;
    color: @color1;
  }
}
</style>