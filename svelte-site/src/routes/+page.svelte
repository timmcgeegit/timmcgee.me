<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="hero min-h-screen-sm bg-base-200 py-11 mb-10">
    <div class="hero-content flex-col lg:flex-row-reverse mx-auto max-w-screen-lg">
      <img src="/IMG_2444.PNG" alt="headshot of Tim McGee" class="max-w-sm rounded-lg shadow-2xl mx-10" />
      <div>
        <h1 class="text-6xl font-bold">Box Office News!</h1>
        <p class="py-6 pr-14">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>

  <article class="prose max-w-2xl px-6 my-12 mx-auto">
    <h2 class="title" id="blog">Blog Posts</h2>
    <div class="posts">
      {#each data.posts as post}
        <div class="post">
          <h3><a href={post.slug} class="title">{post.title}</a></h3>
          <p class="date">{formatDate(post.date)}</p>
          <p class="description">{post.description}</p>
        </div>
      {/each}
      </div>
  
    </article>
