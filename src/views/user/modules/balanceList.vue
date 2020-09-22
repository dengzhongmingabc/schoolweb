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
              <van-cell clickable title="请假申请" @click="toDetail">
                <template #default>
                  <van-tag  type="success" size="large">报名</van-tag>
                </template>
                <template #title>
                  <div class="my_title">
                    <div class="title_desc">余额变动</div><div class="title_arrow"><van-icon name="arrow" /> </div>
                  </div>
                </template>
              </van-cell>
              <van-cell title="请假人：李源" >
                <template #label>
                  <div class="appr">
                    <div class="appr_desc">交易时间：2020-02-02 16：30</div>
                  </div>
                  <div class="appr_desc_text">交易金额：2560元</div>
                </template>
              </van-cell>
            </van-cell-group>
          </van-list>
        </div>
      </van-tab>
      <van-tab title="报名" name="b">内容 2</van-tab>
      <van-tab title="续费" name="c">内容 2</van-tab>
      <van-tab title="转课" name="d">内容 2</van-tab>
    </van-tabs>
  </div>

</template>

<script>

  import Vue from 'vue'
  import { Tab, Tabs } from 'vant';

  Vue.use(Tab);
  Vue.use(Tabs);
  export default {
    name: 'xxxx',
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
      toDetail(){
        this.$router.push({path:'/balance/detail'})
      },
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
