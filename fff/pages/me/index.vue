<template>
	<div>
		<van-dropdown-menu>
			<van-dropdown-item v-model="value1" :options="option1" />
		</van-dropdown-menu>

		<van-checkbox-group v-model="checked" shape="square">
			<van-checkbox name="a">复选框 a</van-checkbox>
			<van-checkbox name="b">复选框 b</van-checkbox>
		</van-checkbox-group>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checked:'',
				value1: '',
				option1: [{
						text: '全部商品',
						value: 0
					},
					{
						text: '新款商品',
						value: 1
					},
					{
						text: '活动商品',
						value: 2
					}
				]
			}
		}
	}
</script>

<style>
</style>