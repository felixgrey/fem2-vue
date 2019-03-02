<template>
	<div>
		<h4>ES6</h4>
		<div style="width:800px;margin: auto;text-align:left;border: solid 1px black;">
			<textarea ref="area">() => {console.log(this); }</textarea>
		</div>
		<h4>ES5</h4>
		<div style="width:800px;margin: auto;text-align:left;border: solid 1px black;margin-top: 12px;">
			<textarea ref="area2"></textarea>
		</div>
	</div>
</template>

<script>
	/* eslint-disable */
	import { CodeMirror, babel } from '@/components/vueFem2';
	import _CodemirrorInHeader from './_CodemirrorInHeader.vue';
	
	export const $Doc = {
	  header:{
	    title: '代码',
	    compnents: [_CodemirrorInHeader]
	  }
	}

	export default {
		mounted() {

			const editor = CodeMirror.fromTextArea(this.$refs.area, {
				lineNumbers: true,
				mode: "jsx"
			});
			
			const editor2 = CodeMirror.fromTextArea(this.$refs.area2, {
				lineNumbers: true,
				mode: "jsx"
			});
			
			editor2.setValue(babel.transform(editor.getValue()).code)

			editor.on('change',()=>{
				try{
					editor2.setValue(babel.transform(editor.getValue()).code)
				}catch(e){
					
				}
				
			});
		}
	}
</script>

<style>

</style>