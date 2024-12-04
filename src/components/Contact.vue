<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Get in Touch
      </h2>
      <div class="max-w-lg mx-auto">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block text-gray-700 dark:text-gray-300 mb-2" for="name">
              Name
            </label>
            <input type="text" 
                   id="name" 
                   v-model="formData.name"
                   required
                   class="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-gray-700 dark:text-gray-300 mb-2" for="email">
              Email
            </label>
            <input type="email" 
                   id="email" 
                   v-model="formData.email"
                   required
                   class="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div>
            <label class="block text-gray-700 dark:text-gray-300 mb-2" for="message">
              Message
            </label>
            <textarea id="message" 
                      v-model="formData.message"
                      required
                      rows="4" 
                      class="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </textarea>
          </div>
          <button type="submit" 
                  :disabled="isSubmitting"
                  class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)
const formData = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    formData.name = ''
    formData.email = ''
    formData.message = ''
    
    alert('Thank you for your message! I will get back to you soon.')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
