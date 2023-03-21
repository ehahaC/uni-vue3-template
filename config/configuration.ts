// 判断系统是否是开发环境
export function isDev(): boolean {
	return process.env.NODE_ENV === "development";
}

// 配置文件接口
export interface IConfig {
	/**
	 * 接口base路径
	 */
	baseUrl: string;
}

/* 用于智能提示 */
export function defineConfig(config: IConfig): IConfig {
	return config;
}
