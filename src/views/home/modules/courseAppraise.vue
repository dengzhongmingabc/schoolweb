<template>
  <div class="container">
    <div class="dataList">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell-group v-for="item in list" :key="item" style="margin-top: 5px">
          <van-cell title="绘画二级" is-link to="/courseAppraise/detail">
          </van-cell>
          <van-cell title="学员：李源" >
            <template #label>

              <div class="appr">
                <div class="appr_desc">评分：</div>
                <van-rate v-model="value" color="#ffd21e" readonly />
              </div>
              <div class="appr_desc_text">赵教师：点评于2020-02-02 16：30</div>
            </template>
          </van-cell>
        </van-cell-group>
      </van-list>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'courseList',
    data() {
      return {
        activeName: 'a',
        list: [],
        loading: false,
        active: 0,
        finished: false,
        value: 3,
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
  .appr{
    display: flex;

  }
  .appr_desc{
    margin-top: 3px;
  }
  .appr_desc_text{
    margin-top: 12px;
  }
</style>
