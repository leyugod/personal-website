<template>
  <section class="min-h-screen flex items-center pt-16">
    <div class="container mx-auto px-6">
      <div class="flex flex-col-reverse lg:flex-row items-center">
        <div class="lg:w-1/2 text-center lg:text-left animate-fade-in">
          <h1 class="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm Le Yu
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Software Developer & Creative Thinker
          </p>
          <div class="flex justify-center lg:justify-start space-x-4">
            <a href="#contact" 
               class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get in Touch
            </a>
            <a href="#projects" 
               class="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              View Projects
            </a>
          </div>
        </div>
        <div class="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
          <img src="https://via.placeholder.com/500" 
               alt="Profile" 
               class="rounded-full w-64 h-64 mx-auto shadow-lg">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>
