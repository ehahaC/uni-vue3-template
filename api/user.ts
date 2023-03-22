import { request } from '@/utils/request';

/**
 * 登录
 * @param params
 */
export function getUserInfo() {
	return request.post('/userinfo', {}, {
		custom: {
			auth: true,
		},
	});
}
