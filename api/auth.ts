import { request } from '@/utils/request';

/**
 * 登录
 * @param params
 */
export function login(params) {
	return request.post('/login', params, {
		custom: {
			auth: false,
		},
	});
}

/**
 * 登出
 */
export function logout() {
	return request.post('/logout', {});
}

/**
 * 刷新token
 */
export function refreshToken() {
	return request.post('/refresh/token', {});
}
