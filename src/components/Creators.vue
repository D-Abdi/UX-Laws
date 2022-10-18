<template>
  <section
    class="text-gray-600 body-font"
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: '150',
        delay: 250,
      },
    }"
  >
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4 justify-center">
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4 mx-12">
          <div class="h-full text-center">
            <img
              alt="testimonial"
              class="
                w-20
                h-20
                mb-8
                object-cover object-center
                rounded-full
                inline-block
                border-2 border-gray-200
                bg-gray-100
              "
              src="../assets/images/daniel.jpg"
            />
            <p class="leading-relaxed h-20">
              "Mijn doel is om in staat te zijn mijn opgedane kennis over UX
              Laws, succesvol over te kunnen dragen aan de 2e klassers tijdens
              de workshop."
            </p>
            <span
              class="inline-block h-1 w-10 rounded mt-6 mb-4"
              style="background-color: #297aa3"
            ></span>
            <h2
              class="
                text-gray-900
                font-medium
                title-font
                tracking-wider
                text-sm
              "
            >
              DANIEL ABDI
            </h2>
            <p class="text-gray-500">Creative Media & Game Technologies</p>
            <div class="flex justify-center mt-3">
              <a
                href="https://www.linkedin.com/in/daniel-abdi-599883196"
                target="_blank"
                class="text-gray-500 rounded-full border-gray-500 border-2 p-1"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/D-Abdi"
                target="_blank"
                class="ml-3 border-gray-500 rounded-full border-2 p-1"
              >
                <svg
                  fill="none"
                  stroke="#f4f1d0"
                  stroke-width="1"
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 lg:mb-0 p-4 mx-12">
          <div class="h-full text-center">
            <img
              alt="testimonial"
              class="
                w-20
                h-20
                mb-8
                object-cover object-center
                rounded-full
                inline-block
                border-2 border-gray-200
                bg-gray-100
              "
              src="../assets/images/simone.jpg"
            />
            <p class="leading-relaxed h-20">
              "Mijn doel is om de logica achter UX Laws beter begrijpen zodat ik
              mijn ontwerpkeuzes beter kan onderbouwen."
            </p>
            <span
              class="inline-block h-1 w-10 rounded mt-6 mb-4"
              style="background-color: #e95444"
            ></span>
            <h2
              class="
                text-gray-900
                font-medium
                title-font
                tracking-wider
                text-sm
              "
            >
              SIMONE ROMEIJN
            </h2>
            <p class="text-gray-500">Communication & Multimedia Design</p>
            <div class="flex justify-center mt-3">
              <a
                href="https://www.linkedin.com/in/simone-romeijn-b4142b1b9/"
                target="_blank"
                class="text-gray-500 rounded-full border-gray-500 border-2 p-1"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/simoneromeijn/"
                target="_blank"
                class="ml-3 border-gray-500 rounded-full border-2 p-1"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Creators",
};
</script>