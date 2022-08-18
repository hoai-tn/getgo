<template>
  <div>
    <h4 class="text-bold">Ưu đã giờ chót</h4>
    <div class="row justify-between q-mt-md">
      <EndowTourItem />
      <EndowTourItem />
      <EndowTourItem />
    </div>
  </div>
</template>
<script>
import EndowTourItem from "./EndowTourItem.vue";

export default {
  components: { EndowTourItem },
};
</script>
