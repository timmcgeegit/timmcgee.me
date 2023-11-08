<script lang="ts">
  import * as config from '$lib/config'

  import { onMount } from 'svelte'
import { themeChange } from 'theme-change'

// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
onMount(() => {
  themeChange(false)
  // 👆 false parameter is required for svelte
})
</script>

<nav>
  <div class="navbar bg-base-100 max-w-screen-xl mx-auto">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Notes</a></li>
        
        </ul>
      </div>
      <a href="/" class="btn btn-ghost normal-case text-xl"><div class="avatar">
        <div class="w-10 rounded-full">
          <img src="/tim-headshot-2020-1-300x300 copy.jpeg" />
        </div>
      </div>Tim McGee</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Notes</a></li>
        
      </ul>
    </div>
    <div class="navbar-end">

      <div class="m-5 flex flex-row gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        <div class="inline-block w-10">
          <span data-toggle-theme="business" data-act-class="pl-4" class="border rounded-full flex items-center cursor-pointer w-10 transition-all duration-300 ease-in-out pl-0">
            <span class="rounded-full w-3 h-3 m-1 bg-gray-400">
            </span>
          </span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
      </div>
      
    </div>
  </div>
</nav>