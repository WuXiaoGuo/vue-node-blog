import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  scrollBehavior(to, from, savePosition) {
    // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
    if (to.path != "/Home") {
      if (savePosition) {
        return savePosition;
      } else {
        var top;
        if (window.innerWidth >= 700) {
          top = 676;
        } else {
          top = 267;
        }
        return {
          x: 0,
          y: top
        };
      }
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  },
  routes: [
    {
      path: "/",
      component: resolve => require(["../pages/Home.vue"], resolve),
      meta: {
        auth: true
      },
      redirect: "/Home"
    }, //首页
    {
      path: "/Home",
      component: resolve => require(["../pages/Home.vue"], resolve),
      meta: {
        auth: true
      },
      name: "Home"
    }, //首页
    {
      path: "/Share",
      component: resolve => require(["../pages/Share/index.vue"], resolve),
      meta: {
        auth: true
      },
      redirect: "/Share/blog/all",
      children: [
        {
          path: "blog/:classify",
          component: resolve => require(["../pages/Share/blog.vue"], resolve)
        }
      ],
      name: "Share"
    }, //分类
    {
      path: "/article/:id",
      component: resolve => require(["../pages/Article/index.vue"], resolve)
    },
    {
      path: "/Message",
      component: resolve => require(["../pages/Message.vue"], resolve),
      meta: {
        auth: true
      },
      name: "Message"
    }, //留言板
    {
      path: "/Aboutme",
      component: resolve => require(["../pages/Aboutme.vue"], resolve),
      meta: {
        auth: true
      },
      name: "Aboutme"
    }, //关于
  ]
});
