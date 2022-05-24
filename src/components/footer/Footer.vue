<template>
  <div class="footer">
    <FooterPic v-show="$route.path == '/'"></FooterPic>
    <FooterList v-show="$route.path == '/'"></FooterList>
    <div class="footer-copy">
      <div class="footer-nav">
        <ul>
          <li><a href="">公司简介</a></li>
          <span class="line">|</span>
          <li><a href="">诚聘英才</a></li>
          <span class="line">|</span>
          <li><a href="">网站联盟</a></li>
          <span class="line">|</span>
          <li><a href="">当当招商</a></li>
          <span class="line">|</span>
          <li><a href="">机构销售</a></li>
          <span class="line">|</span>
          <li><a href="">手机当当</a></li>
          <span class="line">|</span>
          <li><a href="">官方Blog</a></li>
          <span class="line">|</span>
          <li><a href="">知识产权</a></li>
          <span class="line">|</span>
          <li><a href="">热词搜索</a></li>

        </ul>
      </div>
      <div class="footer-copyright">
        <span>Copyright 2004 - 2021 当当网. All Rights Reserved</span>
      </div>
      <div class="footer-copyright2">
        <span>京ICP证041189号</span>
        <span class="line">|</span>
        <span><a href="">出版物经营许可证 新出发京批字第直0673号</a></span>
        <span class="line">|</span>
        <span><a href="">食品经营许可证：JY11101050363440</a></span>
        <br>
        <span><a href="">京ICP备17043473号-1</a></span>
        <span class="line">|</span>
        <span><a href="">京公网安备11010502037644号</a></span>
        <span class="line">|</span>
        <span><a href="">经营许可证编号：合字B2-20160011</a></span>
        <span class="line">|</span>
        <span><a href="">互联网药品信息服务资格证</a></span>
        <br>
        <span>互联网违法和不良信息举报电话：4001066666-5，涉未成年举报电话：4001066666-9，邮箱：</span>
        <br>
        <span><a href="">网络出版服务许可证（署）网出证（京）字第117号</a></span>
        <span><a href="">北京当当科文电子商务有限公司</a>，通信地址：北京市朝阳区北三环东路8号静安中心</span>
      </div>
      <div class="footer-copy-img">
        <img src="../../assets/images/7d593c48-48f6-4fc9-85e0-7d6e10dfc2a2 .png"
             alt="">
        <img src="../../assets/images/footer2.png"
             alt="">
        <img src="../../assets/images/footer1.jpg"
             alt="">
        <img src="../../assets/images/hlwjbzx_182.png"
             alt="">
      </div>
    </div>
  </div>
</template>
<script>
import FooterPic from "../../components/footer/FooterPic.vue"
import FooterList from "../../components/footer/FooterList.vue"
export default {
  components: {
    FooterPic,
    FooterList
  }
}
</script>
<style scoped>
@import url(../../assets/css/footer.css);
</style>