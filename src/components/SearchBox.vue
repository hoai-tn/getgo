<template>
  <div class="search-box">
    <div class="q-gutter-y-md" style="max-width: 70%; margin: -200px auto">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-white tabs"
          active-class="active-tab"
          active-color="indigo"
          indicator-color="white"
          align="start"
          narrow-indicator
        >
          <q-tab name="tourTravel" label="Tour travel"></q-tab>
          <q-tab name="hotel" label="Hotel"></q-tab>
          <q-tab
            name="planePlusHotel"
            label="Combo plane ticket + hotel"
          ></q-tab>
          <q-tab name="carPlusHotel" label="Combo car + Hotel"></q-tab>
          <q-tab name="planeTicket" label="Plane titket"></q-tab>
          <q-tab name="researchBooking" label="Research Booking"></q-tab>
        </q-tabs>

        <q-separator></q-separator>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="tourTravel">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="hotel">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="planePlusHotel">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="carPlusHotel">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="planeTicket">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="researchBooking">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      tab: ref("tourTravel"),
    };
  },
};
</script>

<style lang="sass" scoped>

.search-box
    min-height: 400px
    weight: 900px
    .tabs
        height: 90px
        background-color: rgba(45,66,113,.8)
    .active-tab
        background: white
</style>
