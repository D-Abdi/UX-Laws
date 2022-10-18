<template>
  <section
    id="Theoretic"
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
    <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">
      <div class="text-center mb-10 md:mb-0">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"
        >
          Hoe werken de wetten van UX?
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
          Vier veel voorkomende UX Laws, waar ze vandaan komen en hoe ze werken.
        </p>
        <div class="flex mt-6 justify-center">
          <div
            class="w-16 h-1 rounded-full inline-flex"
            style="background-color: #5d883a"
          ></div>
        </div>
      </div>
      <div class="flex mx-auto flex-wrap mb-0 md:mb-10">
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
            tracking-wider
            rounded-t
            cursor-pointer
            transition-all
          "
          :class="{
            fittsBorder: activeExample === examples.fitts,
          }"
          @click="activeExample = examples.fitts"
        >
          <div class="animate-example inline-flex items-center">
            <img src="../assets/images/fitts.png" class="w-5 h-5 mr-3" />
            <span class="fitts-color">Fitts</span>
          </div>
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
            transition-all
          "
          :class="{ hicksBorder: activeExample === examples.hick }"
          @click="activeExample = examples.hick"
        >
        <div class="animate-example inline-flex items-center">
          <img src="../assets/images/hick.png" class="w-5 h-5 mr-3" />
          <span class="hicks-color">Hick</span>
        </div>
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
            transition-all
          "
          :class="{ jacobsBorder: activeExample === examples.jacob }"
          @click="activeExample = examples.jacob"
        >
        <div class="animate-example inline-flex items-center">
          <img src="../assets/images/jacobslaw.png" class="w-5 h-5 mr-3" />
          <span class="jacobs-color">Jacob</span>
        </div>
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
            transition-all
          "
          :class="{ similarBorder: activeExample === examples.similar }"
          @click="activeExample = examples.similar"
        >
        <div class="animate-example inline-flex items-center">
          <img src="../assets/images/similar.png" class="w-5 h-5 mr-3" />
          <span class="similar-color">Similarity</span>
        </div>
        </a>
      </div>
      <div class="w-full mb-0 md:mb-10">
        <iframe
          title="vimeo-player"
          :src="activeExample.video"
          class="object-cover object-center rounded w-full h-80"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="flex flex-col text-center w-full">
        <h1 class="text-xl font-medium title-font mb-4 text-gray-900">
          {{ activeExample.title }}
        </h1>
        <p
          class="lg:w-2/3 mx-auto leading-relaxed text-base"
          v-if="activeExample"
        >
          {{ activeExample.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Reasons",
  data() {
    return {
      examples: {
        fitts: {
          title: "Fitt's Law",
          text: `1954, psycholoog Paul Fitts, die het menselijke motorsysteem
          onderzocht, toonde aan dat de tijd die nodig is om naar een doel te
          gaan, afhangt van de afstand tot het doel, maar omgekeerd evenredig is
          met de grootte ervan. Volgens zijn wet resulteren snelle bewegingen en
          kleine doelen in grotere foutenpercentages, vanwege de wisselwerking
          tussen snelheid en nauwkeurigheid. Hoewel er meerdere varianten van de
          wet van Fitts bestaan, omvatten ze allemaal dit idee. De wet van Fitts
          wordt veel toegepast in user experience (UX) en user interface (UI)
          design. Deze wet had bijvoorbeeld invloed op de conventie om
          interactieve knoppen groot te maken (vooral op met de vinger bediende
          mobiele apparaten) - kleinere knoppen zijn moeilijker (en
          tijdrovender) om op te klikken. Evenzo moet de afstand tussen het
          taak-/aandachtsgebied van een gebruiker en de taakgerelateerde knop zo
          kort mogelijk worden gehouden.`,
          video: "https://player.vimeo.com/video/256178248?h=99e6135ab6",
        },
        hick: {
          title: "Hick's Law",
          text: `Hick's Law (of de Hick-Hyman Law) is vernoemd naar een Brits en 
          een Amerikaans psycholoogteam van William Edmund Hick en Ray Hyman. 
          In 1952 ging dit paar op zoek naar de relatie tussen het aantal aanwezige 
          stimuli en de reactietijd van een individu op een bepaalde stimulus. 
          Zoals je zou verwachten, hoe meer stimuli om uit te kiezen, 
          hoe langer het duurt voordat de gebruiker een beslissing neemt met welke hij wil communiceren. 
          Gebruikers die worden gebombardeerd met keuzes, moeten de tijd nemen om te interpreteren en te beslissen, 
          waardoor ze werk krijgen dat ze niet willen.`,
          video: "https://player.vimeo.com/video/256178253?h=5f9b9dc1c4",
        },
        jacob: {
          title: "Jacobs's Law",
          text: `"Gebruikers brengen het grootste deel van hun tijd op andere sites door, 
          dit betekent dat gebruikers er de voorkeur aan geven dat uw site
           op dezelfde manier werkt als alle andere sites die ze al kennen." 
           De wet van Jakob is bedacht door Jakob Nielsen, een gebruikersadvocaat en 
           directeur van de Nielsen Norman Group, die hij samen met dr. Donald A. Norman
          (voormalig vice-president onderzoek bij Apple Computer) oprichtte. beweging
          voor snelle en goedkope verbeteringen van gebruikersinterfaces en heeft 
          verschillende bruikbaarheidsmethoden uitgevonden, waaronder heuristische evaluatie.`,
          video: "https://player.vimeo.com/video/256178259?h=411f4d1f8d",
        },
        similar: {
          title: "Law of Similarity",
          text: `Het menselijk oog heeft de neiging om soortgelijke elementen in
           een ontwerp waar te nemen als een compleet beeld, vorm of groep, zelfs 
           als die elementen gescheiden zijn. Het brein lijkt een verband te leggen 
           tussen elementen van vergelijkbare aard. Vervolgens nemen we ze waar in een relatie met elkaar, 
           waardoor ze worden gescheiden van andere elementen in een ontwerp. 
           Menselijke ogen zijn goed in het opvullen van "gaten" of het verbinden van "punten". 
           Het gebeurt van nature.`,
          video: "https://player.vimeo.com/video/256178270?h=d185f349dd",
        },
      },
      activeExample: null,
    };
  },
  beforeMount() {
    this.activeExample = this.examples.fitts;
  },
};
</script>