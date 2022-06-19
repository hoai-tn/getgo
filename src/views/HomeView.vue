<template>
  <div class="home row">
    <div class="header-section relative-position">
      <div class="banner">
        <div>
          <img src="../assets/images/banner_home.jpg" alt="banner">
        </div>
        <SearchBox/>
      </div>
    </div>
    <div class="col-8 q-mx-auto">body</div>
  </div>
</template>

<script>
import SearchBox from "@/components/searchBox/index.vue";
export default {
  name: "HomeView",
  components: { SearchBox },
};
</script>
<style scoped></style>
