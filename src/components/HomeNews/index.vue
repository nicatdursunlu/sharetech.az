<template>
  <div class="news">
    <div v-if="newsLength" class="row">
      <SingleNews
        v-for="news in allNews.slice(0, visible)"
        :key="news.title"
        :news="news"
      />
    </div>

    <div v-if="visible < newsLength" class="news__btn-box">
      <button @click="loadMoreBtn" class="news__btn-box-button">
        Diger xeberler
      </button>
    </div>
  </div>
</template>

<script>
import SingleNews from "./SingleNews";

export default {
  components: {
    SingleNews,
  },
  props: ["query", "searchState", "allNews"],
  data: () => ({
    visible: 10,
    loading: true,
    errored: false,
  }),
  updated() {
    console.log("home news", this.allNews);
  },
  methods: {
    loadMoreBtn() {
      this.visible = this.visible + 10;
    },
  },
  computed: {
    newsLength() {
      return this.allNews.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
