<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="hero min-h-screen-sm py-11 mb-10">
    <div class="hero-content flex-col lg:flex-row-reverse mx-auto max-w-screen-lg">
      <div>
        <h1 class="lg:text-8xl text-4xl"><span class="font-extrabold">Digital Strategist</span> <span class="text-primary">&</span> <span class="font-extrabold">Marketing Director</span></h1>
        <p class="py-6 pr-14">Hi, I'm Tim! Thanks for visiting my website. I’m a <span class="text-primary font-extrabold">digital strategist</span> and <span class="text-primary font-extrabold">marketing director</span> with more than a decade of experience leading cross-functional teams to deliver projects that achieve key business objectives.</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  <div>
    <div class="flex">
      
    </div>
  </div>
  

  <article class="prose max-w-2xl px-6 my-12 mx-auto">
    <h2 class="title text-5xl" id="blog">Blog Posts</h2>
    <div class="posts">
      {#each data.posts as post}
        <div class="post my-6">
          <h3 class="text-2xl my-1"><a href={post.slug} class="title">{post.title}</a></h3>
          <p class="date m-0">{formatDate(post.date)}</p>
          <p class="description my-0">{post.description}</p>
        </div>
      {/each}
      </div>
  
    </article>

    <style>
      
    </style>
