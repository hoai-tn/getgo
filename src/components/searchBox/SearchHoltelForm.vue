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
                    <div class="text-subtitle2">{{ totalOfPeoples }} khách</div>
                  </div>
                </div>
              </template>
              <q-list bordered>
                <q-item disable>
                  <q-item-section>
                    <q-item-label>Số người tham gia</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable>
                  <q-item-section>
                    <q-item-label class="row justify-between">
                      <div>
                        <q-btn
                          :disable="numberOfPeople.adults === 0"
                          @click="() => numberOfPeople.adults--"
                        >
                          -
                        </q-btn>
                        <span class="q-mx-sm">{{ numberOfPeople.adults }}</span>
                        <q-btn @click="() => numberOfPeople.adults++">+</q-btn>
                      </div>
                      <div>
                        <div>Người lớn</div>
                        <small>Từ 12 tuổi trở lên</small>
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>
                    <q-item-label class="row justify-between">
                      <div>
                        <q-btn
                          :disable="numberOfPeople.children === 0"
                          @click="() => numberOfPeople.children--"
                        >
                          -
                        </q-btn>
                        <span class="q-mx-sm">{{
                          numberOfPeople.children
                        }}</span>
                        <q-btn @click="() => numberOfPeople.children++"
                          >+</q-btn
                        >
                      </div>
                      <div style="width: 86.43px">
                        <div>Trẻ em</div>
                        <small>Từ 2 - 11 tuổi</small>
                      </div>
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>
                    <q-item-label class="row justify-between">
                      <div>
                        <q-btn
                          :disable="numberOfPeople.baby === 0"
                          @click="() => numberOfPeople.baby--"
                        >
                          -
                        </q-btn>
                        <span class="q-mx-sm">{{ numberOfPeople.baby }}</span>
                        <q-btn @click="() => numberOfPeople.baby++">+</q-btn>
                      </div>
                      <div style="width: 86.43px">
                        <div>Em bé</div>
                        <small>Dưới 2 tuổi</small>
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
                    <div class="text-subtitle2">
                      {{ numberOftheRoom }} phòng
                    </div>
                  </div>
                </div>
              </template>
              <q-list>
                <q-item disable>
                  <q-item-section>
                    <q-item-label>Số phòng</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable>
                  <q-item-section>
                    <q-item-label>
                      <div>
                        <q-btn
                          :disable="numberOftheRoom === 0"
                          @click="() => numberOftheRoom--"
                        >
                          -
                        </q-btn>
                        <span class="q-mx-sm">{{ numberOftheRoom }}</span>
                        <q-btn class="q-mr-md" @click="() => numberOftheRoom++">
                          +
                        </q-btn>
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
import { computed, ref } from "vue";

const numberOfPeople = ref({
  adults: 0,
  children: 0,
  baby: 0,
});
const arrivePlace = ref("");
const returnDay = ref("");

const startDate = ref("");
const returnDate = ref("");
const numberOfDays = ref("");
const numberOftheRoom = ref(0);
const totalOfPeoples = computed({
  get() {
    return (
      numberOfPeople.value.adults +
      numberOfPeople.value.children +
      numberOfPeople.value.baby
    );
  },
});

const totalPeople = () => {
  numberOfPeople.value.adults +
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
