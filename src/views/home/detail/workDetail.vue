<template>
    <div class="container">
      <van-cell-group >
        <van-cell title="作业要求">
          <template #label>
            <div>学员：李源</div>
            <div>作业发布时间：2020-02-05 12:16</div>
          </template>
        </van-cell>
        <van-cell  class="vantcell">
          <template #default>
            国庆发假 国庆发假 国庆发假 国庆发假 国庆发假 国庆发假 国庆发假 国庆发假
            国庆发假 国庆发假 国庆发假 国庆发假 国庆发假 国庆发假 国庆发假
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group style="margin-top: 7px">
        <van-cell title="作业内容"></van-cell>
        <van-cell  class="vantcell">
          <template #default>
            <div><van-field
              v-model="message"
              rows="2"
              autosize
              type="textarea"
              maxlength="50"
              placeholder="请输入作业文字内容"
              show-word-limit
            /></div>
            <div><van-uploader v-model="fileList" multiple /></div>
            <div><van-uploader  upload-icon="video-o" accept="video/*" multiple /></div>
            <div><van-uploader upload-icon="volume-o" accept="audio/*" multiple /></div>
          </template>
        </van-cell>
      </van-cell-group>
      <div style="text-align: center;margin-top: 7px">
        <van-button plain  type="primary">保存草稿</van-button>
        <van-button type="primary" style="margin-left: 5px;border: none">提交作业</van-button>
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

</style>
