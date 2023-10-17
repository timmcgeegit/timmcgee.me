<script lang="ts">
	import '../app.postcss';
	import Header from './header.svelte';
	import Footer from './footer.svelte'
	import PageTransition from './transition.svelte'
	
	export let data
</script>

<div class="layout">

<Header />
<main>
<PageTransition url={data.url}>
<slot />
</PageTransition>
</main>
<Footer />
</div>

<style>

</style>