<template>
  <div class="cov-info wrap">
    <div class="title">病毒信息</div>
    <p>{{covDesc.note1}}</p>
    <p>{{covDesc.note2}}</p>
    <p>{{covDesc.note3}}</p>
    <p>{{covDesc.remark1}}</p>
    <p>{{covDesc.remark2}}</p>
    <p>{{covDesc.remark3}}</p>
  </div>
</template>

<script>
export default {
  name: "CovInfo",
  props: {
    covDesc: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
.cov-info {
  padding-top: 1rem;
}

</style>