import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import BlogDetail from '../views/blogDetail.vue'
import PostBlog from '../views/postBlog.vue'
import Remark from '../views/remark.vue'
import Regist from '../views/regist.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/blog/detail/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/blog/post',
    name: 'PostBlog',
    component: PostBlog
  },
  {
    path: '/remark',
    name: 'Remark',
    component: Remark
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router