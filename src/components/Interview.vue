<template>
  <section
    id="Interview"
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
      <div
        class="
          lg:flex-grow
          md:w-1/2
          lg:pr-24
          md:pr-16
          flex flex-col
          md:items-start md:text-left
          mb-16
          md:mb-0
          items-center
          text-center
        "
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          Interview met Niek Jansen <br class="hidden lg:inline-block" />UX Designer
          & Teacher at Hogeschool Rotterdam
        </h1>
        <span
          class="inline-block h-1 w-10 rounded mt-2 mb-4"
          style="background-color: #a6307f"
        ></span>
        <p class="mb-8 leading-relaxed">
          Uit het gesprek kwam voort dat het kennen van de UX Laws zeer
          belangrijk is, maar dat het in het veel gevallen een kwestie is van de
          kennis je eigen maken zodat je het kan toepassen op maat. Elk project
          verschilt op een manier van elkaar, daarom is het onderzoekers nog
          niet gelukt om een one-size fits all framework te maken voor hoe je
          het moet toepassen. In plaats daarvan is het noodzakelijk om naar elke
          casus te kijken welke tools er in je UX gereedschapskist het beste
          passen. Ook helpt het kennen van de UX Laws en de bronnen om keuzes
          met wetenschappelijk onderzoek te onderbouwen. Het onderzoek wat
          bewijst dat het werkt is al gedaan, daarom is het slim om dat als
          basis te gebruiken in plaats van dat men het wiel opnieuw uitvind.
        </p>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <iframe
          src="https://drive.google.com/file/d/1euvSFFz74WihNYPNU-JlcYWpY0ZgKVb_/preview"
          width="500"
          height="400"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Interview",
};
</script>