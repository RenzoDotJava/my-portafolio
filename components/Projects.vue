<script setup>
const { locale } = useI18n();

const projects = [
  {
    id: 1,
    title: 'Design System',
    subtitle: 'Wargos Tec Project',
    src: '/ds_wargos_project.png',
    alt: 'wargos_design_system',
    link: 'https://wargos-storybook.s3.amazonaws.com/index.html',
    github: '',
    descriptions: [
      {
        en: "A design system that helps the wargos's developers to build a consistent design across the different systems and requires less time to implement new features.",
        es: 'Un sistema de diseño que ayuda a los desarrolladores de wargos a construir un diseño consistente en los diferentes sistemas y requerir menos tiempo para implementar nuevas funcionalidades.'
      },
      {
        en: 'One of the main tasks was to analyze the different projects and detect which components could be centralized, and then improve them.',
        es: 'Una de las tareas principales fue analizar los diferentes proyectos y detectar qué componentes se podía centralizar y luego mejorarlos.'
      }
    ],
    techs: ['TypeScript', 'React', 'Webpack 5', 'Storybook']
  },
  {
    id: 2,
    title: 'Pex App',
    subtitle: 'Personal Project',
    src: '/pex_app_project.png',
    alt: 'pex_app',
    link: '',
    github: 'https://github.com/RenzoDotJava?tab=repositories',
    descriptions: [
      {
        en: 'A mobile app for tracking your personal expenses. Register your daily expenses and see a summary by day and month. Generate a custom report and export it as an excel file.',
        es: 'Una aplicación móvil para llevar un seguimiento de tus gastos personales. Registra tus gastos diarios y ve un resumen por día y mes. Genera un reporte personalizado y exportalo como un archivo excel.'
      },
      {
        en: 'The app is currently undergoing internal testing on the Play Store.',
        es: 'La aplicación actualmente se encuentra en pruebas internas en la Play Store.'
      }
    ],
    techs: ['TypeScript', 'React Native', 'Expo', 'Supabase']
  },
  {
    id: 3,
    title: 'SPH Web Course Manager',
    subtitle: 'MVC Partners Project',
    src: '/sph_courses_project.png',
    alt: 'sph_courses_web',
    link: 'https://www.cursos.sph-peru.org/',
    github: '',
    descriptions: [
      {
        en: 'A web for managing courses and conferences. Register the speakers, the assistants, and the topics. Generate a certificate for the assistants and export it as a PDF file.',
        es: 'Una web para gestionar cursos y conferencias. Registra a los ponentes, los asistentes y los temas. Genera un certificado para los asistentes y exportalo como un archivo PDF.'
      }
    ],
    techs: ['TypeScript', 'Angular', 'Java Spring Boot']
  }
]
</script>
<template>
  <section id="projects" class="flex flex-col py-10 xl:py-28 sm:mx-4 md:mx-8 xl:mx-16 2xl:mx-36">
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center">{{ $t('work.title') }}</h1>
    <div class="flex flex-col gap-12 md:gap-16 xl:gap-20 mt-12 md:mt-16 xl:mt-20">
      <div v-for="(project, index) in projects" :key="index"
        class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6 md:gap-10">
        <div class="flex justify-center max-h-[250px] sm:max-h-[300px] md:max-h-[350px] 2xl:max-h-[400px]">
          <img class="col-span-1 object-contain" :src="project.src" :alt="project.alt" />
        </div>
        <div class="col-span-1 flex flex-col">
          <div class="flex justify-between items-center">
            <h2 class="text-xl xl:text-2xl font-bold">{{ project.title }}</h2>
            <div>
              <a v-if="project.link !== ''" :href="project.link" target="_blank" rel="noopener noreferrer">
                <Icon name="mdi:launch" class="h-6 w-6 hover:text-red-700 transition-all" />
              </a>
              <a v-if="project.github !== ''" :href="project.github" target="_blank" rel="noopener noreferrer">
                <Icon name="ph:github-logo" class="h-7 w-7 hover:text-red-700 transition-all" />
              </a>
            </div>
          </div>
          <h3 class="text-md xl:text-lg mt-1 text-slate-500 font-medium">{{ $t(`projects.projects.project${project.id}.subtitle`) }}</h3>
          <div class="mt-2">
            <p v-for="(description, index) in project.descriptions" :key="index"
              class="text-base md:text-lg mt-3 md:mt-5">{{ locale === 'en' ? description.en : description.es }}</p>
          </div>
          <ul class="flex flex-wrap gap-2 mt-6 md:mt-8">
            <li class="rounded-3xl px-2 py-1 border text-sm md:text-base text-center self-center"
              v-for="(tech, index) in project.techs" :key="index">
              {{ tech }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>