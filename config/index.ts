import type { IConfig } from "./configuration.ts"
import devConfig from "./config.development"
import prodConfig from "./config.production"
let envConfig: IConfig = {};
try {
	envConfig = process.env.NODE_ENV === "development" ? devConfig : prodConfig;
} catch (e) {
	console.error(e);
}

// 根据环境变量判断使用配置
export default envConfig;