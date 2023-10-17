<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="prose max-w-4xl mt-14 mb-24 px-6 mx-auto">
    
  <!-- Title -->
	<hgroup>
		<h1 class="text-6xl">{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

  <!-- Tags -->
	<div class="tags">
		{#each data.meta.categories as category}
			<span class="bg-base-200 mx-1 px-2 btn btn-xs">&num;{category}</span>
		{/each}
	</div>

  <!-- Post -->
	<div class="content">
		<svelte:component this={data.content} />
	</div>

</article>

<style>
    h1 {
        text-transform: capitalize;
        margin-bottom: .02em;
    }
	
</style>
