<template>
  <header class="flex justify-between items-center h-[80px] px-7 md:px-9 lg:px-12 absolute w-full">
    <a href="#home" class="text-xl lg:text-2xl font-bold">RGBO STUDIO</a>
    <nav>
      <ul class="hidden md:flex gap-7">
        <!-- <li><a href="#home">Home</a></li> -->
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="md:hidden">
        <Icon class="h-8 w-8" name="material-symbols:menu" color="black" />
      </div>
    </nav>
  </header>
</template>