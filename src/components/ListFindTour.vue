<template>
  <div class="row justify-between items-between q-mt-xl">
    <EndowTourItem :isFindTour="true" />
    <EndowTourItem :isFindTour="true" />
    <EndowTourItem :isFindTour="true" />
    <EndowTourItem :isFindTour="true" />
    <EndowTourItem :isFindTour="true" />
    <EndowTourItem :isFindTour="true"/>
  </div>
</template>

<script>
import EndowTourItem from "./endowTourSection/EndowTourItem.vue";
export default {
  components: { EndowTourItem },
};
</script>

<style></style>
