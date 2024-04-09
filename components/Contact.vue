<template>
  <section id="contact" class="h-screen">
    <div class="flex flex-col h-[calc(100%-140px)] justify-center items-center gap-8 max-w-[600px] mx-auto">
      <h1 class="text-3xl font-bold text-center">{{ $t('contact.title') }}</h1>
      <p class="text-base md:text-lg text-center leading-relaxed">
        {{ $t('contact.description') }}
      </p>
      <a href="mailto:contact@rgbo.me"
        class="border focus:outline-none focus:bg-gray-100 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 font-semibold text-lg cursor-pointer">{{ $t('contact.link') }}</a>
    </div>
    <Footer></Footer>
  </section>
</template>