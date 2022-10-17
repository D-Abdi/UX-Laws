import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import VueScrollTo from "vue-scrollto";
import "./styles/style.css";
import "./styles/main.css";
import App from "./App.vue";

createApp(App)
  .use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: -75,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true,
  })
  .use(MotionPlugin)
  .mount("#app");
