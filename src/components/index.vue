<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="#/" class="router-link-active">首页</a> &gt;
        <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="wrap-box">
          <div class="left-220" style="margin: 0px;">
            <div class="banner-nav">
              <ul>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>手机数码</span>
                    <p>
                      <span>手机通讯&nbsp;</span>
                      <span>摄影摄像&nbsp;</span>
                      <span>存储设备&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">手机数码</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">手机通讯</a>
                        <a href="/goods/43.html">摄影摄像</a>
                        <a href="/goods/43.html">存储设备</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>电脑办公</span>
                    <p>
                      <span>电脑整机&nbsp;</span>
                      <span>外设产品&nbsp;</span>
                      <span>办公打印&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">电脑办公</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">电脑整机</a>
                        <a href="/goods/43.html">外设产品</a>
                        <a href="/goods/43.html">办公打印</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>影音娱乐</span>
                    <p>
                      <span>平板电视&nbsp;</span>
                      <span>音响DVD&nbsp;</span>
                      <span>影音配件&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">影音娱乐</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">平板电视</a>
                        <a href="/goods/43.html">音响DVD</a>
                        <a href="/goods/43.html">影音配件</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>服装类</span>
                    <p>
                      <span>男装&nbsp;</span>
                      <span>女装&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">服装类</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">男装</a>
                        <a href="/goods/43.html">女装</a>
                      </dd>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--幻灯片-->
          <div class="left-705">
            <el-carousel height="341px">
              <el-carousel-item v-for="item in sliderlist" :key="item.id">
               <img class="slider-img" :src="item.img_url" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
          <!--/幻灯片-->
          <div class="left-220">
            <ul class="side-img-list">
              <li v-for="(item, index) in toplist" :key="index">
                <div class="img-box">
                  <label>{{index+1}}</label>
                  <img :src="item.img_url">
                </div>
                <div class="txt-box">
                  <a href="/goods/show-98.html">{{item.title}}</a>
                  <span>{{item.add_time | formatTime}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 详情页 -->
    <div class="section" v-for="(item, index) in bottomList" :key="index">
      <div class="main-tit">
        <h2>{{item.catetitle}}</h2>
        <p>
          <a v-for="(it, i) in item.level2catelist" :key="i" href="/goods/43.html">{{it.subcatetitle}}</a>
          
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <li v-for="(it, i) in item.datas" :key="i">
              <!-- <a href="#/site/goodsinfo/87" class> -->
              <!-- <router-link to="detail"> -->
                <!-- 动态路由 绑定id传递 -->
              <router-link :to="'/detail/'+it.artID">
                <div class="img-box">
                  <img
                    :src="it.img_url"
                  >
                </div>
                <div class="info">
                  <h3>{{item.artTitle}}</h3>
                  <p class="price">
                    <b>{{it.sell_price}}</b>元
                  </p>
                  <p>
                    <strong>库存 {{it.stock_quantity}}</strong>
                    <span>
                      市场价：
                      <s>{{it.market_price}}</s>
                    </span>
                  </p>
                </div>
              <!-- </a> -->
              </router-link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
// import axios from "axios";
// 导入moment
// import moment from "moment";
export default {
  //给一个那么属性目的是用于调试
  name: "index",
  data() {
    return {
      catelist: [], //分类数据数组
      sliderlist: [], //轮播图数组
      toplist: [], //置顶推荐数组
      
      bottomList: []//底部数据
    };
  },
  created() {
    this.$axios
      .get(`/site/goods/gettopdata/goods`)
      .then(res => {
        console.log(res);
        this.catelist = res.data.message.catelist;
        this.sliderlist = res.data.message.sliderlist;
        this.toplist = res.data.message.toplist;
      });
    this.$axios
    .get(`/site/goods/getgoodsgroup`)
    .then(res=>{
      console.log(res)
      this.bottomList = res.data.message
    })
  },
  // //过滤器  俗称管道府
  // filters: {
  //   formatTime(value) {
  //     return moment(value).format("YYYY年MM月DD日");
  //   }
  // },
  
};
</script>

<style>

.slider-img {
  width: 100%;
  height: 100%;
}
</style>
