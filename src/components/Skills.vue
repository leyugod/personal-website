<template>
  <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Skills & Expertise
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="skill in skills" 
             :key="skill.name"
             class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center skill-icon">
          <i :class="[skill.icon, skill.color]" class="text-4xl mb-4"></i>
          <h3 class="font-semibold text-gray-800 dark:text-white">{{ skill.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400' },
  { name: 'Vue.js', icon: 'fab fa-vuejs', color: 'text-green-500' },
  { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
  { name: 'Node.js', icon: 'fab fa-node', color: 'text-green-600' },
  { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
  { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-500' },
  { name: 'Database', icon: 'fas fa-database', color: 'text-purple-600' }
]
</script>
