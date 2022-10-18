<template>
<footer class="text-gray-600 body-font bg-color"
v-motion
  :initial="{
    opacity: 0
  }"
  :visibleOnce="{
    opacity: 1
  }"
>
  <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img src="../assets/images/logopng.png" alt="UX Laws" width="75" height="75"/>
      <span class="ml-3 text-xl">DaSi</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 pt-1">© 2022</p>
  </div>
</footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>