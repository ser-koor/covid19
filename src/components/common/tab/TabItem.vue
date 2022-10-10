<template>
  <div class="tab-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabItem'
}
</script>

<style scoped>
.tab-item {
  height: 2.3rem;
  font-size: 20px;
  flex: 1;
  text-align: center;
  padding: 3px 0;
  /* vertical-align: baseline; */
  line-height: 2.3rem;
}
</style>