<template>
  <div class="footer-pic">
    <div class="footer-pic-wrap">
      <a href=""><span></span></a>
      <a href=""><span></span></a>
      <a href=""><span></span></a>
    </div>
  </div>
</template>
<style scoped>
.footer-pic {
  width: 100%;
  border-top: 2px solid #ff2832;
  background: #fafafa;
  border-bottom: 1px solid #ebebeb;
}
.footer-pic-wrap {
  width: 770px;
  margin: 0 auto;
  height: 78px;
  padding: 5px 0 5px 40px;
}
.footer-pic-wrap a {
  height: 52px;
  width: 187px;
  float: left;
  margin: 0 15px;
  padding: 7px 0 7px 40px;
}
.footer-pic-wrap a span {
  display: block;
  width: 138px;
  height: 52px;
  background: url(../../assets/img/footer_bg.png) no-repeat;
}
.footer-pic-wrap a:nth-child(1) span {
  background: url(../../assets/img/footer_bg.png) no-repeat;
  background-position: 0 0px;
}
.footer-pic-wrap a:nth-child(2) span {
  background-position: 0 -103px;
}
.footer-pic-wrap a:nth-child(3) span {
  background-position: 0 -156px;
}
</style>