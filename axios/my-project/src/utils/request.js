import axios from "axios"
// 创建一个新的对象
const instance = axios.create({
    baseURL: "https://elm.cangdu.org", //会在发送请求的时候拼接在url参数前边
    timeout:5000
})

// 请求拦截 所以的网络请求都会先走这个方法
instance.interceptors.request.use(
    function (config) {
        console.group("全局请求拦截")
         console.log(config)
        console.groupEnd()
        config.headers.token="123456"
        return config
    },
    function (err) {
        return Promise.reject(err);
    }
)
// 全局的响应拦截 所有网络请求返回数据之后都会执行此方法
instance.interceptors.response.use(
    function (response) {
        console.group("全局响应拦截")
        console.log(response)
        console.groupEnd()
        return response
    },
    function (err) {
        return Promise.reject(err)
    }
)

// 封装get请求
export function get(url, params) {
    return instance.get(url, {
        params
    })
}
// 封装post请求
export function post(url, data) {
    return instance.post(url,data)
}
// 封装delete请求
export function del(url) {
    return instance.delete(url)
}

// 封装put请求
export function put(url,data) {
    return instance.put(url,data)
}

