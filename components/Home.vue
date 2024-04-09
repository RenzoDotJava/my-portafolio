<script setup lang="ts">
import { icons } from '~/utils/constants';

const { locale } = useI18n();
</script>

<template>
  <section id="home" class="h-screen flex justify-center flex-col gap-7 xl:ms-16 2xl:ms-32">
    <div class="flex flex-col">
      <h2 class="font-bold" style="font-size: clamp(20px, 5vw, 50px);">{{ $t('home.title', { name: 'Renzo' }) }}</h2>
      <h1 class="font-bold mt-1 md:mt-0" style="font-size: clamp(30px, 7vw, 70px);">{{ $t('home.subtitle') }}</h1>
      <p class="w-fit max-w-[450px] md:max-w-[550px] lg:max-w-[650px] mt-3 lg:mt-5 text-md md:text-lg">
        {{ $t('home.slogan.part1') }} <strong>websites</strong>, <strong>{{ $t('home.slogan.part2') }}</strong>, {{
          $t('home.slogan.part3') }}
        <strong>{{ $t('home.slogan.part4') }}</strong>, {{ $t('home.slogan.part5') }}!
      </p>
      <p class="mt-2 md:mt-3 text-md md:text-lg">{{ $t('home.slogan.part6') }} <strong>contact@rgbo.me</strong></p>
    </div>
    <div class="flex gap-5 md:gap-8">
      <a v-for="icon in icons" :href="icon.link" target="_blank" rel="noopener noreferrer">
        <Icon :name="icon.name" class="h-8 w-8 hover:text-red-700" />
      </a>
    </div>
    <a :href="locale === 'en' ? 'https://pub-1e45773301c547a7829dc62e2ecab4c8.r2.dev/EN%20CV%20Renzo%20Bedrinana.pdf' : 'https://pub-1e45773301c547a7829dc62e2ecab4c8.r2.dev/ES%20CV%20Renzo%20Bedrinana.pdf'"
      target="_blank" rel="noopener noreferrer"
      class="border focus:outline-none w-fit focus:bg-gray-100 hover:bg-gray-100 active:bg-gray-200 px-10 py-2 font-semibold text-lg mt-2 md:mt-4">
      {{ $t('home.resume') }}
    </a>
  </section>
</template>