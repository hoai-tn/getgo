<template>
  <div class="home row">
    <div class="header-section relative-position">
      <div class="banner">
        <div>
          <!-- <div style="background: #fff; height: 400px; width: 100vw"></div> -->
          <img src="../assets/images/banner_home.jpg" alt="banner" />
        </div>
        <SearchBox />
      </div>
    </div>
    <!-- body -->
    <div class="q-mx-auto" style="width: 70%">
      <EndowSection />
      <DiscoverySection />
    </div>
  </div>
</template>

<script>
import SearchBox from "@/components/searchBox/index.vue";
import EndowSection from "@/components/endowSection/index.vue";
import DiscoverySection from "@/components/DiscoverySection.vue";
export default {
  name: "HomeView",
  components: { SearchBox, EndowSection, DiscoverySection },
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
