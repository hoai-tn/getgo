<template>
  <div class="search-box">
    <div class="q-gutter-y-md" style="max-width: 70%; margin: -200px auto">
      <q-card>
        <q-tabs
          v-model="tabTourTravel"
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

        <q-tab-panels v-model="tabTourTravel" animated>
          <q-tab-panel name="tourTravel">
            <div class="text-h6">
              <q-btn
                @click="() => (isForeign = false)"
                class="q-mr-md"
                :color="isForeign ? 'white' : 'primary'"
                label="Domestic Tour"
                :text-color="isForeign ? 'black' : 'white'"
              />
              <q-btn
                @click="() => (isForeign = true)"
                :color="isForeign ? 'primary' : 'white'"
                :text-color="isForeign ? 'white' : 'black'"
                label="Tour Foreign"
              />
            </div>
            <div v-if="!isForeign">
              <q-tabs
                v-model="tabTypeTour"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="start"
                narrow-indicator
              >
                <q-tab name="packageTour" label="Package Tour" />
                <q-tab name="familyTour" label="Family Tour" />
                <q-tab name="transVietTour" label="Trans Viet Nam Tour" />
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="tabTypeTour" animated>
                <q-tab-panel name="packageTour">
                  <div class="text-h6">Package Tour</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>

                <q-tab-panel name="familyTour">
                  <div class="text-h6">Family Tour</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>

                <q-tab-panel name="transVietTour">
                  <div class="text-h6">Trans Viet Nam Tour</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>
              </q-tab-panels>
            </div>
            <SearchTourForm v-else />
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
import SearchTourForm from "./SearchTourForm.vue";
export default {
  components: { SearchTourForm },
  setup() {
    return {
      tabTourTravel: ref("tourTravel"),
      tabTypeTour: ref("packageTour"),
      isForeign: ref(false),
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
