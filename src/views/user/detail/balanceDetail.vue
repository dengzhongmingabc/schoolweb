<template>
    <div class="container">
      <van-cell-group >
        <van-cell  value="学员：李源">
          <template #title>
            <div class="cell-title">
              <div class="cell-dev"></div>
              <div class="cell-text">报名</div>
            </div>
          </template>
        </van-cell>
        <van-cell  class="vantcell">
          <template #default>
            <van-field label="交易时间：" label-align="right" value="2020-02-05 12:16" readonly />
            <van-field label="订单号：" label-align="right" value="123423435345524" readonly />
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group style="margin-top: 7px">
        <van-cell title="交易详情">
          <template #title>
            <div class="cell-title">
              <div class="cell-dev"></div>
              <div class="cell-text">交易详情</div>
            </div>
          </template>
        </van-cell>
        <van-cell  class="vantcell">
          <template #default>
            <van-field label="绘画：" label-align="right" value="2000元" readonly />
            <van-field label="优惠活动：" label-align="right" value="-100元" readonly />
            <van-field label="教材费：" label-align="right" value="100元" readonly />
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group style="margin-top: 7px">
        <van-cell title="支付详情">
          <template #title>
            <div class="cell-title">
              <div class="cell-dev"></div>
              <div class="cell-text">支付详情</div>
            </div>
          </template>
        </van-cell>
        <van-cell  class="vantcell">
          <template #default>
            <van-field label="应交金额：" label-align="right" value="2000元" readonly />
            <van-field label="实交金额：" label-align="right" value="2000元" readonly />
            <van-field label="欠费：" label-align="right" value="0元" readonly />
            <van-field label="经办人：" label-align="right" value="李生" readonly />
          </template>
        </van-cell>
      </van-cell-group>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { Uploader } from 'vant';

  Vue.use(Uploader);
  export default {
    name: 'workDetail',
    data() {
      return {
        value:3,
        message:'',
        fileList: [
          { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
          // Uploader 根据文件后缀来判断是否为图片文件
          // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
          { url: 'https://cloud-image', isImage: true },
        ]
      };
    },
  }
</script>

<style scoped>
  .container{
    height: 100%;
    background-color: #F2F2F2;
  }
.cell-title{
  display: flex;
}
.cell-dev{
  height: 30px;
  width: 10px;
  margin: 5px 10px 0px 0px;
  background-color: #38ca73;
}
  .cell-text{
    font-weight: bolder;
  }
</style>
