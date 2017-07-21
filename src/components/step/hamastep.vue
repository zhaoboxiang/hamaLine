<template>
  <div class="step">
    <el-row :gutter="24">
      <el-col :span="6" :offset="9"><span class="step-title" >三步解决炒金/汇难题</span></el-col>
    </el-row>
    <el-row class="step-info" :gutter="20">
      <el-col :offset="3" :span="6">
        <div class="first-step">
          <img src="./images/step01.png" alt="">
            <div class="step-text">
              <p>第 一 步</p>
              <p>2秒辨涨跌</p>
              <p>红线——多空分界线</p>
              <p>低于红线，当天看跌</p>
              <p>高于红线，当天看涨</p>
              <p>红线连续上涨，趋势多头</p>
              <p>趋势连续下跌，趋势看空</p>
              <p>价格围绕红线，看震荡</p>
              <p>做多多空 ! 一目了然</p>
            </div>
        </div>
      </el-col>
      <el-col class="offset-middle" :span="6">
        <div class="second-step">
          <img src="./images/step02.png" alt="">
          <p>当天蛤蟆线自动生成</p>
          <p>价格显示一目了然</p>
          <p>蛤线代表支撑线</p>
          <p>蟆线代表压力线</p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="third-step">
          <img src="./images/step03.png" alt="">
          <p>多头上行突破蟆系线，大胆挺近追多</p>
          <p>空头下跌破蛤系线，勇敢开仓去追空</p>
          <p>买进多头遇蟆线，价格见顶宜出掉</p>
          <p>吃进空头遇蛤线，价格见底宜快跑</p>
          <p>红色多空分界线，多也可以空也可</p>
        </div>
      </el-col>
    </el-row>
    <ul class="icon-dot">
      <li><img src="./images/icon-dot.png" alt=""></li>
      <li><img src="./images/icon-dot-b.png" alt=""></li>
      <li><img src="./images/icon-dot-b.png" alt=""></li>
      <li><img src="./images/icon-dot-b.png" alt=""></li>
      <li><img src="./images/icon-dot-b.png" alt=""></li>
      <li><img src="./images/icon-dot-b.png" alt=""></li>
      <li><img src="./images/icon-dot-b.png" alt=""></li>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @import "../../common/common";
  .step {
    position: relative;
    margin-top: 100px;
    //标题
    .step-title {
      @include font;
      display: inline-block;
      font-size: 41px;
      font-weight: bold;
      border-bottom: 1px solid #EAEAEA;
      &::after {
        @include title-bottom;
      }
    }
    //步骤信息
    .step-info {
      margin-top: 80px;
      .offset-middle {
        margin-left: 30px;
      }
      .first-step {
        position: relative;
        overflow: hidden;
        height: 450px;
        width: 330px;
        border: 1px solid transparent;
        border-radius: 15px;
        z-index: 1;
        .step-text {
          @include vertical-middle;
          font-family: "Microsoft YaHei UI Light",Arial,sans-serif;
          text-align: center;
          font-size: 14px;
          color: #fff;
          line-height: 2;
          top: 122%;
          left: 48%;
          cursor: pointer;
          transition: top 1s ease;
          //透明遮罩
          &::after {
            content: '';
            display: inline-block;
            width: 330px;
            height: 450px;
            position: absolute;
            top: -22px;
            right: 0;
            bottom: 0;
            left: -83px;
            opacity: 0.8;
            background: #155EA1;
            //圆角
            border: 1px solid transparent;
            border-radius: 15px;
            z-index: -1;
          }
          &:hover {
            top:41%;
          }
          p:nth-child(1) {
            line-height: 1;
            font-size: 25px;
            font-weight: bold;
          }
          p:nth-child(2) {
            font-size: 20px;
            &:after {
              @include title-underline; //下划线样式
            }
          }
        }
      }
      .second-step {
        @extend .first-step;
      }
    }
    //右边小圆点
    .icon-dot {
      position: absolute;
      right: 20px;
      top: 24%;
      li {
        margin-bottom: 40px;
      }
    }
  }
</style>
