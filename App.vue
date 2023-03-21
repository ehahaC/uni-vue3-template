<script>
	import { routerRemoveInterceptor, routerInterceptor } from "@/router/interceptor.ts"
	import { useRouterStore } from "@/store/router.ts"
	import { toRaw } from "vue"
	export default {
		onLaunch: function() {
			console.log('App Launch')
			routerRemoveInterceptor();
			routerInterceptor();
			const appStore = useRouterStore();
			appStore.initialize();
			console.log("路由地图: ");
			console.log(toRaw(appStore.getRoutes));
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
