<template>
  <div class="hamabanner">
    <el-row :gutter="24">
      <el-col :span="6" :offset="5" class="banner-left">
        <img src="./images/banner-left.png" alt="">
      </el-col>
      <el-col :span="6" :offset="4" class="vertical-line">
        <p class="banner-text-title">无极蛤蟆线</p>
        <p class="earn">炒金</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  @import "../../common/common";
  .hamabanner {
    background: url("./images/bg.png") no-repeat;
    height: 580px;
    position: relative;
    top: 125px;
  }
  .banner-left img {
    position: relative;
    top: 55px;
  }
  .earn {
    background: url("./images/font-2.png") no-repeat 85% 50%;
    height: 95px;
    font-size: 65px;
    text-align: center;
    /*vertical-align: middle;*/
    line-height: 110px;
    font-family: "Microsoft YaHei",Arial,sans-serif;
    font-weight: bold;
    color: #fff;
    &:after {
      content: '钱';
      /*display: block;*/
      font-size: 65px;
      position: relative;
      left: 80px;
    }
  }
  .banner-text-title {
    font-family: "Microsoft YaHei UI Light",Arial,sans-serif;
    font-size: 40px;
    text-align: right;
    color: #fff;
  }
  .vertical-line:after {
    content: '';
    display: block;
    height: 130px;
    border-right: 4px solid #fff;
    position: relative;
    top: -135px;
    left: 45px;
  }
  .vertical-line {
    margin-top: 100px;
  }

</style>
