<template>
  <div class="q-mx-auto row" style="width: 70%">
    <div class="col-3">
      <FilterResults />
    </div>
    <div class="col-9" style="padding: 20px">
      <h4 class="text-center">
        Danh sách tour du lịch khởi hành từ TP. Hồ Chí Minh
      </h4>
      <div style="border-bottom: 1px solid"></div>
      <ListFindTour />
    </div>
  </div>
</template>

<script>
import FilterResults from "@/components/FilterResults.vue";
import ListFindTour from "@/components/ListFindTour.vue";
export default {
  components: { FilterResults, ListFindTour },
};
</script>

<style lang="sass" scoped></style>
