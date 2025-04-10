<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="bg-white shadow-md px-6 py-3 flex items-center justify-between">
    <div class="text-2xl font-bold text-green-600">
      <RouterLink to="/">Buyly</RouterLink>
    </div>
    <ul class="hidden md:flex space-x-6">
      <li>
        <RouterLink to="/sign-up" class="text-gray-700 hover:text-green-600"
          >Sign Up</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/" class="text-gray-700 hover:text-green-600"
          >Home</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/products" class="text-gray-700 hover:text-green-600"
          >Products</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/about" class="text-gray-700 hover:text-green-600"
          >About</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/contact" class="text-gray-700 hover:text-green-600"
          >Contact</RouterLink
        >
      </li>
    </ul>
    <div class="md:hidden">
      <button class="text-gray-700 focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <div class="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
      <ul class="flex flex-col space-y-2 px-6 py-4">
        <li>
          <RouterLink to="#" class="block text-gray-700 hover:text-green-600"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink to="#" class="block text-gray-700 hover:text-green-600"
            >About</RouterLink
          >
        </li>
        <li>
          <RouterLink to="#" class="block text-gray-700 hover:text-green-600"
            >Services</RouterLink
          >
        </li>
        <li>
          <RouterLink to="#" class="block text-gray-700 hover:text-green-600"
            >Contact</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
