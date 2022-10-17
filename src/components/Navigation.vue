<template>
    <header class="text-gray-600 body-font sticky top-0 bg-color z-50">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <a class="mr-5 hover:text-gray-900 cursor-pointer" v-scroll-to="'#Testimonial'">Intro</a>
        <a class="mr-5 hover:text-gray-900 cursor-pointer" v-scroll-to="'#Interview'">Interview</a>
        <a class="mr-5 hover:text-gray-900 cursor-pointer" v-scroll-to="'#Video'">Video</a>
        <a class="mr-5 hover:text-gray-900 cursor-pointer" v-scroll-to="'#Examples'">Examples</a>
        <a class="hover:text-gray-900 cursor-pointer" v-scroll-to="'#Articles'">Articles</a>
        </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0 cursor-pointer" v-scroll-to="'#Hero'">
            <img src="../assets/images/logopng.png" alt="UX Laws" width="75" height="75"/>
            <span class="ml-3 text-xl">DaSi</span>
        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Github
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </button>
        </div>
    </div>
    </header>
</template>

<script>
export default {
    name: "Navigation"
}
</script>