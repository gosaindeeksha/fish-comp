import { createRouter, createWebHistory } from "vue-router";
import FishComp from "./pages/FishComp.vue";

const routes =[
{ path:"/", component:FishComp},

]
const router =createRouter({
history : createWebHistory(),
routes,
})

export default router;