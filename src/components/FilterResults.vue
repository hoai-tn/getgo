<template>
  <div class="result-box" style="background: #f9f9f9; padding: 10px 20px">
    <p class="text-h5 text-bold">Lọc kết quả</p>
    <div class="bg-primary text-white q-my-md text-uppercase q-py-sm">
      Tất cả
    </div>

    <div class="row justify-center q-gutter-lg q-my-sm">
      <div
        :class="[
          isDomestic ? 'bg-primary text-white' : 'bg-white text-black',
          'day-btn',
          'col-4',
        ]"
        @click="() => (isDomestic = true)"
      >
        Trong nước
      </div>
      <div
        :class="[
          !isDomestic ? 'bg-primary text-white' : 'bg-white text-black',
          'day-btn',
          'col-4',
        ]"
        @click="() => (isDomestic = false)"
      >
        Nước ngoài
      </div>
    </div>
    <div class="title-space">loại hình tour</div>
    <q-select square outlined v-model="typeTour" :options="typesTourOptions" />
    <div class="title-space">điểm đi</div>
    <q-select
      square
      outlined
      v-model="placeDeparture"
      :options="placesDepartureOptions"
    />
    <div class="title-space">điểm đến</div>
    <q-select
      square
      outlined
      v-model="placeDestination"
      :options="placesDestinationOptions"
    />
    <div class="title-space">Số ngày</div>
    <div class="choose-day row q-gutter-lg justify-center">
      <div
        v-for="item in numberOfDateOptions"
        :key="item.value"
        :class="[
          item.value === numberOfDate
            ? 'bg-primary text-white'
            : 'bg-white text-black',
          'day-btn',
          'col-4',
        ]"
        @click="() => (numberOfDate = item.value)"
      >
        {{ item.text }}
      </div>
    </div>
    <div class="title-space">Ngày đi</div>
    <q-input
      class="select-box"
      v-model="dateDeparture"
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
            <q-date v-model="dateDeparture">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <div class="title-space">số người</div>
    <div class="choose-day row q-gutter-lg justify-center">
      <div
        v-for="item in numberOfPeopleOptions"
        :key="item.value"
        :class="[
          item.value === numberOfPeople
            ? 'bg-primary text-white'
            : 'bg-white text-black',
          'day-btn',
          'col-4',
        ]"
        @click="() => (numberOfPeople = item.value)"
      >
        {{ item.text }}
      </div>
    </div>
    <div class="title-space">dòng tour</div>
    <div class="choose-day row q-gutter-lg justify-center">
      <div
        v-for="item in typeOfTourOptions"
        :key="item.value"
        :class="[
          item.value === typeOfTour
            ? 'bg-primary text-white'
            : 'bg-white text-black',
          'day-btn',
          'col-4',
        ]"
        @click="() => (typeOfTour = item.value)"
      >
        {{ item.text }}
      </div>
    </div>
    <div>bộ lọc tiềm kiếm</div>
    <div class="title-space">ngần sách của khách hàng</div>
    <q-range
      v-model="budgetOfCustomer"
      :min="1000000"
      :max="100000000"
      :step="1000000"
      label
      snap
    />
    <q-badge color="secondary" class="q-mb-lg">
      {{ budgetOfCustomer.min }} to {{ budgetOfCustomer.max }}
    </q-badge>
    <div class="title-space">thông tin vận chuyển</div>

    <div class="row justify-center q-gutter-lg q-my-sm">
      <div
        :class="[
          isPlane ? 'bg-primary text-white' : 'bg-white text-black',
          'day-btn',
          'col-4',
        ]"
        @click="() => (isPlane = true)"
      >
        Máy bay
      </div>
      <div
        :class="[
          !isPlane ? 'bg-primary text-white' : 'bg-white text-black',
          'day-btn',
          'col-4',
        ]"
        @click="() => (isPlane = false)"
      >
        Ô tô
      </div>
    </div>
    <div class="title-space">hiện thị những chuyến đi có</div>
    <div><q-toggle v-model="isPromotion" /> <span>Khuyến mãi</span></div>
    <div>
      <q-toggle v-model="isAvailable" />
      <span>Còn chỗ</span>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";

const isDomestic = ref(true);

const typeTour = ref();
const typesTourOptions = ["-- tất cả --", "Vé máy bay", "Thuê xe"];

const placeDeparture = ref("");
const placesDepartureOptions = ["Nha Trang", "Sài Gòn", "Đà Nẵng", "Hội An"];

const placeDestination = ref("");
const placesDestinationOptions = ["Nha Trang", "Sài Gòn", "Đà Nẵng", "Hội An"];

const numberOfDate = ref(0);
const numberOfDateOptions = [
  { value: 1, text: "1-3 ngày" },
  { value: 2, text: "4-7 ngày" },
  { value: 3, text: "8-12 ngày" },
  { value: 4, text: "trên 14 ngày" },
];

const numberOfPeople = ref(0);
const numberOfPeopleOptions = [
  { value: 1, text: "1 người" },
  { value: 2, text: "2 người" },
  { value: 3, text: "3-5 người" },
  { value: 4, text: "5+ người" },
];

const typeOfTour = ref(0);
const typeOfTourOptions = [
  { value: 1, text: "Cao cấp" },
  { value: 2, text: "Tiêu chuẩn" },
  { value: 3, text: "Tiết kiệm" },
  { value: 4, text: "Giá tốt" },
];

const dateDeparture = ref(null);

const budgetOfCustomer = ref({
  min: 1000000,
  max: 100000000,
});

const isPlane = ref(true);

const isPromotion = ref(false);
const isAvailable = ref(true);

</script>

<style lang="sass" scoped>
.day-btn
    background: white
    padding: 10px 0px
    text-align: center
    cursor: pointer
    border-radius: 4px
    &:hover
        background: $primary!important
        color: white!important
        transition: .5s all
.title-space
    margin: 15px 0px
    text-transform: uppercase
    font-weight: bold
</style>
