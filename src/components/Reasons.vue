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
              De UX Laws zijn gebaseerd op wetenschappelijke studies binnen de
              psycholgie. De onderzoeken naar mens-computer interacties hebben
              geleid tot bevindingen die in de UX Laws zijn samengevat tot
              praktische tips.
            </p>
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
              De UX Laws zijn bedoeld om de alghele bruikbaarheid van
              applicaties te verbeteren door gebruik te maken van psychologische
              heuristieken. Dit zorgt voor een onderzochte en bewezen basis
              waarmee ontwerpers hun design keuzes kunnen onderbouwen.
            </p>
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
              Het volgen van desing principes zorgt er niet alleen voor dat
              elementen bekend ogen voor gebruikers. Maar het heeft ook als
              voordeel dat elementen er "natuurlijker" uit ziet en ook zo voelt in
              gebruik.
            </p>
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