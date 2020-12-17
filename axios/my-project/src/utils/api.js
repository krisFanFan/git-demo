import axios from "axios"
import qs from 'qs'
// 根据环境变量
switch (process.env.NODE_ENV) {
    // 生产环境
    case "production":
        axios.defaults.baseURL = "http:127.0.0.1:8082";
    case "test":
        axios.defaults.baseURL = "http:127.0.0.1:8081";
    default:
        axios.defaults.baseURL = "http:127.0.0.1:8080";

}

axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

/* 
设置请求传递的数据格式(看服务器要求什么格式)
x-WWW-from-urlencoded
*/
axios.defaults.headers["Content-Type"] = "application/x-www-from-urlencoded"
/* 1.在项目中使用命令行工具输入：npm install qs
2.安装完成后在需要用到的组件中：import qs from 'qs’
3.在main.js中全局引入： Vue.prototype.$qs = qs； */
axios.defaults.transformRequest = data => qs.stringify(data); //只对post请求有作用   

// 接受服务器返回的toke。每一次向服务器发请求，我们应该把token带上
instance.interceptors.request.use(config => {
     let token = localStorage.getItem('token');
    token && (config.headers.Authorization = token);
    return config
}, error => {
        return Promise.reject(error)
})
// 
instance.interceptors.response.use(response => {
    return response.data
    
}, error => {
        let { } = error;
        if (response) {
            // =>服务器返回结果
            switch (response.status) {
                case 401: //=>登录权限
                    break;
                case 403://=>token过期
                    break;
                case 404://找不到页面
                    break;
        }
        } else {
            // =>服务器连结果都没有返回
            if (!window.navigator.onLine) {
                //断网处理
                return
             }
           return Promise.reject(error)
        }
}
 
)

export default axios;