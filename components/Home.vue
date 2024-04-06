<script setup lang="ts">
import { icons } from '~/utils/constants';
//https://v4.brittanychiang.com/
//https://olaolu.dev/
</script>

<template>
  <section id="home" class="h-screen flex justify-center flex-col gap-7 xl:ms-16 2xl:ms-32">
    <div class="flex flex-col">
      <h2 class="font-bold" style="font-size: clamp(20px, 5vw, 50px);">Hi! I'm Renzo.</h2>
      <h1 class="font-bold mt-1 md:mt-0" style="font-size: clamp(30px, 7vw, 70px);">A frontend developer</h1>
      <p class="w-fit max-w-[450px] md:max-w-[550px] lg:max-w-[650px] mt-3 lg:mt-5 text-md md:text-lg">
        If you are looking for someone specialized in developing <strong>websites</strong>, <strong>mobile
          apps</strong>, and <strong>design systems</strong>, you are in the right place!
      </p>
      <p class="mt-2 md:mt-3 text-md md:text-lg">Contact me at <strong>contact@rgbo.me</strong></p>
    </div>
    <div class="flex gap-5 md:gap-8">
      <a v-for="icon in icons" :href="icon.link" target="_blank" rel="noopener noreferrer">
        <Icon :name="icon.name" class="h-8 w-8 hover:text-red-700" />
      </a>
    </div>
    <button type="button"
      class="border focus:outline-none w-fit focus:bg-gray-100 hover:bg-gray-100 active:bg-gray-200 px-10 py-2 font-semibold text-lg mt-2 md:mt-4">My
      Resume</button>
  </section>
</template>