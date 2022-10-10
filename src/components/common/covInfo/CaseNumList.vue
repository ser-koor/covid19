<template>
  <div class="info_item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CaseNumList'
}
</script>

<style scoped>
.info_item {
  /* width: 100vw; */
  padding: 1rem 0;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  box-shadow: 0px 0px 1px rgba(0,0,0,0.5);
}
</style>