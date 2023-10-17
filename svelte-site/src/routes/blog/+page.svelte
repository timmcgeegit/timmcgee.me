<script lang="ts">
    import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data

</script>

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