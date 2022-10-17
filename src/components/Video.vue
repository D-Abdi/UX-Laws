<template>
  <section
    id="Video"
    class="text-gray-600 body-font"
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :visible="{
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: '150',
        delay: 250,
      },
    }"
  >
    <div
      class="
        container
        mx-auto
        flex
        px-5
        py-24
        md:flex-row
        flex-col
        items-center
      "
    >
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <iframe
          src="https://drive.google.com/file/d/1tSTHaWXu9sJskanxCYcoI7LIFnIrh-KR/preview"
          width="550"
          height="425"
          allow="autoplay"
        ></iframe>
      </div>
      <div
        class="
          lg:flex-grow
          md:w-1/2
          lg:pl-24
          md:pl-16
          flex flex-col
          md:items-start md:text-left
          mb-16
          md:mb-0
          items-ends
          text-center
        "
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          Video: The Laws of UX <br class="hidden lg:inline-block" />19
          Psychological Design Principles
        </h1>
        <span
          class="inline-block h-1 w-10 rounded mt-2 mb-4"
          style="background-color: #96881d"
        ></span>
        <p class="mb-8 leading-relaxed">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
          try-hard chambray.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Video",
};
</script>