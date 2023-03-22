import type { IConfig } from "./configuration.ts";
// import dev from "./config.development";
// import prod from "./config.production";
// const dev = require("./config.development")
// require("./config.production")
// console.log(require("./config.development"));
import configMap from "./config"
let envConfig: IConfig = {};
try {
	// require(`./config.${process.env.NODE_ENV}`).default
	envConfig = require(`./config.${process.env.NODE_ENV}`).default;
	console.log(require(`./config.${process.env.NODE_ENV}`));
	console.log(configMap.get(process.env.NODE_ENV));
} catch (e) {
	console.error(e);
}

// 根据环境变量判断使用配置
export default envConfig;