<template>
  <div class="row justify-between items-center q-mt-sm">
    <q-select
      borderless
      class="select-box"
      v-model="startPlace"
      :options="placeOptions"
      label="Điểm đi"
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
      v-model="arrivePlace"
      :options="arrivePlaceOptions"
      label="Điểm đến"
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
      placeholder="Ngày đi"
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
      v-model="numberOfDays"
      :options="dayOptions"
      label="Số ngày"
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
      startPlace: ref(null),
      arrivePlace: ref(null),
      dateStart: ref(""),
      numberOfDays: ref(""),

      placeOptions: ["Nha Trang", "Đà Lạt", "Phú Quốc"],
      arrivePlaceOptions: ["Ninh Thuận", "Đà Nẵng", "Khánh Hòa"],
      dayOptions: ["1 - 3 ngày", "4 - 7 ngày", "8 - 14 ngày", "> 14 ngày"],
      dense: ref(false),
      denseOpts: ref(false),
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
