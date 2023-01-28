<script lang="ts">
	export let category: string = '';
</script>

<a
	href="/blog/category/{category}"
	class="mr-2 inline-flex rounded text-myBlue-800 items-center py-2 px-2 text-xs font-bold bg-myBlue-400 hover:bg-myBlue-300"
	>{category}
</a>
