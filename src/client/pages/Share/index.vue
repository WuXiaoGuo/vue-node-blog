<template>
  <div class="home-wrapper cf">
    <wbc-nav></wbc-nav>

    <div class="container">
      <el-row :gutter="30">
        <el-col :sm="24" :md="24" style="transition:all .5s ease-out;margin-bottom:30px;">
          <div class="test">
            <!-- <div :class="{'tags-box': pc_bol}">
              <TagsComponent></TagsComponent>
            </div>
            <div :class="{'view-box': pc_bol}">
              <router-view>
                <BlogComponent></BlogComponent>
              </router-view>
            </div>-->
            <div>
              <TagsComponent></TagsComponent>
            </div>
            <div>
              <router-view>
                <BlogComponent></BlogComponent>
              </router-view>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <wbc-footer></wbc-footer>
  </div>
</template>
<script>
import header from "../../components/header.vue";
import footer from "../../components/footer.vue";
import { mapGetters } from "vuex";
import infoComponent from "./info.vue";
import BlogComponent from "./blog.vue";
import TagsComponent from "./tags.vue";
export default {
  data() {
    return {
      winH: document.documentElement.clientHeight || document.body.clientHeight
    };
  },
  watch: {
  },
  components: {
    "wbc-nav": header,
    "wbc-footer": footer,
    infoComponent,
    BlogComponent,
    TagsComponent
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let distance =
          document.documentElement.scrollTop || document.body.scrollTop,
        scrollH =
          document.documentElement.scrollHeight || document.body.scrollHeight;

      if (distance + this.winH >= scrollH) {
        if (this.blogLoadingBol) {
          console.log(111);
          // this.pageindex ++;
          // this.$store.dispatch('getBlogList', {
          //     type: this.$route.params.classify,
          //     pageindex: this.pageindex
          // })
        }
      }
    });
  },
  computed: {
    ...mapGetters(["pc_bol"])
  }
};
</script>
<style lang="scss" scoped>
.container{
  width: 90%;
  margin: 0 auto;
}
.test {
  width: 100%;
}
.tags-box {
  width: 30%;
  float: left;
}
.view-box {
  width: 67%;
  float: right;
}
</style>