<template>
  <div class="home">
    <div class="header-section relative-position">
      <div class="banner">
        <div>
          <img
            src="../assets/images/banner_home.jpg"
            alt="banner"
            style="min-width: 100vw"
          />
        </div>
        <SearchBox />
      </div>
    </div>
    <!-- body -->
    <div class="q-mx-auto" style="width: 70%">
      <EndowSection />
      <DiscoverySection />
      <EndowTour />
      <EndowSpecial />
      <AdvertisementSection />
    </div>
  </div>
</template>

<script>
import SearchBox from "@/components/searchBox/index.vue";
import EndowSection from "@/components/endowSection/index.vue";
import DiscoverySection from "@/components/DiscoverySection.vue";
import EndowTour from "@/components/endowTourSection";
import EndowSpecial from "@/components/endowSpecialSection";
import AdvertisementSection from "@/components/AdvertisementSection";
export default {
  name: "HomeView",
  components: {
    SearchBox,
    EndowSection,
    DiscoverySection,
    EndowTour,
    EndowSpecial,
    AdvertisementSection,
  },
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
