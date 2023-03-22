<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text>当前状态: {{ authStore.isLogin ? "已登录" : "未登录" }}</text>
		</view>
		<button type="warn" @click="handleClick">登录后可查看页面</button>
	</view>
</template>

<script setup>
	import { ref } from "vue"
	import { useAuthStore } from "@/store/auth";
	const authStore = useAuthStore()
	
	function handleClick(){
		uni.redirectTo({
			url: "/pages/need-auth/index"
		})
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
