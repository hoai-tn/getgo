<template>
  <div>
    <h4 class="text-bold">Vì sao chọn Vietravel</h4>
    <div class="list-item">
      <div v-for="n in 6" :key="n">
        <q-icon name="maps_home_work" style="color: blue" size="150px" />
        <div class="text-bold">Mạng bán tour</div>
        <div>Đầu tiên tại Việt Nam Ứng dụng công nghệ mới nhất</div>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.list-item
  display: grid
  grid-template-columns:  auto auto auto
  gap: 60px
  text-align: center
</style>
