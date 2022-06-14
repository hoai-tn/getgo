<template>
  <q-layout view="lHh Lpr lFf">
    <Nav />
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
    <p>footer</p>
  </q-layout>
</template>

<script>
import { ref } from "vue";

import Nav from "@/components/Nav.vue";
export default {
  name: "LayoutDefault",
  components: {
    Nav,
  },
  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
