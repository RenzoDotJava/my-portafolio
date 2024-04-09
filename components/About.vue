<template>
  <section id="about" class="flex flex-col py-10 xl:py-28 xl:mx-16 2xl:mx-32">
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center">{{ $t('about.title') }}</h1>
    <div class="flex flex-col md:grid md:grid-cols-5 gap-10 mt-8 md:mt-12 xl:mt-16">
      <div class="text-md md:text-lg md:col-span-3">
        <p>
          {{ $t('about.description.part1') }}
          <strong>{{ $t('about.description.part2') }}</strong> {{ $t('about.description.part3') }} <strong>{{ $t('about.description.part4') }}</strong> {{ $t('about.description.part5') }} <strong>{{ $t('about.description.part6') }}</strong> {{ $t('about.description.part7') }} <strong>Multiplica</strong>.
        </p>
        <p class="mt-5 md:mt-7">
          {{ $t('about.description.part8') }} <strong>{{ $t('about.description.part9') }}</strong> {{ $t('about.description.part10') }} <strong>{{ $t('about.description.part11') }}</strong> {{ $t('about.description.part12') }}.
        </p>
        <p class="mt-5 md:mt-7">
          {{ $t('about.description.part13') }} <strong>{{ $t('about.description.part14') }}</strong> {{ $t('about.description.part15') }} <strong>{{ $t('about.description.part16') }}</strong>.
        </p>
        <p class="mt-5 md:mt-7">
          {{ $t('about.description.part17') }}:
        </p>
        <ul class="grid grid-rows-2 grid-cols-2 mt-5 gap-y-1">
          <li class="ml-5 list-disc">JavaScript</li>
          <li class="list-disc">TypeScript</li>
          <li class="ml-5 list-disc">React</li>
          <li class="list-disc">React Native</li>
          <li class="ml-5 list-disc">Angular</li>
          <li class="list-disc">Stencil.js</li>
        </ul>
      </div>
      <img
        class="object-contain md:col-span-2 aspect-[1.3] sm:aspect-[1.5] md:aspect-[1] lg:aspect-[1.2] md:self-center"
        src="/profile_photo.png" alt="Profile Photo">
    </div>
  </section>
</template>