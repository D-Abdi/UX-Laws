<template>
  <section
    id="Articles"
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
      <div class="text-center mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"
        >
          Artikelen over UX Laws in de praktijk
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
          Hieronder zijn een drietal artikelen te zien die wij onder andere
          hebben geraadpleegd voor ons onderzoek de toepassing van wetten van
          UX.
        </p>
        <div class="flex mt-6 justify-center">
          <div
            class="w-16 h-1 rounded-full inline-flex"
            style="background-color: #de6717"
          ></div>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div
            class="
              h-full
              border-2 border-gray-200 border-opacity-60
              rounded-lg
              overflow-hidden
            "
          >
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src="../assets/images/medium.png"
              alt="blog"
            />
            <div class="p-6">
              <h2
                class="
                  tracking-widest
                  text-xs
                  title-font
                  font-medium
                  text-gray-400
                  mb-1
                "
              >
                MEDIUM
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                UX Laws with practical examples.
              </h1>
              <p class="leading-relaxed mb-3">
                Autheur: Carlos Beneyto (Feb 12, 2018)
              </p>
              <div class="flex items-center flex-wrap">
                <a
                  href="https://medium.com/swlh/ux-laws-with-practical-examples-c418b4738d20"
                  target="_blank"
                  class="
                    text-indigo-500
                    inline-flex
                    items-center
                    md:mb-2
                    lg:mb-0
                    cursor-pointer
                    article-link
                  "
                  >Lees meer
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div
            class="
              h-full
              border-2 border-gray-200 border-opacity-60
              rounded-lg
              overflow-hidden
            "
          >
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src="../assets/images/maze.png"
              alt="blog"
            />
            <div class="p-6">
              <h2
                class="
                  tracking-widest
                  text-xs
                  title-font
                  font-medium
                  text-gray-400
                  mb-1
                "
              >
                MAZE
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                UX laws: 21 principles for creating winning designs
              </h1>
              <p class="leading-relaxed mb-3">
                Autheur: Masooma Memon (Jun 10, 2021)
              </p>
              <div class="flex items-center flex-wrap">
                <a
                  href="https://maze.co/collections/ux-ui-design/ux-laws/"
                  target="_blank"
                  class="
                    text-indigo-500
                    inline-flex
                    items-center
                    md:mb-2
                    lg:mb-0
                    cursor-pointer
                    article-link
                  "
                  >Lees meer
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div
            class="
              h-full
              border-2 border-gray-200 border-opacity-60
              rounded-lg
              overflow-hidden
            "
          >
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src="../assets/images/uxplanet.png"
              alt="blog"
            />
            <div class="p-6">
              <h2
                class="
                  tracking-widest
                  text-xs
                  title-font
                  font-medium
                  text-gray-400
                  mb-1
                "
              >
                UX PLANET
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                7 Important UX Laws (with examples)
              </h1>
              <p class="leading-relaxed mb-3">
                Autheur: Rahul Garhwal (Okt 18, 2021)
              </p>
              <div class="flex items-center flex-wrap">
                <a
                  href="https://uxplanet.org/7-important-ux-laws-with-examples-c1ff02a05488"
                  target="_blank"
                  class="
                    text-indigo-500
                    inline-flex
                    items-center
                    md:mb-2
                    lg:mb-0
                    cursor-pointer
                    article-link
                  "
                  >Lees meer
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Articles",
};
</script>