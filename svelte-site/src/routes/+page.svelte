<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
  import PortfolioItem from '$lib/components/PortfolioItem.svelte';

	export let data

</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>



<div class="hero min-h-screen-sm py-11 mb-10">
    <div class="hero-content flex-col lg:flex-row-reverse mx-auto max-w-screen-lg">
      <div>
        <h1 class="lg:text-8xl font-bold text-7xl">Hey,<br>I'm Tim</h1>
        <p class="py-6 pr-14 max-w-3xl text-2xl leading-relaxed">For more than a decade I've led cross-functional teams to deliver projects that achieve key business objectives as a <span class="text-primary font-extrabold">digital strategist</span> and <span class="text-primary font-extrabold">marketing director</span>.</p>
        <a class="btn text-white btn-primary" href="/Tim McGee Resume 11-2023.pdf" target="_blank">Download Resume</a>
      </div>
    </div>
  </div>

  <div class="md:carousel hidden gap-2 h-96 rounded-box">
    <div class="carousel-item rounded-box">
      <PortfolioItem class="aspect-video" staticMedia="/ahbclearcreekstill.webp" animatedMedia="/AHB Clear Creek Gif.gif" />
    </div>
    <div class="carousel-item portfolio-website rounded-box w-96 h-96 overflow-hidden bg-no-repeat bg-cover bg-top transition duration-500 ease-in-out" style="background-image: url('/ahbeckwebsitescreenshot.png');"></div>
    <div class="carousel-item rounded-box">
      <PortfolioItem class="aspect-video" staticMedia="/laurendocthumbnail@0.5x.webp" animatedMedia="/lauren-doc.gif" />
    </div>
    <div class="carousel-item rounded-box">
      <PortfolioItem staticMedia="/TLJP-gallery-photo.webp"animatedMedia="/TLJP-gallery-photo.webp" />
    </div> 
    <div class="carousel-item rounded-box">
      <PortfolioItem staticMedia="/yosemite-landscape-gallery.webp"animatedMedia="/yosemite-landscape-gallery.webp" />
    </div> 
    </div>
  <!-- <div class="md:carousel hidden gap-2 h-96 rounded-box">
    <div class="carousel-item rounded-box">
      <img class="rounded-box" src="/AHB Clear Creek Gif.gif" alt="project case study video for A.H. Beck Foundation Company" />
    </div>
    <div class="carousel-item w-auto rounded-box">
      <img class="rounded-box" src="/yosemite-landscape-gallery.webp" alt="yosemite national park landscape photography" />
    </div> 
    <div class="carousel-item portfolio-website rounded-box w-96 h-96 overflow-hidden bg-no-repeat bg-cover bg-top transition duration-500 ease-in-out" style="background-image: url('/ahbeckwebsitescreenshot.png');">
    </div> 
    <div class="carousel-item aspect-video rounded-box">
      <img class="rounded-box" src="/lauren-doc.gif" alt="documentary film dictoring and cinematogrpahy" />
    </div>
    <div class="carousel-item w-auto rounded-box">
      <img class="rounded-box w-auto" src="/TLJP-gallery-photo.webp" alt="Podcast production and distribution" />
    </div> 
    <div class="carousel-item">
      <img class="rounded-box" src="/yosemite wedding gif.gif" alt="documentary film dictoring and cinematogrpahy" />
    </div> 
    
  </div> -->

  <div class="px-5">
    <div class="prose max-w-6xl gap-x-24 mx-auto flex flex-row my-16">
      <h2 class="lg:text-center lg:mx-auto text-7xl font-extrabold">Resume</h2>
    </div>
    <div class="prose max-w-6xl gap-x-24 mx-auto flex flex-row flex-wrap lg:flex-nowrap my-16">
      <h3 class="lg:w-1/2 lg:text-right text-4xl font-bold">About Me</h3>
      <p class="text-2xl lg:w-3/4 my-0 leading-relaxed">I specialize in blending brand strategy, digital marketing, and content creation to elevate brand visibility and increase audience engagement. My approach is centered around crafting marketing campaigns and leading digital transformation initiatives that drive growth and improve customer experiences.</p>
    </div>
    <div class="prose max-w-6xl gap-x-24 mx-auto flex flex-row flex-wrap lg:flex-nowrap my-16">
      <h3 class="text-center mx-auto px-5 text-5xl font-extrabold">Recent Work</h3>
    </div>
    <div class="prose max-w-6xl gap-x-24 mx-auto flex flex-row flex-wrap lg:flex-nowrap my-16">
      <div class="lg:w-1/2 leading-tight lg:text-right">
        <h4 class="text-2xl my-1 font-bold">Director of Marketing</h4>
        <p class="my-1">A.H. Beck Foundation Co.</p>
        <p class="my-1">July 2022 – Present</p>
      </div>
      <div class="lg:w-3/4">
        <p class="my-1">Led a strategic overhaul of the brand’s digital presence and visual identity, aligning the website and marketing materials with the company's market-leading expertise. The result was a revitalized brand narrative that resonates with the target audience and supportes key company objectives.</p>
      </div>
    </div>
    <div class="prose max-w-6xl gap-x-24 mx-auto flex flex-row flex-wrap lg:flex-nowrap my-16">
      <div class="lg:w-1/2 leading-tight lg:text-right">
        <h4 class="text-2xl my-1 font-bold">Director of Marketing</h4>
        <p class="my-1">National CCIC</p>
        <p class="my-1">July 2022 – Present</p>
      </div>
      <div class="lg:w-3/4">
        <p class="my-1">Led a user-centric website redesign improving user experience and conversions, integrated cutting-edge CRM and automation software to improve engagement and workflow efficiency, and executed targeted SEO and PPC campaigns to boost online visibility. I also united sales, marketing, and customer service teams, creating a cohesive strategy that measurably increased revenue and improved the entire customer lifecycle.</p>
      </div>
    </div>
    <div class="prose max-w-6xl gap-x-24 mx-auto flex flex-row flex-wrap lg:flex-nowrap my-16">
      <div class="w-1/2 leading-tight lg:text-right">
        <h4 class="text-2xl my-1 font-bold">Independent Consultant</h4>
        <p class="my-1">Tim McGee LLC</p>
        <p class="my-1">Jan 2010 – Present</p>
      </div>
      <div class="lg:w-3/4">
        <p class="my-1">I've partnered with clients to craft and implement customized marketing strategies and digital campaigns,including websites and brand strategies that enhance online visibility and drive business expansion. I've led dynamic content campaigns across video, podcasts, and social media to elevate brand awareness and affinity, as well as developed robust e-commerce and learning platforms, ensuring my clients not only reach but exceed their diverse business objectives..</p>
      </div>
    </div>
  </div>


    <style>
    

    </style>
