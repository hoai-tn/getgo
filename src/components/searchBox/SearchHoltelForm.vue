<template>
  <div>
    <div>Hotel</div>
    <div class="q-mt-sm">
      <div class="row justify-between">
        <q-input
          v-model="text"
          class="select-box"
          label="Label"
          bg-color="white"
          borderless
          style="width: 50%"
        >
          <template v-slot:prepend>
            <q-icon name="place" />
          </template>
        </q-input>
        <q-input
          v-model="dateStart"
          class="select-box"
          mask="date"
          :rules="['date']"
          placeholder="Start Date"
          borderless
          style="width: 24%"
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
        <q-input
          v-model="dateStart"
          class="select-box"
          mask="date"
          :rules="['date']"
          placeholder="Start Date"
          borderless
          style="width: 24%"
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
      </div>
      <div class="row justify-between">
        <div class="select-box">
          <div class="relative-position custom-select-box">
            <div>Number Of Peoples</div>
            <q-list v-if="!isShowNumberOfPeople" class="absolute-top z-top">
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Videos</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Articles</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
        <q-btn padding="7px" color="primary">
          <q-icon name="arrow_right_alt" size="50px" />
        </q-btn>
      </div>
    </div>
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
  padding: 0px !important
  .custom-select-box
    width: 24%
    display: inline-block

</style>
