<template>
  <q-card class="my-card">
    <img src="@/assets/images/endow_tour_1.jpg/" />
    <div class="left-content">
      <q-icon name="favorite_border" color="white" size="30px" />
    </div>
    <div class="right-content">
      <span class="rate-number">9.0</span>
      <div class="rate-comment">
        <div class="text-bold">Tuyệt Vời</div>
        <div class="emotion-rate">358 quan tâm</div>
      </div>
    </div>
    <q-card-section>
      <div class="text-subtitle2">16/07/2022 - 4 ngày</div>
      <div class="text-h6">
        <a href="#" style="color: black">
          {{ lorem }}
        </a>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      Mã tour:
      <div>NDSGN612-038-160722XE-D-F</div>
      Nơi khởi hành: TP. Hồ Chí Minh
    </q-card-section>
    <q-card-section class="row justify-between items-end">
      <div>
        <div style="font-size: 18px">
          Giá <span style="text-decoration: line-through"> 3,990,000₫ </span>
        </div>
        <div style="font-size: 18px; color: red; font-weight: 600">
          3,990,000₫
        </div>
      </div>
      <div class="sale-box">3% Giảm</div>
    </q-card-section>
    <q-card-section>
      <div class="time-remaining">Còn 00 ngày 00:24:37</div>
    </q-card-section>
    <q-card-section class="row justify-between items-end">
      <div style="cursor: pointer; color: blue; font-weight: bold">
        + Thêm vào so sánh
      </div>
      <div>
        <span style="text-decoration: underline; font-weight: bold">Số chỗ còn</span>
        <span style="color: red; font-size: 23px; font-weight: bold;"> 4</span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  setup() {
    return {
      lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  min-width: 32%
  a
    text-decoration: none
    &:hover
      color: blue!important
  .left-content
    background: #00000021
    border-radius: 8px
    padding: 5px
    position: absolute
    top: 10px
    left: 10px
  .right-content
    position: absolute
    top: 10px
    text-align: right
    right: 10px
    .rate-number
      background: #d9a124c7
      border-radius: 8px
      color: white
      padding: 4px 8px
      font-weight: bold
    .rate-comment
      background: #00000038
      color: white
      border-radius: 8px
      padding: 5px
      margin-top: 3px
      .emotion-rate
        background: #00000043
        font-weight: bold
        padding: 3px
        border-radius: 8px
  .sale-box
    background: red
    border-radius: 4px
    color: white
    padding: 4px 2px
  .time-remaining
    border: 1px solid blue
    border-radius: 8px
    color: blue
    text-align: center
    padding: 10px 0
</style>
