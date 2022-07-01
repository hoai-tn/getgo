<template>
  <div>
    <div>Hotel</div>
    <div class="q-mt-sm">
      <div class="row justify-between">
        <div class="col-6 q-pr-sm">
          <q-input
            v-model="arrivePlace"
            class="select-box"
            label="Điểm đến"
            bg-color="white"
            borderless
          >
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
          </q-input>
        </div>
        <div class="col-3 q-px-sm">
          <q-input
            v-model="startDate"
            class="select-box q-px-sm"
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
                  <q-date v-model="startDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div class="col-3 q-pl-sm">
          <q-input
            v-model="returnDay"
            class="select-box col-3"
            mask="date"
            :rules="['date']"
            placeholder="Ngày về"
            borderless
          >
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="returnDay">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row justify-between q-mt-md">
        <div class="col-3 q-pr-sm">
          <div class="select-box">
            <q-btn-dropdown class="btn-dropdown items-start">
              <template v-slot:label>
                <div
                  class="no-wrap text-left flex items-center"
                  style="text-transform: none"
                >
                  <q-icon name="place" />
                  <div class="float-right">
                    <span>Số người</span>
                    <div class="text-subtitle2">{{ totalPeople }} khách</div>
                  </div>
                </div>
              </template>
              <q-list>
                <q-item disable @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Số người tham gia</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable @click="onItemClick">
                  <q-item-section>
                    <q-item-label class="row justify-between">
                      <div>
                        <q-btn
                          @click="
                            () =>
                              numberOfPeople.Adults > 0
                                ? numberOfPeople.Adults--
                                : 0
                          "
                          >-</q-btn
                        >
                        <span class="q-mx-sm">{{ numberOfPeople.Adults }}</span>
                        <q-btn @click="() => numberOfPeople.Adults++">+</q-btn>
                      </div>
                      <div>
                        <div>Người lớn</div>
                        <small>Từ 12 tuổi trở lên</small>
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
        <div class="col-3 q-px-sm">
          <div class="select-box">
            <q-btn-dropdown class="btn-dropdown items-start">
              <template v-slot:label>
                <div
                  class="no-wrap text-left flex items-center"
                  style="text-transform: none"
                >
                  <q-icon name="place" />
                  <div class="float-right">
                    <span>Số phòng</span>
                    <div class="text-subtitle2">0 phòng</div>
                  </div>
                </div>
              </template>
              <q-list>
                <q-item disable @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Số phòng</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable @click="onItemClick">
                  <q-item-section>
                    <q-item-label>
                      <div>
                        <q-btn>-</q-btn>
                        <span class="q-mx-sm">0</span>
                        <q-btn class="q-mr-md">+</q-btn>
                        Phòng
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
        <div class="col-6 q-pl-sm">
          <q-btn style="width: 100%" color="primary">
            <q-icon name="arrow_right_alt" size="50px" />
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const numberOfPeople = ref({
  Adults: 0,
  children: 0,
  baby: 0,
});

const model = ref(null);
const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
const dense = ref(false);
const denseOpts = ref(false);
const dateStart = ref("");
const numberOfDays = ref("");

const totalPeople =    () => {
  numberOfPeople.value.Adults +
    numberOfPeople.value.children +
    numberOfPeople.value.baby;
};
</script>

<style lang="sass" scoped>
.select-box
  border: 4px solid #ffc709
  border-radius: 8px
  padding: 0px !important

  .btn-dropdown
    color: white
    height: 56px
    padding: 2px
    color: black
    width: 100%
</style>
