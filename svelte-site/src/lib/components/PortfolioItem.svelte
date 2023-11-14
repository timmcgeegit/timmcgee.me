<script>
  import { onMount } from 'svelte';
  export let staticMedia; // static media source passed as a prop
  export let animatedMedia; // animated media source passed as a prop
  let currentMedia = staticMedia ? staticMedia : ''; // initialize with the static media if it's defined

  onMount(() => {
    if (animatedMedia) {
      currentMedia = animatedMedia;
    }
  });
</script>

<img
  src={currentMedia}
  alt="Portfolio item"
  class="rounded-box w-full h-auto"
/>