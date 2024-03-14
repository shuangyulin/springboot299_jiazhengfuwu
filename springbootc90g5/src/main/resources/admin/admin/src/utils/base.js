const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootc90g5/",
            name: "springbootc90g5",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootc90g5/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "家政服务平台的设计与实现"
        } 
    }
}
export default base
