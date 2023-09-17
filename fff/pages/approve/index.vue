<template>
	<div>
		<van-cell-group>
		  <van-cell title="单元格" value="内容" />
		  <van-cell title="单元格" value="内容" label="描述信息" />
		</van-cell-group>
		
		<!-- 可以使用 CellGroup 作为容器 -->
		<van-cell-group inset>
		  <van-field v-model="value" label="文本" placeholder="请输入用户名" />
		</van-cell-group>
		
		<van-cell-group inset>
		  <van-field v-model.number="age" label="文本" placeholder="请输入你的年龄" />
		</van-cell-group>
		
		<van-checkbox v-model="checked">复选框</van-checkbox>
		
		<van-radio-group v-model="checked2">
		  <van-radio name="man">单选框 1</van-radio>
		  <van-radio name="woman">单选框 2</van-radio>
		</van-radio-group>


	</div>
</template>

<script>
	
	export default {
		data(){
			return{
				value:'',
				checked:false,
				checked2:'',
				age:''
			}
		}
	}
	
</script>

<style>
</style>