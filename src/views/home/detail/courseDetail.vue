<template>
    <div class="container">
      <van-image class="courseItemImages" fit="cover" style="width: 100%;height: 280px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600339908249&di=34fc51f5f466ba577f4b9bd3c187ab34&imgtype=0&src=http%3A%2F%2Fwww.tianzhumedia.com%2Fuploads%2Fallimg%2F160707%2F1-160FG62TJ45.jpg">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>

      <van-cell title="7~9少儿美术综合培优" style="margin-top: 7px">

        <template #label>
          <div class="price-desc">
            <div>开课时间：2020-10-20</div>
            <div class="price-my">
              <div class="price-curr">￥1200</div>
              <div class="before-price">
                <span>原价：2400</span>
                <div class="decimal-my"></div>
              </div>
            </div>
          </div>
        </template>
      </van-cell>

      <van-cell title="课程简介" style="margin-top: 7px">
        <template #title>
          <div class="cell-title">
            <div class="cell-dev"></div>
            <div class="cell-text">课程简介</div>
          </div>
        </template>
        <template #label>
          课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介
        </template>
      </van-cell>
    </div>
</template>

<script>
  export default {
    name: 'courseDetail'
  }
</script>

<style scoped>
  .container{
    height: 100%;
    background-color: #F2F2F2;
  }
  .price-desc{
    font-size: 26px;
    color: #969799;
  }
  .price-my{
    height: 40px;
    line-height: 40px;
    display: flex;
  }
  .price-curr{
    color: red;
  }
  .before-price{
    margin-left: 15px;
    display: flex;
    font-size: 18px;
    position: relative;
  }
  .decimal-my{
    background-color: black;
    width: 100px;
    height: 1px;
    position: absolute;
    top: 15px;
    left: 0px;
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
