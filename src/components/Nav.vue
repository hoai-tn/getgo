<template>
  <q-header class="bg-white text-dark" style="height: 70px">
    <q-toolbar style="height: inherit">
      <div class="title">GetGo</div>
      <div class="row q-ml-xl">
        <div class="q-ml-xl">
          <a href="#" class="nav-item">Du Lich</a>
        </div>
        <div class="q-ml-xl">
          <a href="#" class="nav-item">Vận chuyển</a>
        </div>
        <div class="q-ml-xl">
          <a href="#" class="nav-item">Tin tức</a>
        </div>
        <div class="q-ml-xl">
          <a href="#" class="nav-item">Khuyến mãi</a>
        </div>
      </div>
      <div class="row items-center nav-right q-ml-auto">
        <div>
          <q-input
            color="teal"
            outlined
            v-model="text"
            label="Bắt đầu tìm kiếm"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div>
          <q-icon size="40px" name="person" />
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>
<script>
export default {};
</script>
<style lang="sass" scoped>
.title
  font-size: 30px
  font-weight: bold
.nav-item
  text-decoration: none
  color: $dark
  cursor: pointer
  font-weight: 700
</style>
