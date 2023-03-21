<template>
	<view class="page-container">
		<view class="userinfo">
			<view class="userinfo-avatar">
				<open-data type="userAvatarUrl"></open-data>
			</view>
			<open-data type="userNickName"></open-data>
		</view>

		<view class="usermotto">
			<button type="primary" open-type="getPhoneNumber" size="mini" @getphonenumber="decryptPhoneNumber">获取手机号</button>
		</view>
	</view>
</template>

<script setup>
	import { useAuthStore } from "@/store/auth"
	const authStore = useAuthStore()
	
	async function decryptPhoneNumber(event) {
		if ( !event.detail.code ){
			return
		}
		await authStore.login({ code: event.detail.code })
		uni.reLaunch({
			url: "/pages/index/index"
		})
	}
</script>

<style lang="scss">
	.page-container {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;

		.userinfo {
			text-align: center;

			.userinfo-avatar {
				margin: 20rpx auto;
				overflow: hidden;
				width: 128rpx;
				height: 128rpx;
				// margin: 20rpx;
				border-radius: 50%;
			}
		}

		.usermotto {
			margin-top: 200px;
			display: flex;
			justify-content: center;
		}
	}
</style>
