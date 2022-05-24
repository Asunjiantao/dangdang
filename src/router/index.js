import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            isLogin: true,
            isHeaderImg: true
        }
    },
    { //重定向， 作用：当我们访问一个存在的组件的时候设置要跳转的组件
        path: "*",
        redirect: "/"
    },
    {
        path: "/info/:id", //动态路由
        name: "Info",
        component: () =>
            import ("../views/info/Info.vue"),
        meta: { isLogin: true },

    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/login/Login.vue'),
        meta: {
            isLogin: true,
            isLogo: true,
            Header: true
        }
    },
    {
        path: '/buycar',
        name: 'Butcar',
        component: () =>
            import ('../views/buycar/Butcar.vue'),
        meta: {
            isLogo: true
        }

    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

// 路由守卫
//只要发生了路由的跳转，就会触发 beforeEach 指定的 function 回调函数
router.beforeEach((to, form, next) => {
    // to 是将要访问的路由的信息对象
    // console.log(to)
    // form 是将要离开的路由的信息对象
    // next 是一个函数，调用 next() 表示放行，允许这次路由导航
    //next() 函数表示放行的意思
    if (to.meta.isLogin) {
        next();
    } else {
        if (sessionStorage.getItem("user")) {
            next()
        } else {
            next()
            next({ path: "/login" })
            alert("请登录")
        }
    }
})


export default router