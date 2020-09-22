<template>
<div class="container">
  <div class="top">
    <div class="images">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" class="image"/>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>

  <van-grid clickable :column-num="3" style="margin: 7px 0px">
    <van-grid-item icon="photo-o" text="课程表" to="/index/courseList" />
    <van-grid-item icon="photo-o" text="课堂点评" to="/index/courseAppraise" />
    <van-grid-item icon="photo-o" text="请假申请" to="/index/leaveList" />
    <van-grid-item icon="photo-o" text="课耗记录" />
    <van-grid-item icon="photo-o" text="作业练习" to="/index/workList"/>
    <van-grid-item icon="photo-o" text="校长信箱" />
  </van-grid>

  <!-- <div class="title">
       推荐课程
   </div>-->
  <div class="footer">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell  value="内容"  v-for="item in list" :key="item"  style="margin-top: 5px">
        <template #default >
          <div class="courseItem" @click="toDetail">
            <van-image class="courseItemImages" fit="cover" style="width: 110px;height: 110px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600339908249&di=34fc51f5f466ba577f4b9bd3c187ab34&imgtype=0&src=http%3A%2F%2Fwww.tianzhumedia.com%2Fuploads%2Fallimg%2F160707%2F1-160FG62TJ45.jpg">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
            <div class="descript">
              <div class="title">
                <div>绘画</div>
                <div class="tagn"> <van-icon name="arrow" /> </div>
              </div>
              <div class="remark">
                提高孩子的注意力提高孩意力提高孩意力提高孩
              </div>
              <div class="title">
                <div>45分钟</div>
                <div class="tagn"> <van-button type="primary" size="small">预约试听</van-button> </div>

              </div>
            </div>
          </div>
        </template>
      </van-cell>

    </van-list>
  </div>

</div>

</template>

<script>
  import Vue from 'vue'
  import {Lazyload} from 'vant'

  Vue.use(Lazyload)
  export default {
    data() {
      return {
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ],
        list: [],
        loading: false,
        active: 0,
        finished: false,
        code: ''
      }
    },

    methods: {

      toDetail(){
        this.$router.push({path:'/index/courseDetail'})
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
  .top {
    background: white;
  }

  .images {
    width: 750px;
    height: 450px;
    background: #999999;
  }

  .image {
    width: 750px;
    height: 450px;
  }

  .courseItem{
    display: flex;
    flex-direction: row;
  }

  .courseItem .courseItemImages{
    display: block;
  }

  .descript{
    font-size: 30px;
    margin-left: 40px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .remark{
    font-size: 24px;
    color: #969799;
  }
</style>
