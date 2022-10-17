<template>
  <section
    id="Reasons"
    class="text-gray-600 body-font"
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :visible="{
      opacity: 1,
      y: 0,
    }"
  >
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"
        >
          Redenen om gebruikt te maken van UX Laws
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
          Ontwerpers in het werkveld zijn op zijn minst bekend met UX Laws.
          Velen gebruiken ze als basis om verder op te bouwen. Maar waarom zijn
          de wetten van UX goed om te weten?
        </p>
        <div class="flex mt-6 justify-center">
          <div
            class="w-16 h-1 rounded-full inline-flex"
            style="background-color: #e95444"
          ></div>
        </div>
      </div>
      <div
        class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"
      >
        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div
            class="
              w-20
              h-20
              inline-flex
              items-center
              justify-center
              mb-5
              flex-shrink-0
            "
          >
            <img src="../assets/images/peak.png" class="rounded-full" />
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
              Wetenschappelijke basis
            </h2>
            <p class="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug VHS try-hard.
            </p>
            <a class="mt-3 text-indigo-500 inline-flex items-center"
              >Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div
            class="
              w-20
              h-20
              inline-flex
              items-center
              justify-center
              mb-5
              flex-shrink-0
            "
          >
            <img src="../assets/images/dorethy.png" class="rounded-full" />
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
              Betere bruikbaarheid
            </h2>
            <p class="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug VHS try-hard.
            </p>
            <a class="mt-3 text-indigo-500 inline-flex items-center"
              >Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div
            class="
              w-20
              h-20
              inline-flex
              items-center
              justify-center
              rounded-full
              mb-5
              flex-shrink-0
            "
          >
            <img src="../assets/images/esthetisch.png" class="rounded-full" />
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
              Esthetisch design
            </h2>
            <p class="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug VHS try-hard.
            </p>
            <a class="mt-3 text-indigo-500 inline-flex items-center"
              >Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Reasons",
};
</script>