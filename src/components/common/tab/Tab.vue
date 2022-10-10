<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tab'
}
</script>

<style scoped>
.tab {
  width: 100%;
  /* height: 2rem; */
  display: flex;
  /* background-color: #f6f6f6; */
  /* box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2); */
}
</style>