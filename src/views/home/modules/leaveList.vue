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
          <van-cell title="请假申请">
            <template #default>
              <van-tag  type="success" size="large">未通过</van-tag>
            </template>
            <template #title>
              <div class="my_title">
                <div class="title_desc">请假申请</div><div class="title_arrow"><van-icon name="arrow" /> </div>
              </div>
            </template>
          </van-cell>
          <van-cell title="请假人：李源" >
            <template #label>

              <div class="appr">
                <div class="appr_desc">开始时间：2020-02-02 16：30</div>
              </div>
              <div class="appr_desc_text">结束时间：2020-02-02 16：30</div>
            </template>
          </van-cell>
        </van-cell-group>
      </van-list>
    </div>

    <div class="mybutton">
      <div class="icon_my" style="padding-top: 3px;margin-left: 7px;"><van-icon name="plus" /></div>
      <div class="text_my" >请假</div>
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
  .mybutton{
    width: 150px;
    height: 150px;
    border-radius: 75px;
    background-color: #07c160;
    position: fixed;
    bottom:150px;
    left: 300px;
    z-index: 9999;
    line-height: 150px;
    color: white;
    font-size: 36px;
    display: flex;
    padding-left: 8px;
    box-shadow: darkgrey 5px 5px 15px 2px ;
  }
  .top{
    text-align: right;
    padding-top: 10px;
    padding-right: 10px;
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
