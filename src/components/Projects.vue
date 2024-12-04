<template>
  <section id="projects" class="py-20 bg-white dark:bg-gray-800">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Featured Projects
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" 
             :key="project.title"
             class="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md project-card">
          <img :src="project.image" 
               :alt="project.title" 
               class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="font-bold text-xl mb-2 text-gray-800 dark:text-white">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ project.description }}
            </p>
            <div class="flex space-x-4">
              <a v-if="project.demo" 
                 :href="project.demo"
                 target="_blank"
                 class="text-blue-600 hover:text-blue-700">
                Demo
              </a>
              <a v-if="project.code" 
                 :href="project.code"
                 target="_blank"
                 class="text-blue-600 hover:text-blue-700">
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the first project and its key features.',
    image: 'https://via.placeholder.com/400x300',
    demo: '#',
    code: '#'
  },
  {
    title: 'Project Two',
    description: 'A brief description of the second project and its key features.',
    image: 'https://via.placeholder.com/400x300',
    demo: '#',
    code: '#'
  },
  {
    title: 'Project Three',
    description: 'A brief description of the third project and its key features.',
    image: 'https://via.placeholder.com/400x300',
    demo: '#',
    code: '#'
  }
]
</script>
