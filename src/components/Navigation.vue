<template>
  <header
    class="text-gray-400 bg-gray-900 body-font sticky top-0 bg-color z-50"
  >
    <div
      class="container mx-auto flex flex-wrap px-5 py-2 flex-row justify-center items-center"
    >
      <a
        class="
          flex
          title-font
          font-medium
          items-center
          text-white
          cursor-pointer
        "
        v-scroll-to="'#Hero'"
      >
        <img
          src="../assets/images/logopng.png"
          alt="UX Laws"
          width="75"
          height="75"
        />
        <span class="text-xl">DaSi</span>
      </a>
      <nav
        class="
          hidden
          md:ml-auto md:mr-auto md:flex
          flex-wrap
          items-center
          text-base
          justify-center
        "
      >
        <a
          class="intro Hero mr-5 hover:text-gray-900 nav-link cursor-pointer"
          v-scroll-to="'#Intro'"
          ><span class="intro Intro">Intro</span></a
        >
        <a
          class="intro Hero mr-5 hover:text-gray-900 nav-link cursor-pointer"
          v-scroll-to="'#Reasons'"
          ><span class="reasons Reasons">Redenen</span></a
        >
        <a
          class="mr-5 hover:text-gray-900 nav-link cursor-pointer"
          v-scroll-to="'#Interview'"
          ><span class="interview Interview">Interview</span></a
        >
        <a
          class="mr-5 hover:text-gray-900 nav-link cursor-pointer"
          v-scroll-to="'#Video'"
          ><span class="video Video">Video</span></a
        >
        <a
          class="mr-5 hover:text-gray-900 nav-link cursor-pointer"
          v-scroll-to="'#Theoretic'"
          ><span class="theoretic Theoretic">Theorie</span></a
        >
        <a
          class="mr-5 hover:text-gray-900 nav-link cursor-pointer"
          v-scroll-to="'#Practical'"
          ><span class="Practical Practical">Voorbeelden</span></a
        >
        <a
          class="mr-5 hover:text-gray-900 nav-link cursor-pointer"
          v-scroll-to="'#Articles'"
          ><span class="articles Articles">Artikelen</span>
        </a>
      </nav>
      <div class="inline-flex lg:justify-end">
        <a
          href="https://github.com/D-Abdi"
          target="_blank"
          class="ml-3 rounded-full"
          style="border-color: #f4f1d0"
        >
          <svg
            fill="none"
            stroke="#f4f1d0"
            stroke-width="1"
            class="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="progress-container">
      <div class="progress-bar" id="myBar"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      sections: document.querySelectorAll("section"),
      navLi: document.querySelectorAll("nav"),
    };
  },
  methods: {
    scrollProgress() {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    },
  },
  mounted() {
    window.onscroll = () => {
      const sections = document.querySelectorAll("section");
      const navItems = document.querySelectorAll("nav a span");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 250) {
          current = section.getAttribute("id");
        }
      });

      navItems.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
          a.classList.add("active");
        }
      });
      this.scrollProgress();
    };
  },
};
</script>