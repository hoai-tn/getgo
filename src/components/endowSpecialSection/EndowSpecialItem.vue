<template>
  <div>
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          width="30%"
        />
        <q-card-section>
          <span class="combo-ticket"> Vé máy bay + Khách sạn </span>
          <div class="q-mt-md">
            <a href="#" class="title">
              Thái Lan: Combo 4N3Đ Vé máy bay khứ hồi + 3 đêm phòng khách sạn
              The Berkeley Hotel 4* + Tặng thẻ Oneday Pass BTS Sky Train
            </a>
          </div>
          <div class="rate">
            <div class="q-my-md">
              <span v-for="n in 4" :key="n">
                <q-icon name="star_rate" style="color: #fdc432" size="30px" />
              </span>
            </div>
            <p class="text-grey-6">
              Vé máy bay khứ hồi Vietravel Airlines + Phòng Standard + Ăn sáng
            </p>
            <div class="q-my-md">
              <span class="number-box q-mr-md">9.4</span>
              <span>Rất Tốt</span>
            </div>
          </div>
          <div class="q-mt-md">
            559 Ratchaprarop,, Makkasan, Ratchathewi,, Bangkok, 10400
          </div>
        </q-card-section>
        <q-card-section class="column justify-end items-end" style="width: 40%">
          <div class="text-bold">Giá chỉ từ</div>
          <div>
            <span class="text-red text-h5 text-bold">7,490,000₫</span>/ khách
          </div>
          <div>Ngày đi 28/07/2022</div>
          <div class="row justify-between q-my-md full-width">
            <q-btn outline style="color: blue" label="Ngày khác" />
            <q-btn style="background: red; color: white" label="Đặt ngay" />
          </div>
          <span class="text-blue">Đã bao gồm trong giá</span>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  min-width: 100%
  .combo-ticket
    border-radius: 5px
    color: white
    background: blue
    padding: 6px
  .title
    color: blue
    font-size: 20px
    text-decoration: none
  .number-box
    background: #fdc432
    color: white
    display: inline-block
    font-weight: bold
    font-size: 19px
    padding: 5px
</style>
