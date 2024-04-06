<script setup>
import { icons } from '~/utils/constants';
</script>

<template>
  <footer class="h-[140px] flex flex-col mt-5 gap-6">
    <div class="flex gap-6 justify-center">
      <a v-for="icon in icons" :href="icon.link" target="_blank" rel="noopener noreferrer">
        <Icon :name="icon.name" class="h-8 w-8 hover:text-red-700" />
      </a>
    </div>
    <span class="text-base md:text-lg text-center">Designed & Built by Renzo Bedriñana</span>
  </footer>
</template>