<template>
  <div class="q-mb-">
    <h4 class="text-bold" style="margin: 0px">Ưu đãi</h4>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeabe
      animated
      autoplay
      control-color="primary"
      navigation
      height="300px"
      style="padding: 0px"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/quasar.jpg"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/linux-avatar.png"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/cat.jpg"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/linux-avatar.png"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/donuts.png"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/material.png"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/donuts.png"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/linux-avatar.png"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
