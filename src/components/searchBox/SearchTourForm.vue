<template>
  <div>
    <q-select
      filled
      bottom-slots
      v-model="model"
      :options="options"
      label="Label"
      counter
      :dense="dense"
      :options-dense="denseOpts"
    >
      <template v-slot:prepend>
        <q-icon name="place" @click.stop />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click.stop="model = ''" class="cursor-pointer" />
      </template>

      <template v-slot:hint> Field hint </template>
    </q-select>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      model: ref(null),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      dense: ref(false),
      denseOpts: ref(false),
    };
  },
};
</script>

<style></style>
