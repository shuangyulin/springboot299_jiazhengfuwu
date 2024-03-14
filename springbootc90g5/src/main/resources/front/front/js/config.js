
var projectName = '家政服务平台的设计与实现';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '服务项目',
	url: './pages/fuwuxiangmu/list.html'
}, 
{
	name: '需求信息',
	url: './pages/xuqiuxinxi/list.html'
}, 

{
	name: '网站公告',
	url: './pages/news/list.html'
},
{
	name: '意见反馈',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/springbootc90g5/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除"],"menu":"雇主","menuJump":"列表","tableName":"guzhu"}],"menu":"雇主管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["新增","查看","修改","删除"],"menu":"雇员","menuJump":"列表","tableName":"guyuan"}],"menu":"雇员管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","修改","删除","审核"],"menu":"资料认证","menuJump":"列表","tableName":"ziliaorenzheng"}],"menu":"资料认证管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["新增","查看","修改","删除"],"menu":"项目类型","menuJump":"列表","tableName":"xiangmuleixing"}],"menu":"项目类型管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","修改","删除","审核","查看评论"],"menu":"服务项目","menuJump":"列表","tableName":"fuwuxiangmu"}],"menu":"服务项目管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","删除"],"menu":"需求信息","menuJump":"列表","tableName":"xuqiuxinxi"}],"menu":"需求信息管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","删除","报表"],"menu":"服务预约","menuJump":"列表","tableName":"fuwuyuyue"}],"menu":"服务预约管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","删除","报表"],"menu":"申请预约","menuJump":"列表","tableName":"shenqingyuyue"}],"menu":"申请预约管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","删除"],"menu":"签订合同","menuJump":"列表","tableName":"qiandinghetong"}],"menu":"签订合同管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","删除"],"menu":"电子签名","menuJump":"列表","tableName":"dianziqianming"}],"menu":"电子签名管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","删除"],"menu":"雇主评价","menuJump":"列表","tableName":"guzhupingjia"}],"menu":"雇主评价管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"意见反馈","tableName":"messages"}],"menu":"意见反馈"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"网站公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","服务预约","咨询雇员"],"menu":"服务项目列表","menuJump":"列表","tableName":"fuwuxiangmu"}],"menu":"服务项目模块"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","服务预约","申请预约","咨询雇主"],"menu":"需求信息列表","menuJump":"列表","tableName":"xuqiuxinxi"}],"menu":"需求信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除"],"menu":"需求信息","menuJump":"列表","tableName":"xuqiuxinxi"}],"menu":"需求信息管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","删除","支付","签订合同"],"menu":"服务预约","menuJump":"列表","tableName":"fuwuyuyue"}],"menu":"服务预约管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","删除","审核","支付","签订合同"],"menu":"申请预约","menuJump":"列表","tableName":"shenqingyuyue"}],"menu":"申请预约管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","删除","雇主评价"],"menu":"签订合同","menuJump":"列表","tableName":"qiandinghetong"}],"menu":"签订合同管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","雇主评价"],"menu":"电子签名","menuJump":"列表","tableName":"dianziqianming"}],"menu":"电子签名管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","修改","删除"],"menu":"雇主评价","menuJump":"列表","tableName":"guzhupingjia"}],"menu":"雇主评价管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","删除"],"menu":"咨询雇员","menuJump":"列表","tableName":"zixunguyuan"}],"menu":"咨询雇员管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","删除","审核"],"menu":"咨询雇主","menuJump":"列表","tableName":"zixunguzhu"}],"menu":"咨询雇主管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","服务预约","咨询雇员"],"menu":"服务项目列表","menuJump":"列表","tableName":"fuwuxiangmu"}],"menu":"服务项目模块"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","服务预约","申请预约","咨询雇主"],"menu":"需求信息列表","menuJump":"列表","tableName":"xuqiuxinxi"}],"menu":"需求信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"雇主","tableName":"guzhu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["新增","查看","修改","删除"],"menu":"资料认证","menuJump":"列表","tableName":"ziliaorenzheng"}],"menu":"资料认证管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["新增","查看","修改","删除","查看评论"],"menu":"服务项目","menuJump":"列表","tableName":"fuwuxiangmu"}],"menu":"服务项目管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","删除","审核","报表"],"menu":"服务预约","menuJump":"列表","tableName":"fuwuyuyue"}],"menu":"服务预约管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["报表","查看","删除"],"menu":"申请预约","menuJump":"列表","tableName":"shenqingyuyue"}],"menu":"申请预约管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","删除","审核","电子签名"],"menu":"签订合同","menuJump":"列表","tableName":"qiandinghetong"}],"menu":"签订合同管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看"],"menu":"电子签名","menuJump":"列表","tableName":"dianziqianming"}],"menu":"电子签名管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看"],"menu":"雇主评价","menuJump":"列表","tableName":"guzhupingjia"}],"menu":"雇主评价管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","删除","审核"],"menu":"咨询雇员","menuJump":"列表","tableName":"zixunguyuan"}],"menu":"咨询雇员管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","删除"],"menu":"咨询雇主","menuJump":"列表","tableName":"zixunguzhu"}],"menu":"咨询雇主管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","服务预约","咨询雇员"],"menu":"服务项目列表","menuJump":"列表","tableName":"fuwuxiangmu"}],"menu":"服务项目模块"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","服务预约","申请预约","咨询雇主"],"menu":"需求信息列表","menuJump":"列表","tableName":"xuqiuxinxi"}],"menu":"需求信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"雇员","tableName":"guyuan"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
