<template>
    <div class="container">
      <van-cell-group >
        <van-cell title="拉丁舞二班">
          <template #label>
            <div>学员：李源</div>
            <div>点评时间：2020-02-05 12:16</div>
          </template>
        </van-cell>
        <van-cell  class="vantcell">
          <template #default>
            <div class="rate-title">
              <div class="rate-label">纪律专注：</div>
              <div class="rate-my"><van-rate color="#ffd21e" readonly :size="15" v-model="value" /></div>
            </div>
            <div class="rate-title">
              <div class="rate-label">互动参与：</div>
              <div class="rate-my"><van-rate color="#ffd21e"  readonly :size="15" v-model="value" /></div>
            </div>
            <div class="rate-title">
              <div class="rate-label">创造能力：</div>
              <div class="rate-my"><van-rate color="#ffd21e" readonly :size="15" v-model="value" /></div>
            </div>
            <div class="rate-title">
              <div >综合评分：</div>
              <div class="rate-my"><van-rate color="#ffd21e" readonly  v-model="value" /></div>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group style="margin-top: 7px">
        <van-cell title="对教师评分"></van-cell>
        <van-cell  class="vantcell">
          <template #default>
            <div class="rate-title">
              <div class="rate-my"><van-rate color="#ffd21e"  v-model="value" /></div>
              <div style="margin-left: 10px">一般</div>
            </div>
            <div><van-field
              v-model="message"
              rows="2"
              autosize
              type="textarea"
              maxlength="50"
              placeholder="请输入说明"
              show-word-limit
            /></div>

          </template>
        </van-cell>
      </van-cell-group>
      <div style="text-align: center;margin-top: 7px">
        <van-button type="primary" style="margin-left: 5px;border: none;width: 50%">提交</van-button>
      </div>

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
  .rate-title{
    display: flex;
  }
  .rate-my{
    margin-top: 2px;

  }
  .rate-label{
    font-size: 6px;
    color: #969799;
  }

</style>
