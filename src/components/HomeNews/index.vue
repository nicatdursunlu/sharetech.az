<template>
  <div class="news">
    <div class="row" v-if="visibleNews.length">
      <SingleNews
        v-for="news in allNews.slice(1, visible)"
        :key="news.id"
        :news="news"
      />
    </div>
    <h1 v-else class="news__loading">Loading...</h1>
    <div v-if="visible < allNews.length" class="news__btn-box">
      <button @click="loadMoreBtn" to="#" class="news__btn-box-button">
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
  mounted() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      const response = await fetch(
        `https://www.episodate.com/api/most-popular`
      );
      const json = await response.json();
      this.allNews = json.tv_shows;
      this.visibleNews = this.allNews;
    },
    loadMoreBtn() {
      this.visible = this.visible + 7;
    },
  },
  data: () => ({
    visible: 6,
    allNews: [],
    visibleNews: [],
  }),
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>