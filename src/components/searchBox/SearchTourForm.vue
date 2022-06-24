<template>
  <div class="row justify-between items-center q-mt-sm">
    <q-select
      borderless
      class="select-box"
      v-model="model"
      :options="options"
      label="Start Place"
      bg-color="white"
    >
      <template v-slot:prepend>
        <q-icon name="place" @click.stop />
      </template>
    </q-select>
    <q-icon name="swap_horiz" size="50px" />
    <q-select
      borderless
      class="select-box"
      v-model="model"
      :options="options"
      label="Arrive Place "
      bg-color="white"
    >
      <template v-slot:prepend>
        <q-icon name="place" @click.stop />
      </template>
    </q-select>
    <q-input
      class="select-box"
      v-model="dateStart"
      mask="date"
      :rules="['date']"
      placeholder="Start Date"
      borderless
    >
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date v-model="dateStart">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <q-select
      class="select-box"
      v-model="model"
      :options="options"
      label="Number Of Days"
      borderless
    >
      <template v-slot:prepend>
        <q-icon name="event" @click.stop />
      </template>
    </q-select>

    <q-btn padding="7px" color="primary">
      <q-icon name="arrow_right_alt" size="50px" />
    </q-btn>
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
      dateStart: ref(""),
      numberOfDays: ref(""),
    };
  },
};
</script>

<style lang="sass" scoped>
.select-box
  border: 4px solid #ffc709
  border-radius: 8px
  width: 20%
  padding: 0px !important
</style>
