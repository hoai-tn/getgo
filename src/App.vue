<template>
  <q-layout view="lHh Lpr lFf">
    <Nav />
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import { ref } from "vue";

import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "LayoutDefault",
  components: {
    Nav,
    Footer,
  },
  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
<style>
.select-box .q-btn-dropdown__arrow {
  display: none;
}
</style>
