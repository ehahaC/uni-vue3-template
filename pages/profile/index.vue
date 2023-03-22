<template>
	<view>
		profile
	</view>
</template>

<script setup>
	import { onLoad } from "@dcloudio/uni-app"
	import { getUserInfo } from "@/api/user";
	
	onLoad(async () => {
		let resp = await getUserInfo()
	})
</script>

<style>

</style>
