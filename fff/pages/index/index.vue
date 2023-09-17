<template>
	<view class="content">
<!-- 		<button @:click="awesome = !awesome">Toggle</button>
		<h1 v-if="awesome">Vue is awesome!</h1>
		<h1 v-else>Oh no 😢</h1>

		<div v-if="type === 'A'"> A </div>
		<div v-else-if="type === 'B'"> B </div>
		<div v-else-if="type === 'C'"> C </div>
		<div v-else> Not A/B/C </div>

		<h1 v-show="awesome">Hello!</h1> -->
		
		<van-checkbox-group v-model="checked" shape="square">
		  <van-checkbox  v-for="(value, key, index) in person" :name="value">
		  {{key }}: {{value}}
		  </van-checkbox>
		</van-checkbox-group>


<!-- 		<van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
			<van-cell v-for="(value, key, index)  in person" :key="index" :title="value" />
		</van-list> -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				awesome: false,
				type: 'A',
				names: ['Alice', 'Bob', 'Charlie'],
				person: {
					name: 'Alice',
					age: 18,
					gender: 'female'
				},
				checked:''
			}
		},
		computed: {

		},
		watch: {

		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>

</style>