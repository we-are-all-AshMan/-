
import Home from "@/views/Home"

export default{
    routes:[
        {       
path:"/home",
name: "Home",
component: () => import("@/views/Home"),
        },
  {  path: "/",
    name: "Login",
    component: () => import("@/views/Login"),
  },
  
  {  path: "/idtable",
  name: "Idtable",
  component: () => import("@/views/Idtable"),
},
{  path: "/etctable",
name: "ETCtable",
component: () => import("@/views/ETCtable"),
},
{  path: "/ssctable",
name: "SSCtable",
component: () => import("@/views/SSCtable"),
},
{
  path:"/news",
name: "News",
component: () => import("@/views/News"),
},
  
],
mode: "history",
}