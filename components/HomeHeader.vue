<template>
  <swiper class="swiper" :options="swiperOptions">
    <swiper-slide v-for="item in items" :key="item.Id">
      <div
        class="slide-backdrop"
        :style="{
          backgroundImage: `url('${$axios.defaults.baseURL}/Items/${item.Id}/Images/Backdrop')`
        }"
      />
      <div class="slide-backdrop-overlay" />
      <div class="slide-content">
        <v-container class="mx-10 mt-10">
          <v-row>
            <v-col cols="5">
              <v-img
                v-if="item.ImageTags && item.ImageTags.Logo"
                :src="`${$axios.defaults.baseURL}/Items/${item.Id}/Images/Logo`"
              />
              <h1 v-else class="text-truncate">{{ item.Name }}</h1>
              <h2 v-if="item.Taglines" class="text-truncate">
                {{ item.Taglines[0] }}
              </h2>
              <media-info :item="item" year runtime rating />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination"></div>
  </swiper>
</template>

<script lang="ts">
import Vue from 'vue';
import { BaseItemDto, ImageType, ItemFields } from '~/api';
import imageHelper from '~/mixins/imageHelper';

export default Vue.extend({
  mixins: [imageHelper],
  data() {
    return {
      items: [] as BaseItemDto[],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    };
  },
  async beforeMount() {
    this.items = (
      await this.$api.userLibrary.getLatestMedia({
        userId: this.$auth.user.Id,
        limit: 10,
        fields: [ItemFields.PrimaryImageAspectRatio],
        enableImageTypes: [ImageType.Backdrop, ImageType.Logo],
        imageTypeLimit: 1
      })
    ).data;
  }
});
</script>

<style lang="scss" scoped>
.slide-backdrop {
  padding-bottom: 46.25%;
  background-position: right center;
  background-size: contain;
  background-repeat: no-repeat;
  box-sizing: border-box;
  mask-image: linear-gradient(
    180deg,
    rgba(18, 18, 18, 1) 60%,
    rgba(18, 18, 18, 0) 100%
  );
  z-index: 1;
  animation: backdrop-fadein 800ms ease-in normal both;
}

.slide-backdrop-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  background: linear-gradient(
    90deg,
    rgba(18, 18, 18, 1) 25%,
    rgba(18, 18, 18, 0) 70%
  );
  z-index: 1;
}

.slide-content {
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  z-index: 2;
}
</style>
