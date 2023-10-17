<!-- FILEPATH: /Users/timmcgee/Documents/dev/timmcgee.me/svelte-site/src/routes/about/+page.svelte -->

<script>
    let items = ['apple', 'banana', 'orange'];
</script>

<div class="hero min-h-screen-lg py-12 bg-base-200 mb-10">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Blog</h1>
      </div>
    </div>
  </div>

<ul>
    {#each items as item}
        <li>{item}</li>
    {/each}
</ul>
