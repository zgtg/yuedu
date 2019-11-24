<template>
	<view>
		write...
	</view>
</template>

<script>
	var loginRes;
	
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad() {
			loginRes = this.checkLogin("../write/write", 2);
			console.log(loginRes);
			if(!loginRes) {
				return;
			}
		}
	}
</script>

<style>

</style>
