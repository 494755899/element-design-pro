<template>
  <element-container>
    <div class="element-design-pro-no-page-wrap">
      <div class="element-design-pro-no-page">
        <div class="element-design-pro-no-page-image" style="background-image: url(&quot;https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg&quot;);"></div>
      </div>
      <div class="element-design-pro-no-page-content">
        <h1>404</h1>
        <div class="element-pro-design-no-page-desc">抱歉，你访问的页面不存在</div>
        <router-link to="/home"><el-button type="primary" plain>返回首页</el-button></router-link>
      </div>
    </div>
  </element-container>
</template>

<style lang="less" scoped>
.element-design-pro-no-page-wrap {
  display: flex;
  align-items: center;
  height: 80%;
  min-height: 500px;
  justify-content: center;
}
.element-design-pro-no-page {
  padding-right: 152px;
  zoom: 1;
  height: 360px;
  .element-design-pro-no-page-image {
    width: 380px;
    float: right;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
    height: 100%;
  }
}
.element-design-pro-no-page-content {
  >h1 {
    color: #434e59;
    font-size: 72px;
    font-weight: 600;
    line-height: 72px;
    margin-bottom: 24px;
  }
}
.element-pro-design-no-page-desc {
    color: rgba(0,0,0,.45);
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 16px;
}
</style>
