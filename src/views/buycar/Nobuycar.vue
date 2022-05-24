<template>
  <div class="no-buycar">
    <div class="con">
      <p>您的购物车是空的，您可以</p>
      <button @click="gohome">去逛逛</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gohome () {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.no-buycar {
  width: 960px;
  height: 280px;
  margin: 0 auto;
}
.no-buycar .con {
  height: 190px;
  background: url(../../assets/images/empty.png) no-repeat;
  padding: 90px 0 0 495px;
  margin: 50px;
}
.no-buycar .con p {
  font-size: 14px;
  color: #8a8888;
}
.no-buycar .con button {
  width: 116px;
  height: 38px;
  display: inline-block;
  background-color: #ff2832;
  color: #fff;
  text-align: center;
  line-height: 38px;
  font-size: 18px;
  margin: 30px 20px 0 0;
  border-radius: 2px;
  cursor: pointer;
}
</style>