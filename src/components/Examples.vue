<template>
  <section
    id="Examples"
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
    <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">
      <div class="text-center mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"
        >
          Voorbeelden van UX Laws
        </h1>
        <p
          class="
            text-base
            leading-relaxed
            xl:w-2/4
            lg:w-3/4
            mx-auto
            text-gray-500s
          "
        >
          Hoe worden UX Laws toegepast?
        </p>
        <div class="flex mt-6 justify-center">
          <div
            class="w-16 h-1 rounded-full inline-flex"
            style="background-color: #5d883a"
          ></div>
        </div>
      </div>
      <div class="flex mx-auto flex-wrap mb-20">
        <a
          class="
            sm:px-6
            py-3
            w-1/2
            sm:w-auto
            justify-center
            sm:justify-start
            border-b-2
            title-font
            font-medium
            inline-flex
            items-center
            leading-none
            border-indigo-500
            text-indigo-500
            tracking-wider
            rounded-t
            cursor-pointer
          "
        >
          <img src="../assets/images/fitts.png" class="w-5 h-5 mr-3" />
          <span class="fitts-color">Fitts</span>
        </a>
        <a
          class="
            sm:px-6
            py-3
            w-1/2
            sm:w-auto
            justify-center
            sm:justify-start
            border-b-2
            title-font
            font-medium
            inline-flex
            items-center
            leading-none
            border-gray-200
            hover:text-gray-900
            tracking-wider
            cursor-pointer
          "
        >
          <img src="../assets/images/hicks.png" class="w-5 h-5 mr-3" />
          <span class="hicks-color">Hick</span>
        </a>
        <a
          class="
            sm:px-6
            py-3
            w-1/2
            sm:w-auto
            justify-center
            sm:justify-start
            border-b-2
            title-font
            font-medium
            inline-flex
            items-center
            leading-none
            border-gray-200
            hover:text-gray-900
            tracking-wider
            cursor-pointer
          "
        >
          <img src="../assets/images/jacob.png" class="w-5 h-5 mr-3" />
          <span class="jacobs-color">Jacob</span>
        </a>
        <a
          class="
            sm:px-6
            py-3
            w-1/2
            sm:w-auto
            justify-center
            sm:justify-start
            border-b-2
            title-font
            font-medium
            inline-flex
            items-center
            leading-none
            border-gray-200
            hover:text-gray-900
            tracking-wider
            cursor-pointer
          "
        >
          <img src="../assets/images/similar.png" class="w-5 h-5 mr-3" />
          <span class="similar-color">Similarity</span>
        </a>
      </div>
      <!-- <img
        class="

        "
        alt="hero"
        src="https://dummyimage.com/720x600"
      /> -->
      <div
        class="
          block
          mx-auto
          mb-10
          object-cover object-center
          rounded
        "
      >
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/256178248?h=99e6135ab6"
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="flex flex-col text-center w-full">
        <h1 class="text-xl font-medium title-font mb-4 text-gray-900">
          Fitt's Law
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom prism food truck
          ugh squid celiac humblebrag.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Reasons",
  data() {
    return {};
  },
};
</script>