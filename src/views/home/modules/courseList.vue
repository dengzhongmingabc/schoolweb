<template>
  <div class="container">
    <van-calendar
      style="border-bottom: 1px #F2F2F2 solid"
      title="日历"
      :show-title="false"
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '355px'}"
    />
    <div class="dataList">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell-group v-for="item in list" :key="item" style="margin-top: 5px">
          <van-cell title="绘画二级" is-link>
          </van-cell>
          <van-cell title="学员：李源" >
            <template #label>
              <div>地址：科技二路</div>
              <div>时间：2020-02-02 16：30</div>
            </template>
          </van-cell>
        </van-cell-group>
      </van-list>
    </div>
  </div>

</template>

<script>

  import Vue from 'vue'
  import { Calendar } from 'vant'

  Vue.use(Calendar)
  export default {
    name: 'courseList',
    data() {
      return {
        activeName: 'a',
        list: [],
        loading: false,
        active: 0,
        finished: false,
        code: ''
      }
    },
    methods: {
      onLoad() {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1)
          }
          // 加载状态结束
          this.loading = false
          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true
          }
        }, 1000)
      }
    }
  }
</script>

<style scoped>
  .container{
    background-color: #F2F2F2;
  }
  .dataList{
    margin-top: 15px;
  }
</style>
