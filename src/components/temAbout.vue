<!-- 关于我 -->
<template>
  <div class="tcommonBox">
    <header>
      <h1>
        <!-- <a href="#/DetailShare" target="_blank">
                    关于我
        </a>-->
        <p>关于我</p>
      </h1>
    </header>
    <section>
      <div class="asd">
        <img
          :src="this.$store.state.aboutmeObj.image?this.$store.state.aboutmeObj.image:'/static/img/maoto.png'"
          alt
          onerror="this.onerror=null;this.src= 'static/img/maoto.png'"
          class="aboutmeImg"
        />
      </div>
      <!-- <p v-html="this.$store.state.aboutmeObj.brief">{{this.$store.state.aboutmeObj.brief}}</p> -->
      <div class="introduction">
        <p class="introduction-f">欢迎来到我的博客！我是Wu Xiaoguo，是一个今年6月刚毕业的大学生，前端小萌新。</p>
        <div class="jianli">
          <p class="title red">基本信息</p>
          <ul>
            <li>
              <span>名字：</span>吴泽国
            </li>
            <li>
              <span>性别：</span>男
            </li>
            <li>
              <span>毕业院校：</span>佛山科学技术学院
            </li>
            <li>
              <span>学历：</span>本科
            </li>
            <li>
              <span>专业：</span>计算机科学与技术
            </li>
            <li>
              <span>毕业时间：</span>2019年6月
            </li>
            <li>
              <span>博客：</span>
              <a href="http://www.wuxiaoguo.site" target="_blank" class="link">www.wuxiaoguo.site(备案中，尚未开通)</a>
            </li>
            <li>
              <span>GitHub：</span>
              <a href="https://github.com/WuXiaoGuo" target="_blank" class="link">https://github.com/WuXiaoGuo</a>
            </li>
          </ul>
        </div>
        <div class="connect">
          <p class="title gray">联系方式</p>
          <ul>
            <li>
              <span>电话：</span>13425867690
            </li>
            <li>
              <span>邮箱：</span>923458883@qq.com
            </li>
            <li>
              <span>微信：</span>13425867690
            </li>
            <li>
              <span>QQ：</span>923458883
            </li>
          </ul>
        </div>
        <div class="job">
          <p class="title yellow">应聘岗位</p>
          <p class="strong">前端开发工程师</p>
          <p
            class="pb30"
          >我是一个对前端由衷热爱、有趣的前端工程师。 我目前正在寻找前端工程师岗位的工作机会，希望在前端开发领域，让我所掌握的技能落实到实处，献上一点绵薄之力！</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    //选项 / 数据
    return {};
  },
  methods: {
    //事件处理器
  },
  components: {
    //定义组件
  },
  created() {
    //生命周期函数
  }
};
</script>

<style>
.link {
  color:#fff;
}
.link:hover {
  color:#01aaed;
}
.introduction {
  background-color: #394a5a;
  color: #ddd;
  width: 90%;
  margin: 0 auto;
}
.pb30 {
  padding-bottom: 30px;
}
.strong {
  font-size: 20px;
  color: #eee;
  margin-bottom: 30px;
}
.introduction > div {
  position: relative;
  margin: 0 auto 30px;
  width: 330px;
  word-break: break-all;
  word-wrap: break-word;
}
.introduction-f {
  font-family: "Sigmar One", Arial;
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;
  text-indent: 2em;
  font-size: 30px;
  color: #fff;
}
.title {
  height: 50px;
  line-height: 50px;
  margin-bottom: 30px;
}
li {
  margin: 5px 0;
}
.red {
  background-color: #b05051;
  border-color: #b05051;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  font-size: 22px;
  color: #fff;
  padding-left: 20px;
}
.red::before {
  content: "";
  display: block;
  position: absolute;
  left: -20px;
  top: 0;
  width: 21px;
  height: 50px;
  background-color: #b05051;
  clip-path: polygon(80% 0%, 100% 0%, 100% 100%, 80% 100%, 0% 50%);
  -webkit-clip-path: polygon(80% 0%, 100% 0%, 100% 100%, 80% 100%, 0% 50%);
}
.gray {
  background-color: #bdc293;
  border-color: #bdc293;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  font-size: 22px;
  color: #fff;
  padding-left: 20px;
}
.gray::before {
  content: "";
  display: block;
  position: absolute;
  left: -20px;
  top: 0;
  width: 21px;
  height: 50px;
  background-color: #bdc293;
  clip-path: polygon(80% 0%, 100% 0%, 100% 100%, 80% 100%, 0% 50%);
  -webkit-clip-path: polygon(80% 0%, 100% 0%, 100% 100%, 80% 100%, 0% 50%);
}
.yellow {
  background-color: #dab652;
  border-color: #dab652;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  font-size: 22px;
  color: #fff;
  padding-left: 20px;
}
.yellow::before {
  content: "";
  display: block;
  position: absolute;
  left: -20px;
  top: 0;
  width: 21px;
  height: 50px;
  background-color: #dab652;
  clip-path: polygon(80% 0%, 100% 0%, 100% 100%, 80% 100%, 0% 50%);
  -webkit-clip-path: polygon(80% 0%, 100% 0%, 100% 100%, 80% 100%, 0% 50%);
}
.asd {
  display: flex;
  justify-content: center;
}
.aboutmeImg {
  max-width: 100%;
  /*height:300px;*/
}
.tcommonBox p a {
  color: #01aaed !important;
}
.tcommonBox p a:hover {
  color: #48456d !important;
}
.tcommonBox p i {
  font-style: italic;
}
.tcommonBox p b {
  font-weight: bold;
}
</style>
