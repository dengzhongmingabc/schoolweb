<template>
    <div>
      <van-calendar
        style="border-bottom: 1px #F2F2F2 solid"
        title="日历"
        :show-title = "false"
        :poppable="false"
        :show-confirm="false"
        :style="{ height: '355px'}"
      />
    </div>
</template>

<script>

  import Vue from 'vue';
  import { Calendar } from 'vant';

  Vue.use(Calendar);
  export default {
    name: 'courseList'
  }
</script>

<style scoped>

</style>
