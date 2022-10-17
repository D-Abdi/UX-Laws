<template>
  <section
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
              src="https://dummyimage.com/302x302"
            />
            <p class="leading-relaxed">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware.
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
              HOLDEN CAULFIELD
            </h2>
            <p class="text-gray-500">Senior Product Designer</p>
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
              src="https://dummyimage.com/305x305"
            />
            <p class="leading-relaxed">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware.
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
              HENRY LETHAM
            </h2>
            <p class="text-gray-500">CTO</p>
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