import Fly from '../../utils/fly';
// 将一些全局变量存在app实例的globalData中
const app = getApp();
const baseApiUrl = app.globalData.baseApiUrl;
// const application = app.globalData.application;
const token = app.globalData.token;
// 定义一些接口状态码需要提示的文案，用作错误提示
const statusText = {
    0: '网络连接异常',
    1: '网络连接超时',
    401: '用户未登录',
    403: '无权限访问该资源',
    404: '资源不存在',
    405: '请求方法不允许',
    500: '网络异常，请检查网络',
    503: '服务不可用',
    504: '网关超时'
};

const fly = new Fly();
// 统一配置请求baseUrl
fly.config.baseURL = baseApiUrl;
// 统一配置超时时间
fly.config.timeout = 5000;
// 请求拦截，在这里面做一些个性化配置
fly.interceptors.request.use((request:any) => {
    /**
     * 演示：
     * 给所有请求的请求头加端application标识（如果应用场景不需要就不用写）
     */
    request.headers = {
        'content-type': 'application/json',
        'token':token,
        "type":1
    };

    /**
     * 演示：
     * 给所有请求参数添加application参数（如果应用场景不需要就不用写）
    //  */
    // if (request.method === 'GET') {
    //     request.params.application = application;
    // }
    // if (request.method === 'POST' || request.method === 'PUT' || request.method === 'DELETE') {
    //     // 请求不传参数时，request.body为undefined
    //     if (request.body) {
    //         request.body.application = application
    //     } else {
    //         request.body = {
    //             application
    //         };
    //     }
    // }

    // .....
    // .....
    // .....
    
    return request;
});

// 响应拦截，在这里面对接口响应做处理。
fly.interceptors.response.use((response:any, promise:any) => {
        return promise.resolve(response.data);
    }, (err:any, promise:any) => {
        let msg;
        msg = err.response.data.message ? err.response.data.message : (statusText[err.status]  ? statusText[err.status] : '请求数据失败,请稍后再试');
        wx.showToast({
           title: msg,
           mask: true,
           icon: 'none',
           duration: 2000
        });
        return promise.reject();
    }
);

export default fly;
