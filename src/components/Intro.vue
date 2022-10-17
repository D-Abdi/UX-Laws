<template>
  <section
    id="Intro"
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
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
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
          What zijn de wetten van UX?
        </h1>
        <span
          class="inline-block h-1 w-10 rounded mt-2 mb-4"
          style="background-color: #297aa3"
        ></span>
        <p class="mb-8 leading-relaxed">
          Laws of UX is zijn complexe wetenschappelijk onderbouwde heuristieken
          die ontwerpers kunnen helpen keuzes te maken om zo het beste uit het
          project te halen. Ontwerpers kunnen deze kennis gebruiken om meer
          intuïtieve, mensgerichte producten en ervaringen te bouwen. In plaats
          van gebruikers te dwingen zich aan te passen aan het ontwerp van een
          product of ervaring, kunnen we enkele belangrijke principes uit de
          psychologie gebruiken als leidraad om te ontwerpen op een manier die
          is aangepast aan mensen. Met dank aan Jon Yablonski zijn de wetten
          voor iedereen te zien op de site
          <a class="underline" href="www.lawsofux.com">www.lawsofux.com</a>.
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