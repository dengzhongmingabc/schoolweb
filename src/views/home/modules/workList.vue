<template>
  <div class="container">
    <van-tabs v-model="activeName" animated color="#07c160" >
      <van-tab title="全部" name="a">
        <div class="footer">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell-group v-for="item in list" :key="item" style="margin-top: 5px">
              <van-cell title="请假申请">
                <template #default>
                  <van-tag  type="success" size="large">已提交</van-tag>
                </template>
                <template #title>
                  <div class="my_title">
                    <div class="title_desc">作业</div><div class="title_arrow"><van-icon name="arrow" /> </div>
                  </div>
                </template>
              </van-cell>
              <van-cell title="请假人：李源" >
                <template #label>
                  <div class="appr">
                    <div class="appr_desc">发布时间：2020-02-02 16：30</div>
                  </div>
                  <div class="appr_desc_text">这是一个作业这是一个作业这是一个作业这是一个作业这是一个作业</div>
                </template>
              </van-cell>
            </van-cell-group>
          </van-list>
        </div>
      </van-tab>
      <van-tab title="未提交" name="b">内容 2</van-tab>
      <van-tab title="已提交" name="b">内容 2</van-tab>
    </van-tabs>
  </div>

</template>

<script>

  import Vue from 'vue'
  import { Tab, Tabs } from 'vant';

  Vue.use(Tab);
  Vue.use(Tabs);
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
  .my_title{
    display: flex;
  }
  .title_desc{

  }
  .title_arrow{
    margin-top: 4px;
    margin-left: 8px;
  }
</style>
