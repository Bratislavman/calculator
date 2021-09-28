<template>
  <div class="container">
    <div class="title">
      {{ title }}
    </div>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    title: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0px;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
  }

  .content {
    border: 1px solid #F2F2F2;
    box-sizing: border-box;
    box-shadow: 0px 1px 8px rgba(64, 42, 22, 0.03);
    border-radius: 8px;
    min-height: 336px;
    padding: 51px 30px;
    text-align: left;
  }
}
</style>