<template>
  <div class="container">
    <van-cell value="内容">
      <template #default >
        <div class="head_body">
          <van-image  round class="courseItemImages" fit="cover" style="width: 65px;height: 65px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600339908249&di=34fc51f5f466ba577f4b9bd3c187ab34&imgtype=0&src=http%3A%2F%2Fwww.tianzhumedia.com%2Fuploads%2Fallimg%2F160707%2F1-160FG62TJ45.jpg">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
          <div class="head_desc">
            <div class="name">邓忠明</div>
            <div class="mobile">15918395990</div>
          </div>
        </div>
      </template>
    </van-cell>

    <van-cell-group style="margin-top: 7px">
      <van-cell  value="内容" >
        <div>
          我关注的学员
        </div>
        <div>
          <van-grid :column-num="4">
            <van-grid-item>
              <div>
                <van-image  style="width: 40px;height: 40px" round src="https://img.yzcdn.cn/vant/apple-2.jpg" />
              </div>
              <div>
                赵四
              </div>
            </van-grid-item>
            <van-grid-item>
              <div>
                <van-image  style="width: 40px;height: 40px" round src="https://img.yzcdn.cn/vant/apple-2.jpg" />
              </div>
              <div>
                赵四
              </div>
            </van-grid-item>
            <van-grid-item>
              <div>
                <van-image  style="width: 40px;height: 40px" round src="https://img.yzcdn.cn/vant/apple-2.jpg" />
              </div>
              <div>
                赵四
              </div>
            </van-grid-item>
            <van-grid-item>
              <div>
                <van-image  style="width: 40px;height: 40px" round src="https://img.yzcdn.cn/vant/apple-2.jpg" />
              </div>
              <div>
                赵四
              </div>
            </van-grid-item>
            <van-grid-item>
              <div>
                <van-image  style="width: 40px;height: 40px" round src="https://img.yzcdn.cn/vant/apple-2.jpg" />
              </div>
              <div>
                赵四
              </div>
            </van-grid-item>
            <van-grid-item>
              <div>
                <van-image  style="width: 40px;height: 40px" round src="https://img.yzcdn.cn/vant/apple-2.jpg" />
              </div>
              <div>
                赵四
              </div>
            </van-grid-item>
          </van-grid>
        </div>

        <!--<van-image  round class="courseItemImages" fit="cover" style="width: 30px;height: 30px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600339908249&di=34fc51f5f466ba577f4b9bd3c187ab34&imgtype=0&src=http%3A%2F%2Fwww.tianzhumedia.com%2Fuploads%2Fallimg%2F160707%2F1-160FG62TJ45.jpg">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>-->
      </van-cell>
    </van-cell-group>


    <van-cell-group style="margin-top: 7px">
      <van-cell title="机构切换" is-link url="/vant/mobile.html" />
      <van-cell title="报读课程" is-link url="/vant/mobile.html" />
      <van-cell title="交易记录" is-link url="/vant/mobile.html" />
      <van-cell title="课耗记录" is-link to="index" />
      <van-cell title="路由跳转" is-link to="index" />
    </van-cell-group>

    <div >
      <van-button type="primary" block size="normal" class="out_button">退出登录</van-button>
    </div>

  </div>
</template>

<script>


export default {
  name: 'User',

}
</script>
<style  scoped>
  .container{
    background-color: #F2F2F2;
  }
  .out_button{
    margin: 60px auto 0px;
    width: 180px;
  }

  .head_body{
    display: flex;
  }

  .head_desc{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 50px;
  }
  .name{
    font-size: 36px;
    font-weight: bold;
  }

</style>
