<template>
  <section
    id="Hero"
    class="text-gray-600 body-font"
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :enter="{
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
        items-center
        justify-center
        flex-col
      "
    >
      <img
        class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        src="../assets/images/hero.jpg"
      />
      <div class="text-center lg:w-2/3 w-full">
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          The Laws of UX
        </h1>
        <p class="mb-8 leading-relaxed">
          Een samenvatting waarom het kennen en gebruiken UX Laws een betere ontwerper van je zal maken.<br/> Daisy Romeijn & Daniel Abdi
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>