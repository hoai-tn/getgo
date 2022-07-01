<template>
  <div class="home row">
    <div class="header-section relative-position">
      <div class="banner">
        <div>
          <div style="background: #fff; height: 400px; width: 100vw"></div>
          <!-- <img src="../assets/images/banner_home.jpg" alt="banner"> -->
        </div>
        <SearchBox />
      </div>
    </div>
    <div class="col-8 q-mx-auto">
    
    </div>
  </div>
</template>

<script>
import SearchBox from "@/components/searchBox/index.vue";
export default {
  name: "HomeView",
  components: { SearchBox },
};
</script>
<style lang="sass" scoped>
.select-box
  border: 4px solid #ffc709
  border-radius: 8px
  padding: 0px !important
  .custom-select-box
    width: 24%
    display: inline-block
</style>
