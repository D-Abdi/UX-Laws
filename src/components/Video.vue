<template>
  <section
    id="Video"
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
        items-center
        flex-col-reverse
      "
    >
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <iframe
          src="https://drive.google.com/file/d/1tSTHaWXu9sJskanxCYcoI7LIFnIrh-KR/preview"
          class="object-cover object-center rounded w-full h-80"
          allow="autoplay"
        ></iframe>
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
          Video: The Laws of UX <br class="hidden lg:inline-block" />19
          Psychological Design Principles
        </h1>
        <span
          class="inline-block h-1 w-10 rounded mt-2 mb-4 self-center md:self-start"
          style="background-color: #96881d"
        ></span>
        <p class="mb-8 leading-relaxed">
          Er staat een bijzonder informatieve video over de 19 design principes
          op Youtube. De uitleg matched heel erg met wat er op de website van
          www.lawsofux.com staat, maar Joseph van www.learnsketch.com vat het
          beknopt samen voor degenen die liever beeld materiaal hebben dan
          tekst.
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