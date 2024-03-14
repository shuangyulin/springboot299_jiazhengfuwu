import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import ziliaorenzheng from '@/views/modules/ziliaorenzheng/list'
    import fuwuxiangmu from '@/views/modules/fuwuxiangmu/list'
    import guzhupingjia from '@/views/modules/guzhupingjia/list'
    import zixunguyuan from '@/views/modules/zixunguyuan/list'
    import qiandinghetong from '@/views/modules/qiandinghetong/list'
    import shenqingyuyue from '@/views/modules/shenqingyuyue/list'
    import xuqiuxinxi from '@/views/modules/xuqiuxinxi/list'
    import xiangmuleixing from '@/views/modules/xiangmuleixing/list'
    import zixunguzhu from '@/views/modules/zixunguzhu/list'
    import messages from '@/views/modules/messages/list'
    import fuwuyuyue from '@/views/modules/fuwuyuyue/list'
    import guzhu from '@/views/modules/guzhu/list'
    import guyuan from '@/views/modules/guyuan/list'
    import dianziqianming from '@/views/modules/dianziqianming/list'
    import config from '@/views/modules/config/list'
    import discussfuwuxiangmu from '@/views/modules/discussfuwuxiangmu/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '网站公告',
        component: news
      }
      ,{
	path: '/ziliaorenzheng',
        name: '资料认证',
        component: ziliaorenzheng
      }
      ,{
	path: '/fuwuxiangmu',
        name: '服务项目',
        component: fuwuxiangmu
      }
      ,{
	path: '/guzhupingjia',
        name: '雇主评价',
        component: guzhupingjia
      }
      ,{
	path: '/zixunguyuan',
        name: '咨询雇员',
        component: zixunguyuan
      }
      ,{
	path: '/qiandinghetong',
        name: '签订合同',
        component: qiandinghetong
      }
      ,{
	path: '/shenqingyuyue',
        name: '申请预约',
        component: shenqingyuyue
      }
      ,{
	path: '/xuqiuxinxi',
        name: '需求信息',
        component: xuqiuxinxi
      }
      ,{
	path: '/xiangmuleixing',
        name: '项目类型',
        component: xiangmuleixing
      }
      ,{
	path: '/zixunguzhu',
        name: '咨询雇主',
        component: zixunguzhu
      }
      ,{
	path: '/messages',
        name: '意见反馈',
        component: messages
      }
      ,{
	path: '/fuwuyuyue',
        name: '服务预约',
        component: fuwuyuyue
      }
      ,{
	path: '/guzhu',
        name: '雇主',
        component: guzhu
      }
      ,{
	path: '/guyuan',
        name: '雇员',
        component: guyuan
      }
      ,{
	path: '/dianziqianming',
        name: '电子签名',
        component: dianziqianming
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/discussfuwuxiangmu',
        name: '服务项目评论',
        component: discussfuwuxiangmu
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
