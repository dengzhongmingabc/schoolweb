<template>
  <div class="container">
    <van-tabs v-model="activeName" animated color="#07c160" >
      <van-tab title="通知" name="a">
        <div class="footer">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >

            <van-cell-group v-for="item in list" :key="item"  style="margin-top: 5px" >
              <van-cell title="通知">
                <template #default >
                  <van-icon name="arrow" />
                </template>
              </van-cell>
              <van-cell title="学员：李源" label="描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息" />
            </van-cell-group>
          </van-list>
        </div>
      </van-tab>
      <van-tab title="作业" name="b">内容 2</van-tab>
      <van-tab title="交易" name="c">内容 3</van-tab>
      <van-tab title="课耗" name="d">内容 4</van-tab>
      <van-tab title="反馈" name="e">内容 5</van-tab>
      <van-tab title="申请" name="g">内容 6</van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Tab, Tabs } from 'vant';

  Vue.use(Tab);
  Vue.use(Tabs);
export default {
  name: 'Home',
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

<style  scoped>
  .container{
    background-color: #F2F2F2;
  }

</style>
