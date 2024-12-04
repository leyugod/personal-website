<template>
  <nav class="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <a href="#" class="text-2xl font-bold text-gray-800 dark:text-white">LY</a>
        <div class="hidden md:flex items-center space-x-6">
          <a v-for="item in menuItems" 
             :key="item.href" 
             :href="item.href" 
             class="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
            {{ item.text }}
          </a>
          <button @click="toggleDarkMode" 
                  class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <i class="fas fa-moon dark:hidden"></i>
            <i class="fas fa-sun hidden dark:block text-white"></i>
          </button>
        </div>
        <!-- Mobile menu button -->
        <button @click="isMenuOpen = !isMenuOpen" 
                class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <!-- Mobile menu -->
      <div v-show="isMenuOpen" 
           class="md:hidden mt-4 space-y-4">
        <a v-for="item in menuItems" 
           :key="item.href" 
           :href="item.href" 
           class="block text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
           @click="isMenuOpen = false">
          {{ item.text }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const menuItems = [
  { href: '#about', text: 'About' },
  { href: '#skills', text: 'Skills' },
  { href: '#projects', text: 'Projects' },
  { href: '#contact', text: 'Contact' }
]

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('theme', 
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  )
}

// Initialize dark mode based on system preference or stored setting
if (localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
}
</script>
