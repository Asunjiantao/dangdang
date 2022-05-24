<template>
  <div class="dd-nav">
    <ul>
      <li><a href="">全部分类</a></li>
      <li><a href="">图书</a></li>
      <li><a href="">电子书</a></li>
      <li><a href="">童装童鞋</a></li>
      <li><a href="">女装</a></li>
      <li><a href="">食品</a></li>
      <li><a href="">母婴玩具</a></li>
    </ul>
  </div>
</template>
<style scoped>
.dd-nav {
  display: inline-block;
  width: 1200px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
}
.dd-nav ul {
  display: flex;
}
.dd-nav li:first-child a {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
}
.dd-nav li:first-child {
  width: 192px;
  margin-right: 17px;
  text-align: left;
  background: #ff2832;
  position: relative;
  padding-left: 20px;
  margin-left: 10px;
}
.dd-nav li {
  font-size: 14px;
}
.dd-nav li a {
  color: #323232;
  text-decoration: none;
  padding: 0 15px;
  display: block;
  font-weight: bold;
}
.dd-nav li a:hover {
  color: red;
}
.dd-nav li:first-child a:hover {
  color: #fff;
}
</style>