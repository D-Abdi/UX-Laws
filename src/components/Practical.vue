<template>
  <section
    id="Practical"
    class="text-gray-400 body-font"
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
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          De wetten van UX in de praktijk
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Hieronder zijn een aantal bedrijven te zien die op hun eigen manier de
          wetten van UX toepassen om de gebruikerservaring te optimaliseren.
        </p>
        <div class="flex mt-6 justify-center">
          <div
            class="w-16 h-1 rounded-full inline-flex"
            style="background-color: #6c88c1"
          ></div>
        </div>
      </div>

      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-fill object-center"
              src="../assets/images/examples/cb.png"
            />
            <div
              class="
                px-8
                py-4
                relative
                z-10
                w-full
                border-4
                opacity-0
                hover:opacity-100
                h-60
              "
              style="background-color: #d87b2e; border-color: #f4d74f"
            >
              <h2
                class="
                  tracking-widest
                  text-sm
                  title-font
                  font-medium
                  text-indigo-400
                  mb-1
                "
              >
                Fitts's Law
              </h2>
              <h1 class="title-font text-lg font-medium text-white mb-3">
                Cool Blue
              </h1>
              <p class="leading-relaxed">
                De knop is rechts van de afbeelding geplaatst om op de westerse
                leesmanier direct zichtbaar te zijn. De knop is ook groot en
                gekleurd zodat het makkelijker gevonden wordt en mee te
                interacteren valt.
              </p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-fill object-center"
              src="../assets/images/examples/airbnb.png"
            />
            <div
              class="
                px-8
                py-4
                relative
                z-10
                w-full
                border-4
                opacity-0
                hover:opacity-100
                h-60
              "
              style="background-color: #c2185e; border-color: #f1206b"
            >
              <h2
                class="
                  tracking-widest
                  text-sm
                  title-font
                  font-medium
                  text-indigo-400
                  mb-1
                "
              >
                Hick's Law
              </h2>
              <h1 class="title-font text-lg font-medium text-white mb-3">
                Airbnb
              </h1>
              <p class="leading-relaxed">
                Airbnb haalt alle keuzes weg en laten de gebruiker zelf
                vertellen waar zij voor kwamen. Dit doen zij door alleen een
                zoekbalk aan te bieden op de homepage.
              </p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-fill object-center"
              src="../assets/images/examples/bershka.png"
            />
            <div
              class="
                px-8
                py-4
                relative
                z-10
                w-full
                border-4
                opacity-0
                hover:opacity-100
                h-60
              "
              style="background-color: #3a8d3d; border-color: #02e677"
            >
              <h2
                class="
                  tracking-widest
                  text-sm
                  title-font
                  font-medium
                  text-indigo-400
                  mb-1
                "
              >
                Jacob's Law
              </h2>
              <h1 class="title-font text-lg font-medium text-white mb-3">
                Bershka
              </h1>
              <p class="leading-relaxed">
                Het winkelmandje staat rechtsboven zoals vrijwel alle web
                winkels dat hebben.
              </p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="../assets/images/examples/google.png"
            />
            <div
              class="
                px-8
                py-4
                relative
                z-10
                w-full
                border-4
                opacity-0
                hover:opacity-100
                h-60
              "
              style="background-color: #75000c; border-color: #f05350"
            >
              <h2
                class="
                  tracking-widest
                  text-sm
                  title-font
                  font-medium
                  text-indigo-400
                  mb-1
                "
              >
                Law of Similarity
              </h2>
              <h1 class="title-font text-lg font-medium text-white mb-3">
                Google
              </h1>
              <p class="leading-relaxed">
                Consumenten nemen visueel vergelijkbare elementen in een ontwerp
                waar als gerelateerd aan betekenis. Dit is de reden waarom
                geklikte Google links een andere kleur hebben in tegenstelling
                tot links die dat niet zijn.
              </p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-fill object-center"
              src="../assets/images/examples/videoland.png"
            />
            <div
              class="
                px-8
                py-4
                relative
                z-10
                w-full
                border-4 border-gray-800
                bg-gray-900
                opacity-0
                hover:opacity-100
                h-60
              "
              style="background-color: #b71828; border-color: #f05350"
            >
              <h2
                class="
                  tracking-widest
                  text-sm
                  title-font
                  font-medium
                  text-indigo-400
                  mb-1
                "
              >
                Miller's Law
              </h2>
              <h1 class="title-font text-lg font-medium text-white mb-3">
                Videoland
              </h1>
              <p class="leading-relaxed">
                Miller's Law beweert dat mensen ongeveer 7 dingen kunnen
                onthouden. Videoland kiest er voor om er maar 7 te laten zien.
                Op deze manier onthouden gebruikers niet de categorieën, maar de
                positie.
              </p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-fill object-center"
              src="../assets/images/examples/zara.png"
            />
            <div
              class="
                px-8
                py-4
                relative
                z-10
                w-full
                border-4 border-gray-800
                bg-gray-900
                opacity-0
                hover:opacity-100
                h-60
              "
              style="background-color: #cb0c58; border-color: #ff6296"
            >
              <h2
                class="
                  tracking-widest
                  text-sm
                  title-font
                  font-medium
                  text-indigo-400
                  mb-1
                "
              >
                Parkinson's Law
              </h2>
              <h1 class="title-font text-lg font-medium text-white mb-3">
                Zara
              </h1>
              <p class="leading-relaxed">
                Parkinson's Law beweert dat elke taak wordt opgeblazen totdat
                alle beschikbare tijd is besteeds. Zara geeft je de optie om een opgeslagen
                adres aan te klikken wat de gebruiker tijd bespaart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Practical",
};
</script>
