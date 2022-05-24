<template>
  <div class="box">
    <HeaderTitle></HeaderTitle>
    <div class="bg-dd">
    </div>
  </div>

</template>
<script>
import HeaderTitle from "../../views/home/HeaderTitle.vue"
export default {
  components: {
    HeaderTitle
  }
}
</script>
<style scoped>
.bg-dd {
  position: relative;
  width: 100%;
  height: 488px;
  background: url(../../assets/images/bj-1648893862.jpg);
  background-repeat: no-repeat;
  background-position: center top;
}
</style>