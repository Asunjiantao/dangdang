<template>
  <div class="logo">
    <div class="logo-img">
      <router-link to="/">
        <img src="../../assets/images/PClogo-1648893484.gif"
             alt="">
      </router-link>
    </div>
    <div class="logo-search ">
      <form action="">
        <input type="text"
               placeholder="南明史">
        <div class="sort">
          <!-- <span>全部分类 <i class="iconfont">&#xe71a;</i></span> -->
          <el-select v-model="value"
                     placeholder="全部分类"
                     :popper-append-to-body="false">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </div>
        <button>
          <i class="iconfont">&#xe610;</i>
        </button>
      </form>
      <div class="search-hot">
        热搜：
        <a href="">笑读诗词</a>
        <a href="">罗蒙</a>
        <a href="">鱼没有脚</a>
        <a href="">水星家纺</a>
        <a href="">远古至唐</a>
        <a href="">考研政治2023</a>
      </div>
      <a href=""
         class="advs-search">高级搜索</a>
    </div>
    <div class="logo-shoppingcart ">
      <div class="logo-cart"
           @click="gocart">
        <i class="iconfont shoppingcart">&#xe73d;</i>
        <a href="javascript:;">购物车 <span>{{num}}</span></a>
      </div>
      <div class="logo-order">
        <a href="">我的订单</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {

  methods: {
    gocart () {
      this.$router.push({ path: "/buycar" });
    }
  },
  data () {
    return {
      options: [{
        value: '选项1',
        label: '全部分类'
      }, {
        value: '选项2',
        label: '尾品汇'
      }, {
        value: '选项3',
        label: '图书'
      }, {
        value: '选项4',
        label: '电子书'
      }, {
        value: '选项5',
        label: '音像'
      }, {
        value: '选项6',
        label: '影视'
      }, {
        value: '选项7',
        label: '时尚美妆'
      }, {
        value: '选项8',
        label: '母婴用品'
      }, {
        value: '选项9',
        label: '玩具'
      }, {
        value: '选项10',
        label: '孕婴服饰'
      }, {
        value: '选项11',
        label: '童装童鞋'
      }, {
        value: '选项12',
        label: '家居日用'
      }, {
        value: '选项13',
        label: '家居装饰'
      }, {
        value: '选项14',
        label: '服饰'
      }, {
        value: '选项15',
        label: '鞋 '
      }, {
        value: '选项16',
        label: '箱包皮具'
      },],
      num: '',
      value: ''
    }
  },
  computed: {
    ...mapGetters(
      ["getBuycarsGe"],
    )
  },
  created () {
    this.num = this.getBuycarsGe.length
  },
}
</script>
<style   scoped>
@import url(../../assets/css/logo.css);
/deep/ .el-scrollbar__wrap {
  width: 108px;
  height: 290px;
  border: 1px solid #dedede;
  background: #fff;
  font-size: 12px;
}
/deep/.el-popper[x-placement^="bottom"] {
  margin-top: 34px;
}
/deep/.el-select-dropdown__item {
  font-size: 12px;
}
/deep/.el-scrollbar__thumb {
  background: transparent;
}
/deep/.el-input__inner {
  border-radius: 0px;
}
/deep/.el-select .el-input__inner:focus {
  border: 2px solid #ff2832;
  border-left: 0;
}
/deep/.el-select .el-input.is-focus .el-input__inner {
  border: 2px solid #ff2832;
  border-left: 0;
}
/deep/.el-popper[x-placement^="bottom"] .popper__arrow {
  border: none;
  background: none;
}
/deep/.el-popper[x-placement^="bottom"] .popper__arrow::after {
  border: none;
}
</style>
