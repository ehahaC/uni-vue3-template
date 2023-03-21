import { defineStore } from 'pinia';
// import { getCache, removeCache, setCache } from '@/utils/cache';
import { TOKEN_KEY } from '@/enums/cacheEnum';
import { login, logout, refreshToken } from '@/api/auth';

interface AuthState {
    token?: string;
}

export const useAuthStore = defineStore({
    id: 'auth',
    state: (): AuthState => ({
        token: uni.getStorageSync(TOKEN_KEY),
    }),
    getters: {
        getToken: (state) => state.token,
        isLogin: (state): boolean => !!state.token,
    },
    actions: {
        setToken(token: string | undefined) {
            // setCache(TOKEN_KEY, token);
            this.token = token;
        },
        /**
         * @description 登录
         */
        async login(params): Promise<any> {
            try {
                const { data } = await login(params);
                this.setToken(data.token);
                return Promise.resolve(data);
            } catch (err: any) {
                return Promise.reject(err);
            }
        },
        /**
         * @description 登出
         */
        async loginOut(): Promise<any> {
            try {
                const res = await logout();
                removeCache(TOKEN_KEY);
                this.setToken(undefined);
                return Promise.resolve(res);
            } catch (err: any) {
                return Promise.reject(err);
            }
        },
        /**
         * @description 刷新token
         */
        async refreshToken(): Promise<any> {
            try {
                const { data } = await refreshToken();
                this.setToken(data.token);
                return Promise.resolve(data);
            } catch (err: any) {
                return Promise.reject(err);
            }
        },
    },
});
