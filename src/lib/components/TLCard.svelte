<script lang="ts">
	export let percent: string = '10';
</script>

<div class="w-full relative bg-myBlue-800 rounded h-8">
	<div
		class="bg-myBlue-600 rounded inline-flex items-center h-full text-xs text-center"
		style="width: {percent}%"
	/>
	<div class="absolute text-white text-xs font-bold inline-flex items-center top-1 left-1">
		<slot />
	</div>
</div>
