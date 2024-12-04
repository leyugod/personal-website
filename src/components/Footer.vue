<template>
  <footer class="bg-white dark:bg-gray-800 py-8">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
          © {{ new Date().getFullYear() }} Le Yu. All rights reserved.
        </div>
        <div class="flex space-x-6">
          <a v-for="link in socialLinks" 
             :key="link.name"
             :href="link.url"
             target="_blank"
             :title="link.name"
             class="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors">
            <i :class="link.icon" class="text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  {
    name: 'GitHub',
    url: '#',
    icon: 'fab fa-github'
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: 'fab fa-linkedin'
  },
  {
    name: 'Twitter',
    url: '#',
    icon: 'fab fa-twitter'
  }
]
</script>
