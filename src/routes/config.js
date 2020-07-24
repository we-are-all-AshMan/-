import Home from "@/views/Home";

export default {
  routes: [
    {
      path: "/home",
      name: "Home",
      component: () => import("@/views/Home"),
      meta:{
        title:"首页",
      }
    },
    { path: "/", name: "Login", component: () => import("@/views/Login"),
    meta:{
      title:"AIGOV",
    } },
    

    {
      path: "/idtable",
      name: "Idtable",
      component: () => import("@/views/Idtable"),
      meta:{
        title:"电子身份证办理",
      }
    },
    {
      path: "/etctable",
      name: "ETCtable",
      component: () => import("@/views/ETCtable"),
      meta:{
        title:"ETC办理",
      }
    },
    {
      path: "/ssctable",
      name: "SSCtable",
      component: () => import("@/views/SSCtable"),
      meta:{
        title:"社保卡办理",
      }
    },
    {
      path: "/news",
      name: "News",
      component: () => import("@/views/News"),
      meta:{
        title:"疫情新闻管理",
      }
    },
  ],
  mode: "history",
};
