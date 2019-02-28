<template>
	<div style="width:800px;margin:auto" >
		<div ref="table" >
		</div>
	</div>
</template>

<script>
	/* eslint-disable */
	import {Handsontable} from '@/components/vueFem2';

	export default {
		mounted() {
			var hot1 = new Handsontable(this.$refs.table, {
			  data: Handsontable.helper.createSpreadsheetData(100, 100),
			  width: '100%',
			  height: 320,
			  colWidths: 100,
			  rowHeights: 23,
			  rowHeaders: true,
			  colHeaders: true
			});

		}
	}
</script>

<style>

</style>