import Request from '@/uni_modules/luch-request/luch-request';
import env from "@/config";
import { useAuthStore } from '@/store/auth';
import { ResultEnum } from '@/enums/httpEnum';

const BASE_URL = env.baseUrl;
const HEADER = {
    'Content-Type': 'application/json;charset=UTF-8;',
    Accept: 'application/json, text/plain, */*',
};

function createRequest() {
    return new Request({
        baseURL: BASE_URL,
        header: HEADER,
        meta: {
            auth: true,
        },
    });
}

const request = createRequest();
/**
 * 请求拦截器
 */
request.interceptors.request.use(
    (options) => {
        if (options.meta?.auth) {
            const authStore = useAuthStore();
            if (!authStore.isLogin) {
				uni.showToast({
					icon: "error",
					title: "请先登录"
				})
                // token不存在跳转到登录页
                return Promise.reject(options);
            }
            options.header = Object.assign(options.header, {
                authorization: `Bearer ${authStore.getToken}`,
            });
        }
        return options;
    },
    (options) => Promise.reject(options)
);

/**
 * 响应拦截器
 */
request.interceptors.response.use(
    async (response) => {
        const { data: resData } = response;
        const { code, message } = resData;
        if (code === ResultEnum.SUCCESS) {
            return resData as any;
        }
        uni.showToast({
        	icon: "error",
        	title: message
        })
        return Promise.reject(resData);
    },
    (response) =>
        // 请求错误做点什么。可以使用async await 做异步操作
        // error('Request Error!');
        Promise.reject(response)
);

export { request };
