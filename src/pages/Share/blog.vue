<template>
  <section class="blog-wrapper">
    <ul v-if="blogList.length > 0">
      <li
        class="article"
        v-for="(v, index) in blogList"
        :key="index"
        :style="{'animation-delay': index%5*0.2+'s'}"
        @click="$router.push(`/article/${v._id}`)"
      >
        <Github
          class="github mouse-pointer"
          background="rgba(186, 164, 119, 0.99)"
          :link="v.github"
          v-if="v.github"
        ></Github>
        <time>{{v.createTime | parseTime('{y}-{m}-{d}')}}</time>
        <h2 class="name">{{v.title}}</h2>
        <div class="tags">
          <Tag v-for="(tag,index) in v.type" :key="index" :text="tag" :path="tag"></Tag>
        </div>
        <div class="desc">{{v.desc}}</div>
        <div class="source">
          <img :src="require(`./images/source_single_${v.source}.png`)" alt />
        </div>
      </li>
    </ul>
    <NoneData v-else></NoneData>
    <el-button type="primary" v-show="blogLoadingBol" class="more-btn" disabled>下滑加载更多</el-button>
    <Loading v-show="blogLoadingMore"></Loading>
  </section>
</template>
<script>
import Tag from "../../components/tag.vue";
import Github from "../../components/github.vue";
import NoneData from "../../components/noneData.vue";
import Loading from "../../components/Loading/loading.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Tag,
    Github,
    NoneData,
    Loading
  },
  data() {
    return {
      pageindex: 1
    };
  },
  created() {
    this.getBlogData();
  },
  mounted() {
    window.addEventListener(
      "scroll",
      this.debounce(() => {
        let distance =
            document.documentElement.scrollTop || document.body.scrollTop,
          winH =
            document.documentElement.clientHeight || document.body.clientHeight,
          scrollH =
            document.documentElement.scrollHeight || document.body.scrollHeight;
        if (distance + winH >= scrollH) {
          if (/blog/g.test(this.$route.path)) {
            this.pageindex ++
            this.getBlogData();
          }
        }
      })
    );
  },
  methods: {
    debounce(fn, interval = 600) {
      let timeout = null;
      return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fn.apply(this, arguments);
        }, interval);
      };
    },
    getBlogData() {
      this.$store.dispatch("getBlogList", {
        type: this.$route.params.classify,
        pageindex: this.pageindex
      });
    }
  },
  computed: {
    ...mapGetters(["blogList", "blogLoadingMore", "blogLoadingBol", "currType"])
  },
  destroyed() {
    this.$store.dispatch("clearBlogList");
  },
  watch: {
     $route(to, from) {
      this.pageindex = 1
      this.$store.dispatch("clearBlogList").then(() => {
        this.getBlogData();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.more-btn {
  width: 90%;
  margin: 0 auto;
  display: block;
}
@mixin bg-image-cover($bgCover) {
  background: rgba(186, 164, 119, 0.99);
  background-image: url($bgCover);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.blog-wrapper {
  @keyframes change {
    100% {
      opacity: 1;
    }
  }
  .article {
    width: 90%;
    padding-bottom: 70px;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.08);
    margin: 30px auto;
    transition: box-shadow 0.4s;
    position: relative;
    opacity: 0.1;
    animation: change 1s;
    animation-fill-mode: forwards;
    color: #42484b;
    background-image: url("../../assets/images/note-bg.jpg");

    &:hover {
      box-shadow: 5px 15px 30px 5px rgba(0, 0, 0, 0.15);
    }

    .github {
      position: absolute;
      right: 0;
      top: 0;
    }
    time {
      position: absolute;
      bottom: 35px;
      left: 0;
      width: 150px;
      height: 34px;
      text-align: center;
      line-height: 34px;
      font-size: 14px;
      @include bg-image-cover("./images/date-bg.svg");
      &:before {
        content: url("./images/date-edge.svg");
        position: absolute;
        top: 0px;
        right: calc(100% - 2px);
        width: 11px;
        height: 100%;
      }
      &:after {
        content: url("./images/date-tag.svg");
        position: absolute;
        top: 0;
        left: calc(100% - 1px);
        width: 13px;
        height: 100%;
      }
      @media screen and (max-width: 767px) {
        &:before {
          right: e("calc(100% - 0.07rem)");
          top: -0.02rem;
        }
        &:after {
          left: e("calc(100% - 0.02rem)");
        }
      }
    }
    .name {
      text-align: center;
      color: #db5640;
      line-height: 30px;
      padding-top: 10px;
    }
    .tags {
      display: block;
      text-align: center;
      font-size: 12px;
      line-height: 20px;
      padding-bottom: 5px;
      text-align: center;
    }
    .desc {
      width: 70%;
      max-height: 90px;
      margin: 0 auto;
      font-size: 14px;
      text-align: left;
      line-height: 30px;
      text-align: justify;
      span {
        color: #b2b2ae;
        font-size: 12px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
    .source {
      width: 70%;
      margin: 0 auto;
      text-align: right;
      img {
        width: 30px;
      }
    }
    .btns {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 10px 0;
      text-align: right;
    }
  }
}
</style>