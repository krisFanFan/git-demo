import axios from 'axios'
// 创建新的axios实例
const service = axios.create({
        baseURL: "/",
        timeout: 10 * 1000
    })
    // 创建请求拦截器
service.interceptors.request.use(
    config => {
        // Toast.loading({
        //     message: "加载中，别慌。。。",
        //     forbidClick: true,
        //     duration: 0
        // });
        config.data = JSON.stringify(config.data);
        if (config.method == "put") {
            config.data = JSON.stringify(config.params)
        }
        config.headers = {
            "Content-Type": "application/json"
        }
        return config
    },
    error => {
        // Toast.clear();
        Promise.reject(error);
    }
);
// 相应拦截器
service.interceptors.response.use(
    response => {
        // Toast.clear();
        return response.data
    },
    error => {
        // Toast.clear();
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = "错误请求";
                    break;
                case 401:
                    error.message = "未授权，请重新登录";
                    break;
                case 404:
                    error.message = "请求错误，没有找到该数据资源";
                    break;
                case 405:
                    error.message = "请求方法不允许";
                    break;
                case 408:
                    error.message = "请求超时";
                    break;
                case 500:
                    error.message = "服务器端出错";
                    break;
                case 501:
                    error.message = "网络未实现";
                    break;
                case 502:
                    error.message = "网络错误";
                    break;
                case 503:
                    error.message = "服务器不可用";
                    break;
                case 504:
                    error.message = "网络超时";
                    break;
                case 505:
                    error.message = "http版本不支持该请求";
                    break;
                default:
                    error, message = `链接错误${error,response.status}`
            }
        } else {
            // 超时处理
            // if (JSON.stringify(error).includes("timeout")) {
            //     Toast("服务器响应超时，请刷新当前页面");
            // }
            error.message("链接服务器失败")
        }
        // Toast(error.message);
        return Promise.resolve(error.response.data);
    }
);
export default service;