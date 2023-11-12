<script>
  export let staticMedia; // static media source passed as a prop
  export let animatedMedia; // animated media source passed as a prop
  let currentMedia = staticMedia; // initialize with the static media

  const showAnimatedMedia = () => {
    currentMedia = animatedMedia;
  };

  const showStaticMedia = () => {
    currentMedia = staticMedia;
  };
</script>

<img
  src={currentMedia}
  alt="Portfolio item"
  on:mouseover={showAnimatedMedia}
  on:mouseout={showStaticMedia}
  class="rounded-box w-full h-auto"
/>
